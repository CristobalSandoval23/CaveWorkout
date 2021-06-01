const STATIC_CACHE    = 'static-v4';
const DYNAMIC_CACHE   = 'dynamic-v2';
const INMUTABLE_CACHE = 'inmutable-v1';


function actualizaCacheDinamico( dynamicCache, req, res ) {

    if ( res.ok ) {
        return caches.open( dynamicCache ).then( cache => {
            cache.put( req, res.clone() );  
            return res.clone();
        });
    } else {
        return res;
    }

}

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


self.addEventListener('install', e => {


    const cacheStatic = caches.open( STATIC_CACHE ).then(cache => 
        cache.addAll( APP_SHELL ));

    const cacheInmutable = caches.open( INMUTABLE_CACHE ).then(cache => 
        cache.addAll( APP_SHELL_INMUTABLE ));



    e.waitUntil( Promise.all([ cacheStatic, cacheInmutable ])  );

});


self.addEventListener('activate', e => {

    const respuesta = caches.keys().then( keys => {

        keys.forEach( key => {

            if (  key !== STATIC_CACHE && key.includes('static') ) {
                return caches.delete(key);
            }

            if (  key !== DYNAMIC_CACHE && key.includes('dynamic') ) {
                return caches.delete(key);
            }

        });

    });

    e.waitUntil( respuesta );

});




self.addEventListener( 'fetch', e => {


    const respuesta = caches.match( e.request ).then( res => {

        if ( res ) {
            return res;
        } else {

            return fetch( e.request ).then( newRes => {

                return actualizaCacheDinamico( DYNAMIC_CACHE, e.request, newRes );

            });

        }

    });



    e.respondWith( respuesta );

});


