const buttonSwitch = document.querySelector("#switch");

buttonSwitch.addEventListener("click", (evt) => {
  const imgAvatar = document.querySelector('.img-avatar');
  const html = document.documentElement;

  html.classList.toggle("light");
  if(!html.classList.contains('light')){
    imgAvatar.setAttribute('src', "./develinks/app/assets/my_photo.jpg" )
    imgAvatar.setAttribute('alt', "Foto de Mayk Brito sorrindo, com ôculos, com barba e com camiseta preta em um funto amarelo mustarda" )
  }else {
    imgAvatar.setAttribute('src', "./develinks/app/assets/mySon.jpeg" )
    imgAvatar.setAttribute('alt', "Foto de Mayk Brito sorrindo, com ôculos escuro, sem barba e com jaqueta preta em um funto azul celeste e tons de rosa e lilas" )
  }
});