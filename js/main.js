((d) => {
    const $accordion = d.getElementsByClassName('contentBx'),
          $icon_rest = d.getElementsByClassName('icon-rest'),
          $icon_add = d.getElementsByClassName('icon-add'),
          $bar = d.querySelector('.bar'),
          $close = [],
          $week_days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
          $btn_close = document.querySelector('#close'),
          $cont_cookies = document.querySelector('.cookies-box'),
          $header = document.querySelector('.header'),
          $menu = document.querySelector('.menu'),
          $modal = document.querySelector('.modal'),
          $banner = document.querySelector('.banner'),
          $date_banner = document.querySelector('.date-banner'),
          $ver_p = document.querySelector('#ver_pol'),
          $c_modal = document.querySelector('#close_modal'),
          $ac_cookie = document.querySelector('#aceptar_cookie'),
          $ac_cookie2 = document.querySelector('#aceptar_modal');

          
        d.cookie == 'name=Kyle; ver_cookies=ok'? $cont_cookies.style.bottom = '-300px':"";
        function aceptarCookies(name, price, expireDays) {
            $cont_cookies.style.bottom = '-300px'
            let today = new Date()
            let expireDay = new Date(today.getTime() + (expireDays*24*60*60*1000));
            let expireDate = "expires=" + expireDay.toUTCString();
            d.cookie = name +'='+ price + ';' + expireDate;
        }
        
        $ac_cookie.addEventListener('click', () => {
            aceptarCookies("ver_cookies", "ok", 1);
        })
        
        $ac_cookie2.addEventListener('click', () => {
            aceptarCookies("ver_cookies", "ok", 1);
            $modal.style.visibility = 'hidden'
            $modal.style.opacity = '0'
        })
        
        $btn_close.addEventListener('click', () => {
            $cont_cookies.style.bottom = '-300px'
        })
        
        
        $ver_p.addEventListener('click', () => {
            $modal.style.visibility = 'visible'
            $modal.style.opacity = '1'
            $cont_cookies.style.bottom = '-300px'
        })
        
        $c_modal.addEventListener('click', () => {
            $modal.style.visibility = 'hidden'
            $modal.style.opacity = '0'
        })


      for (let i = 0; i < $accordion.length; i++) {
        verdadero = true;
        $close.push(verdadero);
      }


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

      })
    
      let today = new Date()

      $date_banner.innerHTML = $week_days[today.getDay()-1];

    window.addEventListener("scroll", (e) => {
       if(window.scrollY >=96){
          $banner.style.display = "block";
         
          $header.style.top = "25px";
          $menu.style.top = "25px";
        } else{
          $banner.style.display = "none";
          $header.style.top = "0";
        } 

        if(window.scrollY >=96 && window.innerWidth >=700){
          $menu.style.top = "25px";
        }else{
          
          $menu.style.top = "";
        }        
    
        let $scroll = Math.floor((window.scrollY*100)/(window.body.scrollHeight-window.innerHeight));

          $bar.style.width = $scroll+'%';
        });
  })(document);