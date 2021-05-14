((d) => {
    const $accordion = d.getElementsByClassName('contentBx'),
          $icon_rest = d.getElementsByClassName('icon-rest'),
          $icon_add = d.getElementsByClassName('icon-add'),
          $bar = d.querySelector('.bar'),
          $close = [],
          $btn_close = document.querySelector('#close'),
          $cont_cookies = document.querySelector('.cookies-box'),
          $modal = document.querySelector('.modal'),
          $ver_p = document.querySelector('#ver_pol'),
          $c_modal = document.querySelector('#close_modal'),
          $ac_cookie = document.querySelector('#aceptar_cookie'),
          $ac_cookie2 = document.querySelector('#aceptar_modal');

          
        document.cookie == 'name=Kyle; ver_cookies=ok'? $cont_cookies.style.bottom = '-300px':"";
        // console.log(document.cookie)
        function aceptarCookies(name, price, expireDays) {
            $cont_cookies.style.bottom = '-300px'
            let today = new Date()
            let expireDay = new Date(today.getTime() + (expireDays*24*60*60*1000));
            // console.log(today, expireDay)
            let expireDate = "expires=" + expireDay.toUTCString();
            // console.log(expireDate)
            document.cookie = name +'='+ price + ';' + expireDate;
        }
        
        $ac_cookie.addEventListener('click', () => {
            aceptarCookies("ver_cookies", "ok", 3);
        })
        
        $ac_cookie2.addEventListener('click', () => {
            aceptarCookies("ver_cookies", "ok", 3);
            $modal.style.visibility = 'hidden'
            $modal.style.opacity = '0'
        })
        
        $btn_close.addEventListener('click', () => {
            $cont_cookies.style.bottom = '-200px'
        })
        
        
        $ver_p.addEventListener('click', () => {
            $modal.style.visibility = 'visible'
            $modal.style.opacity = '1'
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
      // localStorage.setItem('hola', 'Bob')
      // localStorage.removeItem('hola')
      // sessionStorage.setItem('name', 'Carlos')
      // Cookie.set("ieat", "true", {expires: 2});

      // var myCookie = Cookie.get("ieat");
      // // var title = Cookie.get("ieat");

      // if(myCookie){

      // }
      // // sessionStorage.removeItem('name', 'Carlos')
      // document.cookie = 'name=Kyle; expires=' + new Date(2022,0,1).toUTCString()
    window.addEventListener("scroll", (e) => {
          // console.log( window.pageYOffset)
          // console.log( window.pageXOffset)
          // console.log( window.offsetHeight)
          // console.log( window.scrollY,e.path[0].body.scrollHeight )
          // console.log( window.scrollY,e.path[0].body.clientTop  )
          // console.log( window.scrollY,e.path[0].body.scrollLeft  )
          // console.log( window.scrollY,e.path[0].body.clientHeight )
          // console.log( window.scrollY,e.path[0].body.offsetHeight )
          // console.log(e)
        //  let informacion = navigator.userAgent;
        // alert(informacion.split('/')[0]);
        let $scroll = Math.floor((window.scrollY*100)/(window.body.scrollHeight-window.innerHeight));

          $bar.style.width = $scroll+'%';
        });
  })(document);