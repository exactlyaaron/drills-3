/* jshint unused:false */
/* global _:true*/
(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#go').click(go);
  }

  function go(){
    var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit=16&country=us&apikey=32nu4f2g4ksm8cyynfvt6zk7&callback=?';

    $.getJSON(url, function(data){
      var movies = data.movies;
      for(var i = 0; i<movies.length; i++){
        console.log(movies[i].title);
        var $wrapperDiv = $('<div class="wrapper">');
        var $div = $('<div>');
        var $img = $('<img>');
        $img.attr('src', movies[i].posters.original);
        $div.append($img);
        $div.append(movies[i].title);

        $('#container').append($div);

      }
    });
  }

})();
