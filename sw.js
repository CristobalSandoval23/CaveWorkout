// self.addEventListener('install', event => {
//     console.log('instalando')
//     let respuesta = new Promise( (resolve, reject)=> {
//         setTimeout(()=>{
//             console.log('Instalaciones terminadas')
//             self.skipWaiting();
//             resolve();
//         }, 1000)
//     })
//     event.waitUntil(respuesta);

// })

// self.addEventListener('activate', event => {
//     console.log('activación')
    
// })

// self.addEventListener('sync', event =>{
    
// })
// self.addEventListener('push', event =>{
//     console.log('Notificacion recibida')
// })
self.addEventListener('fetch', event => {

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