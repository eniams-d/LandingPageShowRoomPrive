document.addEventListener("DOMContentLoaded", function () {

var canvasWidth = 550; 
 var canvasHeight = 500;
 
 var spriteWidth = 2500; 
 var spriteHeight = 250; 
 
 
 var cols = 8; 
 
 var trackRight = 0; 
 var trackLeft = 1; 
 
 var width = spriteWidth/cols; 
 var height = spriteHeight; 
 
 var curFrame = 0; 
 var frameCount = 8; 
 
 var x=0;
 var y=250; 
 
 var srcX; 
 var srcY; 
 

 var right = true;
 
 var speed =20; 
 
 var canvas = document.getElementById('canvas');


 canvas.width = canvasWidth;
 canvas.height = canvasHeight; 

 
 
 var ctx = canvas.getContext("2d");
 
 var character = new Image(); 
 character.src = "img/stork4.png";
 
 function updateFrame(){
 curFrame = ++curFrame % frameCount; 
 srcX = curFrame * width; 
 ctx.clearRect(x,y,width,height); 
 

 if(right && x<canvasWidth-width){
 srcY = trackRight * height; 
 x+=speed; 
 }
 }
 
 function draw(){
 updateFrame();
 ctx.drawImage(character,srcX,srcY,width,height,x,y,width,height);
 }
 
 setInterval(draw,80);
});

//ANIMATION JQuery cadeau
$(document).ready(function(){

var cadeau = $("#gift");

cadeau.hide();
setInterval(function(){

  cadeau.show();
  
        


           cadeau.css({"background-color": "#fff","border": "solid 1px #dd2071", "border-radius":"2px", "width":"30px", "height":"30px", 'top':'480px', 'margin-left': '470px' ,'position': "absolute",'display': 'block'});
           cadeau.animate({opacity: '1'}, "slow");

           cadeau.animate({'top': '800px','opacity': '1'}, "slow");


          
      

      
        cadeau.animate({opacity: '0'}, "slow");
        cadeau.animate({top: '20px'}, "slow");
        cadeau.animate({opacity: '0' }, "slow");
        
    },4000) ;

});



