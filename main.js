"use strict";
/* INTRO INTRO INTRO INTRO INTRO INTRO INTRO INTRO INTRO INTRO INTRO INTRO INTRO INTRO INTRO INTRO INTRO INTRO INTRO INTRO INTRO INTRO INTRO INTRO INTRO INTRO INTRO INTRO INTRO  */
//if button clicked, hide intro
const intro = document.querySelector("#intro");
const introBtn = document.querySelector(".intro__skip");
introBtn.addEventListener("click", (event) => {
  intro.classList.add("intro--off");
});
//if logo animation is over, automatically hide intro
setTimeout(() => {
  console.log("anim done");
  intro.classList.add("intro--off");
}, 7000); //logo_anim_length :7s

// ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT ABOUT
//Copy email address when clicked
document.querySelector("#myEmail").addEventListener("click", function () {
  copyToClipboard("jhy.vfx@gmail.com");
});

// JUMP JUMP JUMP JUMP JUMP JUMP JUMP JUMP JUMP JUMP JUMP JUMP JUMP JUMP JUMP JUMP JUMP JUMP JUMP JUMP JUMP JUMP JUMP JUMP JUMP JUMP JUMP JUMP JUMP JUMP JUMP JUMP JUMP JUMP
//Make jumpScroll transparent when it is on the top
const jump = document.querySelector("#jump");
const jumpHeight = jump.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  // console.log(window.scrollY);
  if (window.scrollY > jumpHeight) {
    jump.classList.add("jump--appear");
  } else {
    jump.classList.remove("jump--appear");
  }
});
//JumpScroll : go to top/middle/bottom
function topFunction() {
  jumpScroll(0);
}
const documentHeight = document.documentElement.scrollHeight;
function bottomFunction() {
  jumpScroll(documentHeight);
}
function middleFunction() {
  jumpScroll(documentHeight / 2);
}

// NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV NAV
//scrolling when clicked on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  // console.log(event.target.dataset.link);
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove("open");
  scrollIntoView(link);

  //set selected btn as active btn
  const active = document.querySelector(".navbar__menu__item.selected");
  active.classList.remove("selected");
  event.target.classList.add("selected");
});

//Mobile toggle main menu
const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
navbarToggleBtn.addEventListener("click", () => {
  console.log("yoyoyo");
  navbarMenu.classList.toggle("open");
});

// PROJECT PROJECT PROJECT PROJECT PROJECT PROJECT PROJECT PROJECT PROJECT PROJECT PROJECT PROJECT PROJECT PROJECT PROJECT PROJECT PROJECT PROJECT PROJECT PROJECT PROJECT
//Project filtering
const tagsContainer = document.querySelector(".projects__categories");
const projectsContainer = document.querySelector(".projects__container");
const projects = document.querySelectorAll(".content");
tagsContainer.addEventListener("click", (event) => {
  const filter =
    event.target.dataset.filter || event.target.parentNode.dataset.filter; //click tag(btn) or tag count(btn span)
  if (filter == null) {
    return;
  }
  //Project categories btn
  //Remove selection from the previous btn and Select the new one
  const active = document.querySelector(".categories__btn.selected");
  active.classList.remove("selected");
  const target =
    event.target.nodeName === "BUTTON" ? event.target : event.target.parentNode; //click tag(btn) or tag count(btn span)
  target.classList.add("selected");

  //Filtering with tag and Animation
  projectsContainer.classList.add("anim-out");

  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === "*" || filter === project.dataset.tag) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    projectsContainer.classList.remove("anim-out");
  }, 300);
});
//MODAL
//project modal open and close
//being city
const openBtn_beingCity = document.getElementById("open-beingCity");
const modal_beingCity = document.getElementById("modal-beingCity");
const overlay_beingCity = modal_beingCity.querySelector(".modal__overlay");
const closeBtn_beingCity = modal_beingCity.querySelector("button");

openBtn_beingCity.addEventListener("click", () => {
  modal_beingCity.classList.remove("closed");
});
overlay_beingCity.addEventListener("click", () => {
  modal_beingCity.classList.add("closed");
});
closeBtn_beingCity.addEventListener("click", () => {
  modal_beingCity.classList.add("closed");
});
//fashion for help
const openBtn_fashionForHelp = document.getElementById("open-fashionForHelp");
const modal_fashionForHelp = document.getElementById("modal-fashionForHelp");
const overlay_fashionForHelp = modal_fashionForHelp.querySelector(
  ".modal__overlay"
);
const closeBtn_fashionForHelp = modal_fashionForHelp.querySelector("button");

openBtn_fashionForHelp.addEventListener("click", () => {
  modal_fashionForHelp.classList.remove("closed");
});
overlay_fashionForHelp.addEventListener("click", () => {
  modal_fashionForHelp.classList.add("closed");
});
closeBtn_fashionForHelp.addEventListener("click", () => {
  modal_fashionForHelp.classList.add("closed");
});
//ARTide
const openBtn_ARTide = document.getElementById("open-ARTide");
const modal_ARTide = document.getElementById("modal-ARTide");
const overlay_ARTide = modal_ARTide.querySelector(".modal__overlay");
const closeBtn_ARTide = modal_ARTide.querySelector("button");

openBtn_ARTide.addEventListener("click", () => {
  modal_ARTide.classList.remove("closed");
});
overlay_ARTide.addEventListener("click", () => {
  modal_ARTide.classList.add("closed");
});
closeBtn_ARTide.addEventListener("click", () => {
  modal_ARTide.classList.add("closed");
});
//VRTide
const openBtn_VRTide = document.getElementById("open-VRTide");
const modal_VRTide = document.getElementById("modal-VRTide");
const overlay_VRTide = modal_VRTide.querySelector(".modal__overlay");
const closeBtn_VRTide = modal_VRTide.querySelector("button");

openBtn_VRTide.addEventListener("click", () => {
  modal_VRTide.classList.remove("closed");
});
overlay_VRTide.addEventListener("click", () => {
  modal_VRTide.classList.add("closed");
});
closeBtn_VRTide.addEventListener("click", () => {
  modal_VRTide.classList.add("closed");
});
//Mesurer
const openBtn_mesurer = document.getElementById("open-mesurer");
const modal_mesurer = document.getElementById("modal-mesurer");
const overlay_mesurer = modal_mesurer.querySelector(".modal__overlay");
const closeBtn_mesurer = modal_mesurer.querySelector("button");

openBtn_mesurer.addEventListener("click", () => {
  modal_mesurer.classList.remove("closed");
});
overlay_mesurer.addEventListener("click", () => {
  modal_mesurer.classList.add("closed");
});
closeBtn_mesurer.addEventListener("click", () => {
  modal_mesurer.classList.add("closed");
});
//Gods2
const openBtn_gods2 = document.getElementById("open-gods2");
const modal_gods2 = document.getElementById("modal-gods2");
const overlay_gods2 = modal_gods2.querySelector(".modal__overlay");
const closeBtn_gods2 = modal_gods2.querySelector("button");

openBtn_gods2.addEventListener("click", () => {
  modal_gods2.classList.remove("closed");
});
overlay_gods2.addEventListener("click", () => {
  modal_gods2.classList.add("closed");
});
closeBtn_gods2.addEventListener("click", () => {
  modal_gods2.classList.add("closed");
});
//y1987
const openBtn_y1987 = document.getElementById("open-y1987");
const modal_y1987 = document.getElementById("modal-y1987");
const overlay_y1987 = modal_y1987.querySelector(".modal__overlay");
const closeBtn_y1987 = modal_y1987.querySelector("button");

openBtn_y1987.addEventListener("click", () => {
  modal_y1987.classList.remove("closed");
});
overlay_y1987.addEventListener("click", () => {
  modal_y1987.classList.add("closed");
});
closeBtn_y1987.addEventListener("click", () => {
  modal_y1987.classList.add("closed");
});
//gods1
const openBtn_gods1 = document.getElementById("open-gods1");
const modal_gods1 = document.getElementById("modal-gods1");
const overlay_gods1 = modal_gods1.querySelector(".modal__overlay");
const closeBtn_gods1 = modal_gods1.querySelector("button");

openBtn_gods1.addEventListener("click", () => {
  modal_gods1.classList.remove("closed");
});
overlay_gods1.addEventListener("click", () => {
  modal_gods1.classList.add("closed");
});
closeBtn_gods1.addEventListener("click", () => {
  modal_gods1.classList.add("closed");
});
//VJWePlay
const openBtn_VJWePlay = document.getElementById("open-VJWePlay");
const modal_VJWePlay = document.getElementById("modal-VJWePlay");
const overlay_VJWePlay = modal_VJWePlay.querySelector(".modal__overlay");
const closeBtn_VJWePlay = modal_VJWePlay.querySelector("button");

openBtn_VJWePlay.addEventListener("click", () => {
  modal_VJWePlay.classList.remove("closed");
});
overlay_VJWePlay.addEventListener("click", () => {
  modal_VJWePlay.classList.add("closed");
});
closeBtn_VJWePlay.addEventListener("click", () => {
  modal_VJWePlay.classList.add("closed");
});
//Moving Paper Animation
const openBtn_moving = document.getElementById("open-moving");
const modal_moving = document.getElementById("modal-moving");
const overlay_moving = modal_moving.querySelector(".modal__overlay");
const closeBtn_moving = modal_moving.querySelector("button");

openBtn_moving.addEventListener("click", () => {
  modal_moving.classList.remove("closed");
});
overlay_moving.addEventListener("click", () => {
  modal_moving.classList.add("closed");
});
closeBtn_moving.addEventListener("click", () => {
  modal_moving.classList.add("closed");
});
//dearYoungMe
const openBtn_dearYoungMe = document.getElementById("open-dearYoungMe");
const modal_dearYoungMe = document.getElementById("modal-dearYoungMe");
const overlay_dearYoungMe = modal_dearYoungMe.querySelector(".modal__overlay");
const closeBtn_dearYoungMe = modal_dearYoungMe.querySelector("button");

openBtn_dearYoungMe.addEventListener("click", () => {
  modal_dearYoungMe.classList.remove("closed");
});
overlay_dearYoungMe.addEventListener("click", () => {
  modal_dearYoungMe.classList.add("closed");
});
closeBtn_dearYoungMe.addEventListener("click", () => {
  modal_dearYoungMe.classList.add("closed");
});
//walkingOnTheSpot
const openBtn_walkingOnTheSpot = document.getElementById(
  "open-walkingOnTheSpot"
);
const modal_walkingOnTheSpot = document.getElementById(
  "modal-walkingOnTheSpot"
);
const overlay_walkingOnTheSpot = modal_walkingOnTheSpot.querySelector(
  ".modal__overlay"
);
const closeBtn_walkingOnTheSpot = modal_walkingOnTheSpot.querySelector(
  "button"
);

openBtn_walkingOnTheSpot.addEventListener("click", () => {
  modal_walkingOnTheSpot.classList.remove("closed");
});
overlay_walkingOnTheSpot.addEventListener("click", () => {
  modal_walkingOnTheSpot.classList.add("closed");
});
closeBtn_walkingOnTheSpot.addEventListener("click", () => {
  modal_walkingOnTheSpot.classList.add("closed");
});
//packageForMe
const openBtn_packageForMe = document.getElementById("open-packageForMe");
const modal_packageForMe = document.getElementById("modal-packageForMe");
const overlay_packageForMe = modal_packageForMe.querySelector(
  ".modal__overlay"
);
const closeBtn_packageForMe = modal_packageForMe.querySelector("button");

openBtn_packageForMe.addEventListener("click", () => {
  modal_packageForMe.classList.remove("closed");
});
overlay_packageForMe.addEventListener("click", () => {
  modal_packageForMe.classList.add("closed");
});
closeBtn_packageForMe.addEventListener("click", () => {
  modal_packageForMe.classList.add("closed");
});
//1 to 1 bar
const openBtn_1to1Bar = document.getElementById("open-1to1Bar");
const modal_1to1Bar = document.getElementById("modal-1to1Bar");
const overlay_1to1Bar = modal_1to1Bar.querySelector(".modal__overlay");
const closeBtn_1to1Bar = modal_1to1Bar.querySelector("button");

openBtn_1to1Bar.addEventListener("click", () => {
  modal_1to1Bar.classList.remove("closed");
});
overlay_1to1Bar.addEventListener("click", () => {
  modal_1to1Bar.classList.add("closed");
});
closeBtn_1to1Bar.addEventListener("click", () => {
  modal_1to1Bar.classList.add("closed");
});
//Closet Inside the Closet
const openBtn_CIC = document.getElementById("open-CIC");
const modal_CIC = document.getElementById("modal-CIC");
const overlay_CIC = modal_CIC.querySelector(".modal__overlay");
const closeBtn_CIC = modal_CIC.querySelector("button");

openBtn_CIC.addEventListener("click", () => {
  modal_CIC.classList.remove("closed");
});
overlay_CIC.addEventListener("click", () => {
  modal_CIC.classList.add("closed");
});
closeBtn_CIC.addEventListener("click", () => {
  modal_CIC.classList.add("closed");
});
// CUSTOM CUSTOM CUSTOM CUSTOM CUSTOM CUSTOM CUSTOM CUSTOM CUSTOM CUSTOM CUSTOM CUSTOM CUSTOM CUSTOM CUSTOM CUSTOM CUSTOM CUSTOM CUSTOM CUSTOM CUSTOM CUSTOM CUSTOM CUSTOM
// Custom function

function jumpScroll(height) {
  document.body.scrollTop = height; //for Safari
  document.documentElement.scrollTop = height; //for Chrome, Firefox, IE and Opera
}
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
function copyToClipboard(text) {
  var selected = false;
  var el = document.createElement("textarea");
  el.value = text;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  if (document.getSelection().rangeCount > 0) {
    selected = document.getSelection().getRangeAt(0);
  }
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
}
