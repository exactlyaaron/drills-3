/* jshint unused:false */
/* global moment:true */
(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#days').click(daysFromNow);
  }

  function daysFromNow(){
    var date = $('#date').val();
    var days = moment(date).fromNow();

    $('#container').text(days);
  }



})();
