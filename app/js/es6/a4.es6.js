/* jshint unused:false */
/* global _:true*/
(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#go').click(go);
  }

  function go(){
    var params = $('#parameters').val().split(',').map(n=>n.trim());
    var begin = params[0];
    var end = params[1];
    var step = params[2];
    var numbers = _.range(begin, end, step);
    var _numbers = _(numbers).map(n=>Math.pow(n,3)).shuffle().forEach(paint);
  }

  function paint(x){
    var $div = $('<div>');
    $div.text(x);
    $('#container').append($div);
  }



})();
