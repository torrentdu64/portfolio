// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';

document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();

      var textWrapper = document.querySelector(".intro-title");
    textWrapper.innerHTML = textWrapper.textContent.replace(
        /([^\x00-\x80]|\w)/g,
        "<span class='letter'>$&</span>"
    );

    anime
        .timeline({ loop: false })
        .add({
            targets: ".intro-title .letter",
            translateX: [140, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1400,
            delay: function(el, i) {
                return 500 + 50 * i;
            }
        })
        .add({
            targets: ".intro-title .letter",
            translateX: [0, -140],
            opacity: [1, 0],
            easing: "easeInExpo",
            duration: 1200,
            delay: function(el, i) {
                return 700 + 50 * i;
            }
        });

    TweenMax.to(".loader", 2.2, {
        delay: 5,
        top: "-100%",
        ease: Expo.easeInOut
    });

    TweenMax.from(".brand-logo", 2, {
        delay: 6,
        y: 10,
        opacity: 0,
        ease: Expo.easeInOut
    });
});
