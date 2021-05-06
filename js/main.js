((d) => {
    const $accordion = d.getElementsByClassName('contentBx'),
          $icon_rest = d.getElementsByClassName('icon-rest'),
          $icon_add = d.getElementsByClassName('icon-add');
      var $close = true;

  for (let i = 0; i < $accordion.length; i++) {
      $accordion[i].addEventListener('click', function(){
        this.classList.toggle('active');
        if($close){
          $icon_rest[i].style.display = 'block';
          $icon_rest[i].style.transition = '1s';
          $icon_add[i].style.display = 'none';
          $icon_add[i].style.transition = '1s';
          $close = false;
        }else{
          $icon_rest[i].style.display = 'none';
          $icon_rest[i].style.transition = '1s';
          $icon_add[i].style.display = 'block';
          $icon_add[i].style.transition = '1s';
          $close = true;
        }
        })
      }

    // window.addEventListener("resize", (e) => {
    //     if(window.innerWidth > 700){
    //         $container_about_us.classList.add("row-reverse");
    //         }
    //         else{
    //             $container_about_us.classList.remove("row-reverse")
    //         }

    //     });
  })(document);