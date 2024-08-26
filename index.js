// slider
const slider = document.querySelector('.slider__wrapper');

slider.style.width = window.innerWidth;

const sliderImgs = Array.from(document.querySelectorAll('.slide__image'));

const slideWidth = sliderImgs[0].offsetWidth;

let offset = 1;

const imgSrc = sliderImgs.reduce((sum, cur) => {
  sum.push(cur.src);
  cur.remove()
return sum; 
}, []);


const getvalue = (tag, prop) => {
  const elem = document.querySelector(tag);
  console.log(elem)
  const styles = window.getComputedStyle(elem)

  return styles[prop].slice(0, -2);
}

const getCurrentWindowWidth = () => window.innerWidth();

function draw() {
  const windowWidth = window.innerWidth;
  console.log(windowWidth, slideWidth)


  const firstCoordinates = 0;
  const secondCoordinates = slideWidth + 1;

  const thirdCoordinates = secondCoordinates + slideWidth;



  let offset = 0;
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
  move()
}, 1000)












