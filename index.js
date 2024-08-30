const slider = document.querySelector('.slider__wrapper');

const sliderImgs = Array.from(document.querySelectorAll('.slide__image'));

const slideWidth = sliderImgs[0].offsetWidth;



function slideBack() {
  offset -= 2;
}




let offset = 1;

const imgSrc = sliderImgs.reduce((sum, cur) => {
  sum.push(cur.src);
  cur.remove()

  return sum; 
}, []);

const getCurrentWindowWidth = () => window.innerWidth();

function draw() {
  const windowWidth = window.innerWidth;
  console.log(windowWidth, slideWidth)
  for (let i = 0; i <  3; i++) {
    const img = document.createElement('img');
    img.classList.add('slide__image');
    img.src = imgSrc[i];
    img.style.left = '';
    slider.append(img)    
  }
}

draw(); 

function move() {
  const image = document.createElement('img');
  image.src = imgSrc[0];
  image.classList.add('slide__image')
  slider.append(image)
  slider.style.right =  (+slideWidth / 2 * offset)  + 'px'
  offset++;
}

setTimeout(() => {
  const image = document.createElement('img');
  image.src = imgSrc[0];
  image.classList.add('slide__image')
  slider.append(image)
  slider.style.right =  (+slideWidth / 2 * offset)  + 'px'
  offset++;
}, 1000)

// let timerId = setTimeout(function tick() {
//   move()
//   timerId = setTimeout(tick, 2000); // (*)
// }, 2000);
