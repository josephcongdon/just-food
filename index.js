import anime from './node_modules/animejs/lib/anime.es.js';




anime({
    targets: '.square',
    translateX: 50
});

anime({
    targets: '#sam',
    translateX: 250,
    rotate: '1turn',
    backgroundColor: '#fb1239',
    loop: true,
    duration: 5000
});


