 var canvas = document.getElementById('mycanvas');

// window.onload = function() {
//    console.log("test");
//  };
//
 var ctx = canvas.getContext('2d');

 var startX,
     startY,
     x,
     y,
     borderWidth = 10,
     isDrawing = false;

 canvas.addEventListener('mousedown',function(e){
   isDrawing = true;
   startX = e.pageX - this.offset().left - borderWidth;
   startY = e.pageY - this.offset().top - borderWidth;
 })

 canvas.addEventListener('mousemove',function(e){
     if (!isDrawing) return;
     x = e.pageX - this.offset().left - borderWidth;
     y = e.pageY - this.offset().top - borderWidth;
    //  ctx.beginPath();
    //  ctx.moveTo(startX, startY);
    //  ctx.lineTo(x, y);
    //  ctx.stroke();
     startX = x;
     startY = y;
 })
 canvas.addEventListener('mouseup',function(){
     isDrawing = false;
 })
canvas.addEventListener('mouseleave',function(){
     isDrawing = false;
 });
