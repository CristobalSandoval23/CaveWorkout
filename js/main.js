((d) => {
    const $accordion = d.getElementsByClassName('contentBx');
  console.log($accordion.length)
  for (let i = 0; i < $accordion.length; i++) {
    $accordion[i].addEventListener('click', function(){
      this.classList.toggle('active')
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