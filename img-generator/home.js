

const pics =['url("img/1.jpg")' ,'url("img/2.jpg")','url("img/3.jpg")','url("img/4.jpg")','url("img/5.jpg")'];

const pic = document.querySelector('section');

function showImage(){
    let a = Math.floor(Math.random()*pics.length);
    console.log(a);
    let img = pics[a];
    console.log(img);
    pic.style.backgroundImage = img ;
}


