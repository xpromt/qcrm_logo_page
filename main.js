window.onload = () =>{
  const backgroungImages = [
    './src/images/qcrm-login-page-00.jpg',
    './src/images/qcrm-login-page-01.jpg',
    './src/images/qcrm-login-page-02.jpg',
    './src/images/qcrm-login-page-03.jpg',
    './src/images/qcrm-login-page-04.jpg',
    './src/images/qcrm-login-page-05.jpg',
    './src/images/qcrm-login-page-06.jpg',
    './src/images/qcrm-login-page-07.jpg'
  ];

  const startNumImg = +document.cookie || Math.floor((Math.random() * backgroungImages.length));
  let curImgIndex = startNumImg;
  
  const image = $('.slide');
  
  image.css('background-image', 'url(' + backgroungImages [curImgIndex] +')');

  let steps=0; 
  let six = setInterval(function(){
    image.fadeOut(1000, () => {
      image.css('background-image', 'url(' + backgroungImages [++curImgIndex] +')');
      image.fadeIn(1000);
    });

    if(curImgIndex > backgroungImages.length-2) {curImgIndex = 0;}
    
    document.cookie = curImgIndex+1;
    if (steps++ > 4) {clearInterval(six)};
  }, 10000);
};
