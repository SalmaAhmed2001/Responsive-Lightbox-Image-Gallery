var imgsList =Array.from(  document.getElementsByClassName('img-item'));
// console.log(imgList);

var lightboxContainer =document.querySelector('.lightbox-container');
var lightboxItem =document.querySelector('.lightbox-item');
var currentIndex=0;

var nextButton =document.getElementById('next');
var prevButton =document.getElementById('prev');
var closeButton =document.getElementById('close');

for(var i=0;i<imgsList.length;i++)
{
  imgsList[i].addEventListener("click" ,function(e)
  {
    currentIndex=imgsList.indexOf(e.target);
    // console.log(currentIndex);
     var imgSrc=e.target.getAttribute('src');
     lightboxContainer.classList.replace('d-none','d-flex');
     lightboxItem.style.backgroundImage =`url(${imgSrc})` 
  })
} 

function nextSlide()
{
 currentIndex++;
 if(currentIndex == imgsList.length)
 {
    currentIndex=0;
 }
 var imgSrc = imgsList[currentIndex].getAttribute('src');
 lightboxItem.style.backgroundImage =`url(${imgSrc})`
}


function prevSlide()
{
 currentIndex--;
 if(currentIndex == -1)
 {
    currentIndex=imgsList.length-1;
 }
 var imgSrc = imgsList[currentIndex].getAttribute('src');
 lightboxItem.style.backgroundImage =`url(${imgSrc})`
}

function closeSlide()
{
    lightboxContainer.classList.replace('d-flex' , 'd-none')
}


nextButton.addEventListener('click' ,nextSlide);
prevButton.addEventListener('click' , prevSlide);
closeButton.addEventListener('click',closeSlide);


document.addEventListener('keydown',function(e)
{
if(e.key =='ArrowRight')
{
nextSlide();
}
else if(e.key =='ArrowLeft')
{
prevSlide();
}
else if (e.key =='Escape'){
closeSlide();
}
})