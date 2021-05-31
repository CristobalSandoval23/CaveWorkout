const cache_name = 'cache-2';
const cache_static_name = 'static-2';
const cache_inmutable_name = 'static-2';
const cache_dynamic_name = 'dynamic-2';
self.addEventListener('install', event => {
   const cacheProm = caches.open(cache_static_name)
        .then(cache => {
           return cache.addAll([
            '/',
            '/index.html',
           ])
        })
        const cacheInmutable = caches.open(cache_inmutable_name)
        .then(cache =>  cache.add(['/index.html',]))
        event.waitUntil(Promise.all([cacheProm,cacheInmutable]));
//     console.log('instalando')
//     let respuesta = new Promise( (resolve, reject)=> {
//         setTimeout(()=>{
//             console.log('Instalaciones terminadas')
//             self.skipWaiting();
//             resolve();
//         }, 1000)
//     })
//     event.waitUntil(respuesta);

})

// self.addEventListener('activate', event => {
//     console.log('activación')
    
// })

// self.addEventListener('sync', event =>{
    
// })
// self.addEventListener('push', event =>{
//     console.log('Notificacion recibida')
// })
self.addEventListener('fetch', event => {
    // TODO sale del cache 
    event.respondWith(caches.match(event.request))
    // cache with network fallback
    caches.match(event.request)
                .then(resp =>{
                    if(resp) return resp;
                    console.log()

                    return fetch(event.request).then(newResp =>{
                        caches.open(cache_dynamic_name)
                            .then( cache => {
                                cache.put(event.request, newResp);
                            });
                    return newResp.clone();
                    })
                })
    // const offlineResp = new Response(`
    // Bienvenido a mi página web 
    // Disculpa, pero para usarla, necesitas internet
    // `)
    // // {
    // //     headers:{
    // //         'Content-type':
    // //     }
    // // }
    // ;

    const resp = fetch(event.request).catch(() => offlineResp);
    event.respondWith(resp);
    // if(event.request.url.includes('style.css')){
        // event.respondWith(null);
        // Forma de hacer peticiones en Fetch
        // let fotoReq = fetch('img/main.jpg')
        // let fotoReq = fetch(event.request.url)
        // let fotoReq = fetch(event.request)
        // console.log(fotoReq);

        // Como interceptar  
        // let respuesta = new Response(`
        // body {
        //     background-color: red ! important;
        //     color: pink;
        // }`,
        // {
        //     headers: {
        //         'Content-Type':'text/css'
        //     }
        // });
        // event.respondWith(respuesta);

    // }

    // event.respondWith(
    //     fetch(event.request)
    //     .then(resp => {
    //         if(resp.ok){
    //             return resp;
    //         }else{
    //             return fetch('assets/Foto1.jpg')
    //         }
    //     })
    // )
})