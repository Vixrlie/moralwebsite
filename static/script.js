document.addEventListener("DOMContentLoaded", function() {
    //important
    var lastTriggerTime = 0;
    var triggerInterval = 15000;
    var images = document.querySelectorAll(".image-wrapper");


    // resize
    var header = document.querySelector('.header');
    var title = document.querySelector('.title');
    var subtitle = document.querySelector('.subtitle');
    var icon = document.querySelector('.icon');
    var par = document.querySelector('.par');
    var containerhead = document.querySelector('.containerhead');
    var logo_wrap = document.querySelector('.logo-wrapper');
    var shadow = document.querySelector('.shadow');
    var chatBub = document.querySelector('.chatBub');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            header.classList.add('shrink');
            title.classList.add('shrink');
            subtitle.classList.add('shrink');
            icon.classList.add('shrink');
            containerhead.classList.add('shrink');
            shadow.classList.add('shrink');
            logo_wrap.classList.add('shrink');
            if (Date.now() - lastTriggerTime > triggerInterval) {
                chatBub.classList.add('shown'); // Show the chat bubble
                lastTriggerTime = Date.now(); // Update last trigger time

                logo_wrap.addEventListener('mouseover', function() {
                    chatBub.classList.remove('shown');
                    logo_wrap.removeEventListener('mouseover',hideChatBubble);
                })
            }
        } else {
            chatBub.classList.remove('shown');
            header.classList.remove('shrink');
            title.classList.remove('shrink');
            subtitle.classList.remove('shrink');
            icon.classList.remove('shrink');
            containerhead.classList.remove('shrink');
            shadow.classList.remove('shrink');
            logo_wrap.classList.remove('shrink');
        };


    });


    images.forEach(function(image) {
        console.log(image.classList);
        image.addEventListener("click", function() {
            // Remove 'clicked' class from all images
            images.forEach(function(img) {
                img.classList.remove("clicked");
            });

            // Add 'clicked' class to the clicked image
            this.classList.add("clicked");
            event.stopPropagation();
        });
    });

    document.addEventListener("mouseover", function() {
        images.forEach(function(image) {
            image.classList.remove("clicked");
        });
    });
});


// function revealElement() {
//     var element = document.querySelector(".hidden-element");
//     var elementPosition = element.getBoundingClientRect().top;
//     var windowHeight = window.innerHeight;
  
//     if (elementPosition < windowHeight) {
//       element.classList.add("visible");
//       window.removeEventListener("scroll", revealElement); // Remove event listener once element is revealed
//     }
//   }