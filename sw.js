const CACHE_STATIC_NAME  = 'static-v2';
const CACHE_DYNAMIC_NAME = 'dynamic-v2';
const CACHE_INMUTABLE_NAME = 'inmutable-v2';

const CACHE_DYNAMIC_LIMIT = 50;


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
    // const cacheProm = caches.open(cache_static_name)
    // .then(cache => {
    //    return cache.addAll([
    //     '/',
    //     '/index.html',
    //    ])
    // })

    const cacheProm = caches.open( CACHE_STATIC_NAME )
        .then( cache => {

            return cache.addAll([
                '/',
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
                '/pages/offline.html',
            ]);

        
        });

    const cacheInmutable = caches.open( CACHE_INMUTABLE_NAME )
            .then( cache => cache.add('/index.html'));
            console.log(cacheProm);
    e.waitUntil( Promise.all([cacheProm, cacheInmutable]) );

});


self.addEventListener('activate', e => {


    const respuesta = caches.keys().then( keys => {

        keys.forEach( key => {

            // static-v4
            if (  key !== CACHE_STATIC_NAME && key.includes('static') ) {
                return caches.delete(key);
            }
            if (  key !== CACHE_DYNAMIC_NAME && key.includes('dynamic') ) {
                return caches.delete(key);
            }
            if (  key !== CACHE_INMUTABLE_NAME && key.includes('inmutable') ) {
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

                caches.open( CACHE_DYNAMIC_NAME )
                    .then( cache => {
                        cache.put( e.request, newResp );
                        limpiarCache( CACHE_DYNAMIC_NAME, 50 );
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