/* jshint unused:false */
(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#square').click(square);
  }

  function square(){
    var numbers = $('#numbers').val().split(',').map(n=>n.trim()).map(n=>n*n).map(n=>`<div>${n}</div>`).forEach(x=>$('#container').append(x));
    console.log(numbers);
  }

  // function paint(x){
  //   var $div = $('<div>');
  //   $div.text(x);
  //   $('#container').append($div);
  // }


})();
