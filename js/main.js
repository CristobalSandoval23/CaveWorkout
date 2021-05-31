((d) => {
    const $accordion = d.getElementsByClassName('contentBx'),
          $icon_rest = d.getElementsByClassName('icon-rest'),
          $icon_add = d.getElementsByClassName('icon-add'),
          $bar = d.querySelector('.bar'),
          $close = [],
          $week_days = ['Domingo','Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'],
          $cont_cookies = d.querySelector('.cookies-box'),
          $header = d.querySelector('.header'),
          $menu = d.querySelector('.menu'),
          $modal = d.querySelector('.modal'),
          $banner = d.querySelector('.banner'),
          $holaa = d.querySelector('.write'),
          $date_banner = d.querySelector('.date-banner');

        let today = new Date()
        $date_banner.innerHTML = $week_days[today.getDay()]; 
        // d.cookie == 'name=Kyle; ver_cookies=ok'? $cont_cookies.style.bottom = '-300px':"";
        d.cookie == 'ver_cookies=ok'? $cont_cookies.style.bottom = '-300px':"";
        
        function aceptarCookies(name, price, expireDays) {
            $cont_cookies.style.bottom = '-300px'
            let today = new Date()
            let expireDay = new Date(today.getTime() + (expireDays*24*60*60*1000));
            let expireDate = "expires=" + expireDay.toUTCString();
            d.cookie = name +'='+ price + ';' + expireDate;
        }

        let writing = str => {
            $holaa.innerHTML = '';
            let arrFromStr = str.split('');
            let i = 0;
            let printStr = setInterval(() => {
              if(arrFromStr[i] === ''){
                $holaa.innerHTML += arrFromStr[i];
                $holaa.innerHTML += arrFromStr[i + 1];
                i += 2;
              }else{
                $holaa.innerHTML += arrFromStr[i];
                i++;
              }
              if(i === arrFromStr.length){
                clearInterval(printStr);
              }
            }, 300);
        }

        // writing($holaa.textContent);

        for (let i = 0; i < $accordion.length; i++) {
          verdadero = true;
          $close.push(verdadero);
        }

      d.addEventListener("click", (e) => {
          if(e.target.matches("#aceptar_cookie")) {
            aceptarCookies("ver_cookies", "ok", 3);
          }
          (e.target.matches("#close"))? $cont_cookies.style.bottom = '-300px':'';
          if(e.target.matches("#ver_pol")){
            $modal.style.visibility = 'visible'
            $modal.style.opacity = '1'
            $cont_cookies.style.bottom = '-300px'
          }
          if(e.target.matches("#aceptar_modal")) {
          aceptarCookies("ver_cookies", "ok", 3);
          $modal.style.visibility = 'hidden'
          $modal.style.opacity = '0'
          }
          if(e.target.matches("#close_modal i")){
            $modal.style.visibility = 'hidden'
            $modal.style.opacity = '0'
          }
      })

      for (let i = 0; i < $accordion.length; i++) {
        $accordion[i].addEventListener('click', function(){
          this.classList.toggle('active');
          if($close[i]){
            $icon_rest[i].style.display = 'block';
            $icon_rest[i].style.transition = '1s';
            $icon_add[i].style.display = 'none';
            $icon_add[i].style.transition = '1s';
            $close[i] = false;
        }else{
          $icon_rest[i].style.display = 'none';
          $icon_rest[i].style.transition = '1s';
          $icon_add[i].style.display = 'block';
          $icon_add[i].style.transition = '1s';
          $close[i] = true;
        }
        })
      }
      
    window.addEventListener("resize", ()=>{
        if(window.innerWidth >=700){
          $menu.style.top = "25px";
        }else{   
          $menu.style.top = "";
        }      
    })

    window.addEventListener("scroll", (e) => {
      let $scroll = Math.floor((window.scrollY*100)/(window.body.scrollHeight-window.innerHeight));
      
      if(window.scrollY >=96){
          $banner.style.display = "block";
          $header.style.top = "25px";
        } else{
          $banner.style.display = "none";
          $header.style.top = "0";
        } 
      if(window.scrollY >=96 && window.innerWidth >=700){
          $menu.style.top = "25px";
        }else{
          $menu.style.top = "";
        }        
      $bar.style.width = $scroll+'%';
        });
        if (navigator.serviceWorker){
          navigator.serviceWorker.register('/sw.js')
          .then(reg => {
            // setTimeout(()=>{
            //   reg.sync.register('posteo-gatitos');
            //   console.log('Se envioron fotos de gatitos al server')
            // },1000);
            // Notification.requestPermission().then(result =>{
            //   console.log(result);
            //   reg.showNotification('HOla Mundo')
            // })
          })
        }
        if(window.caches){
          // caches.open('prueba-2').then(cache =>{
          //   cache.addAll([
          //     '/index.html'
          //   ]).then(()=>{
          //     // cache.delete('/index.html');
          //     cache.put('index.hmtl', new Response('hola mundo'))
          //   });
          //   cache.match('/index.html')
          //         .then(resp =>{
          //           resp.text().then(console.log);
          //         })
          // }); // crear cache nuevo
          caches.delete('prueba-1')
          caches.keys().then( keys =>{
            console.log(keys);
          });
        }
  })(document);