const photoSlider = document.getElementById("slider");


const photos= [ "./img/steven.jpg", "./img/bosque1.jpg", "./img/bosque2.jpg" ]

function cambiarPhotoDelSlider(photo){
    photoSlider.style.backgroundImage = `url(${photo})`
}

let i = 0;
setInterval(()=>{
    cambiarPhotoDelSlider(photos[i]);
    if(i < photos.length -1){
        i++;
    } else {
        i = 0;
    }

}, 3000);

