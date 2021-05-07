((d) => {
    const $accordion = d.getElementsByClassName('contentBx'),
          $icon_rest = d.getElementsByClassName('icon-rest'),
          $icon_add = d.getElementsByClassName('icon-add'),
          $bar = d.querySelector('.bar'),
          $close = [];
    // let $scroll = window.body.scrollHeight;
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
let $scroll = Math.floor((window.scrollY*100)/(window.body.scrollHeight-window.innerHeight));

          $bar.style.width = $scroll+'%';
        });
  })(document);