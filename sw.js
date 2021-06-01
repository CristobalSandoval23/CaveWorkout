const STATIC_CACHE    = 'static-v4';
const DYNAMIC_CACHE   = 'dynamic-v2';
const INMUTABLE_CACHE = 'inmutable-v1';

const CACHE_DYNAMIC_LIMIT = 50;

const APP_SHELL = [
    // '/',
    '/index.html',
    '/css/style.css',
    '/assets/Antes.jpg',
    '/assets/cristobal.jpg',
    '/assets/Foto1.jpg',
    '/assets/Foto2.jpg',
    '/assets/Foto3.jpg',
    '/assets/Foto4.jpg',
    '/assets/Foto5.jpg',
    '/assets/logo.png',
    '/assets/nicolas.jpg',
    '/assets/training-1.png',
    '/js/main.js',
    '/manifest.json',
    '/pages/offline.html'
];

const APP_SHELL_INMUTABLE = [
    '/index.html'
];


function limpiarCache( cacheName, numeroItems ) {


    caches.open( cacheName )
        .then( cache => {

            return cache.keys()
                .then( keys => {
                    
                    if ( keys.length > numeroItems ) {
                        cache.delete( keys[0] )
                            .then( limpiarCache(cacheName, numeroItems) );
                    }
                });

            
        });
}


self.addEventListener('install', e => {


    const cacheProm = caches.open( STATIC_CACHE )
        .then( cache => {

            return cache.addAll(
                APP_SHELL
            );

        
        });

    const cacheInmutable = caches.open( INMUTABLE_CACHE )
            .then( cache => cache.add(APP_SHELL_INMUTABLE));


    e.waitUntil( Promise.all([cacheProm, cacheInmutable]) );

});


self.addEventListener('activate', e => {


    const respuesta = caches.keys().then( keys => {

        keys.forEach( key => {

            // static-v4
            if (  key !== STATIC_CACHE && key.includes('static') ) {
                return caches.delete(key);
            }

        });

    });



    e.waitUntil( respuesta );

});





self.addEventListener('fetch', e => {


    // 2- Cache with Network Fallback
    const respuesta = caches.match( e.request )
        .then( res => {

            if ( res ) return res;

            // No existe el archivo

            return fetch( e.request ).then( newResp => {

                caches.open( DYNAMIC_CACHE )
                    .then( cache => {
                        cache.put( e.request, newResp );
                        limpiarCache( DYNAMIC_CACHE, CACHE_DYNAMIC_LIMIT );
                    });

                return newResp.clone();
            })
            .catch( err => {

                if ( e.request.headers.get('accept').includes('text/html') ) {
                    return caches.match('/pages/offline.html');
                }

            
            });


        });




    e.respondWith( respuesta );



});