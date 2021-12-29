import anime from './node_modules/animejs/lib/anime.es.js';




anime({
    targets: '.square',

});

anime({
    targets: '#sam',
        rotate: '4turn',
        delay: 2000,
        direction: 'alternate',
        backgroundImage: 'linear-gradient(red, red), radial-gradient(circle at top left, #f00,#3020ff)',
        loop: true,
        easing: 'easeInOutSine'
});

anime({
    targets: '.squared',
    translateX: 0

});

anime({
    targets: '#samed',
    translateX: 400,
    translateY: 200,
    rotate: '1turn',
    delay: 2000,
    direction: 'alternate',
    backgroundColor: '#fb1239',
    loop: true,
    easing: 'easeInOutSine'
});

