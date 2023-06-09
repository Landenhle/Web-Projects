const show = document.querySelector('.showcase');



function changeBg(){
    
    let images = ['url("2.jpg")','url("3.jpg")','url("4.jpg")'];
    let bg = images[Math.floor(Math.random() * images.length)];
    show.style.backgroundImage = bg;
}

setInterval(changeBg, 1000)