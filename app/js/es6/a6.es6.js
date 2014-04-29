/* jshint unused:false */
/* jshint camelcase:false */
/* global _:true*/
(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#get').click(get);
  }

  function get(){

    var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit=16&country=us&apikey=32nu4f2g4ksm8cyynfvt6zk7&callback=?';

    var criteria = $('#criteria').val();
    var numberOfMovies = $('#number-of-movies').val();

    $.getJSON(url, function(data){

      var movies = data.movies;

      for(var i = 0; i<movies.length; i++){

        var score = movies[i].ratings.critics_score;
        var $div = $('<div>');
        var $img = $('<img>');
        $img.attr('src', movies[i].posters.original);
        $div.append($img);
        $div.append(movies[i].title);

        if(score >= criteria){
          $('#container').append($div);
        }
      }

    });
  }

})();
