import $ from 'jquery';

$(function() {
  var canvas = document.getElementById('mycanvas');
  if (!canvas || !canvas.getContext) return false;
  var ctx = canvas.getContext('2d');

  var startX,
      startY,
      x,
      y,
      borderWidth = 20,
      isDrawing = false;

  $('#mycanvas').mousedown(function(e) {
      isDrawing = true;
      startX = e.pageX - $(this).offset().left - borderWidth;
      startY = e.pageY - $(this).offset().top - borderWidth;
  })
  .mousemove(function(e) {
      if (!isDrawing) return;
      x = e.pageX - $(this).offset().left - borderWidth;
      y = e.pageY - $(this).offset().top - borderWidth;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(x, y);
      ctx.stroke();
      startX = x;
      startY = y;
  })
  .mouseup(function() {
      isDrawing = false;
  })
  .mouseleave(function() {
      isDrawing = false;
  });

  $('#erase').click(function() {
    alert("本当に消去しますか？");
      // if (!confirm('本当に消去しますか？'));
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

});
