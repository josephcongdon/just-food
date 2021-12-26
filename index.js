import anime from './node_modules/animejs/lib/anime.es.js';




anime({
    targets: '.square',
    translateX: 50
});

anime({
    targets: '#sam',
        translateX: 300,
        translateY: 100,
        rotate: '1turn',
        delay: 2000,
        direction: 'alternate',
        backgroundColor: '#fb1239',
        loop: true,
        easing: 'easeInOutSine'
});


