let slider = document.querySelector('.slider');
let innerSlider = document.querySelector('.slider__inner');

let pressed = false;
let startx;
let x;

slider.addEventListener('mousedown', (e)=> {
    pressed = true;
    startx = e.offsetX - innerSlider.offsetLeft;
    slider.getElementsByClassName.cursor = 'grabbing'
});

slider.addEventListener('mouseenter', () => {
    slider.style.cursor = 'grab'
});

slider.addEventListener('mouseleave', () => {
    slider.style.cursor = 'default'
})

slider.addEventListener('mouseup', () => {
    slider.style.cursor = 'grab'
});

slider.addEventListener('mouseup', () => {
    pressed = false;
});

slider.addEventListener('mousemove', (e) => {
    if(!pressed) return;
    e.preventDefault();

    x = e.offsetX

    innerSlider.style.left = `${x - startx}px`;
})

function checkboundary() {
    let outer = slider.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();

    if(parseInt(innerSlider.style-left) > 0) {
        innerSlider.style.left = '0px';
    } else if(inner.right < outer.right) {
        innerSlider.style.left = `-${inner.width - outer.width}px `
    }
}

var stopVideo = function (element) {
    var a = element.querySelector('a');
    var iframe = element.querySelector('iframe');
    if (a !== null) {
        var aSrc = a.src;
        a.src = aSrc;
    }
    if (iframe !== null) {
        iframe.pause();
    }
};