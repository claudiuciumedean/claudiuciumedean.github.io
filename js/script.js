var images = ['main-bg.jpg', 'second-bg.jpg', 'third-bg.jpg', 'forth-bg.jpg'];
$('<img class="main-img" alt="main-bg" src="img/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.main-img-container');

$('.about-box').click(function() {
    $('.about-slide-container').addClass("slide-container");
    $('.main-heading').addClass("fade-in");
    $('.about-text').addClass("fade-in");
    $('.about-slide-container').css('transform', 'translateX(0%)');
});

$('.skills-box').click(function() {
    $('.skills-slide-container').addClass("slide-container");
    $('.main-heading').addClass("fade-in");
    $('.skill-wrapper').addClass("fade-in-left");
    $('.skills-slide-container').css('transform', 'translateX(0%)');
});

$('.services-box').click(function() {
    $('.services-slide-container').addClass("slide-container");
    $('.main-heading').addClass("fade-in");
    $('.skill-wrapper').addClass("fade-in-right");
    $('.services-slide-container').css('transform', 'translateX(0%)');
});

$('.contact-box').click(function() {
    $('.contact-slide-container').addClass("slide-container");
    $('.contact-data-container').addClass("fade-in");
    $('.contact-slide-container').css('transform', 'translateX(0%)');
});

$('.close-button').click(function() {
    $('.about-slide-container').css('transform', 'translateX(100%)');
    $('.skills-slide-container').css('transform', 'translateX(100%)');
    $('.services-slide-container').css('transform', 'translateX(100%)');
    $('.project-slide-container').css('transform', 'translateX(100%)');
    $('.contact-slide-container').css('transform', 'translateX(100%)');
    $('.main-heading').removeClass("fade-in");
    $('.about-text').removeClass("fade-in");
    $('.skill-wrapper').removeClass("fade-in-left");
    $('.skill-wrapper').removeClass("fade-in-right");
    $('.contact-data-container').removeClass("fade-in");
    $('.app-image').removeClass("image-slide");
});
