import anime from './node_modules/animejs/lib/anime.es.js';




anime({
    targets: '.square',
    translateX: 250
});

anime({
    targets: 'div',
    translateX: 250,
    rotate: '1turn',
    backgroundColor: '#FFF',
    duration: 800
});

