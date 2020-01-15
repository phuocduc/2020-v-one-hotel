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
  if(this.scrollY>=250 && this.scrollY<450){
      stick.className = "stick_one"
  }
  else if(this.scrollY>=450 && this.scrollY<1000)
  {
    stick.className = "stick_second"
  }
  else if (this.scrollY >=1000)
  {
      stick.className = "stick_third"
  }
};

