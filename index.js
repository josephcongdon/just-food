import anime from './node_modules/animejs/lib/anime.es.js';




// anime({
//     targets: '.square',
//     translateX: 250
// });

// anime({
//     targets: 'div',
//     translateX: 250,
//     rotate: '1turn',
//     backgroundColor: '#FFF',
//     duration: 800
// });

anime({
    targets: ['.svg-attributes-demo polygon', 'feTurbulence', 'feDisplacementMap'],
    points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
    baseFrequency: 0,
    scale: 1,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutExpo'
});

