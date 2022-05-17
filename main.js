document.addEventListener('DOMContentLoaded', function() {
  // your code here

// window.onload = function () {
  const divImg = document.querySelector('.slide');
  // get last image number as a started number from cookie if it is empty - set it random
  const startNumImg = +document.cookie.split('=')[1] || Math.floor((Math.random() * 7));
  let i = startNumImg;
  // fill an mani div with images
  // in the common (non training) task - we need to make an array of images from folder and operate index of recived array
  // but here for simplicity - it is just names of files (from 0 to 7)
  for (; i<=(startNumImg+7); i++){
    const childImgDiv = document.createElement('div');
    childImgDiv.style = 'background-image: url(./src/images/qcrm-login-page-0' + (i<=7 ? i : i-8) +'.jpg)';
    divImg.append(childImgDiv);
  }
  //remember last index in cookie
  document.cookie = `startNumImg=${(i<8 ? i+1 : i-9)}`;
// };
}, false);