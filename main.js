function preload(){
}
function setup (){
    canvas = createCanvas(640,480);
    canvas.position(500,300);
    video = createCapture(VIDEO);
    video.hide();
    cor = '';
}
function draw(){
    image(video,0,0,640,480);
    tint(cor);
}
function takeSnapshot(){
    save('foto.png');
}
function filtro(){
   cor = document.getElementById('colorName').value;
}