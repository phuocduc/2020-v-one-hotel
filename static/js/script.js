window.onscroll = () => {
  const nav = document.querySelector("#navbar");
  const img_logo = document.querySelector("#img-brand")
  if (this.scrollY >= 10) {
    nav.className = "navbar navbar-expand-lg navbar-light navibar scroll";
    img_logo.style.width = "46px"
} else {
    nav.className = "navbar navbar-expand-lg navbar-light navibar ";
    nav.style.transition= "ease 0.7s"
    img_logo.style.width="100%"
  }
  const stick = document.querySelector("#stick");
  if(this.scrollY>=50 && this.scrollY<366){
      stick.className = "stick_one"
  }
  else if(this.scrollY>=366 && this.scrollY<1000)
  {
    stick.className = "stick_second"
  }
  else if (this.scrollY >=1000 && this.scrollY<1900)
  {
    stick.className = "stick_third"
  }
  else if (this.scrollY >=1900 && this.scrollY<2820)
  {
    stick.className = "stick_fourth"
  }
  else if (this.scrollY >=2820 && this.scrollY<3350)
  {
    stick.className = "stick_fifth"
    console.log(this.scrollY,'5')
  }
  else{
    stick.className=""
  }
};

