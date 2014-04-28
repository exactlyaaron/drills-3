/* jshint unused:false */
(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#go').click(go);
  }

  function go(){
    var first = $('#firstname').val().toLowerCase();
    var last = $('#lastname').val().toLowerCase();
    var movie = $('#movie').val().toUpperCase();

    $('#container').text(`${first} ${last} loves ${movie}.`);
  }


})();
