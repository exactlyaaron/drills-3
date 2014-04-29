/* jshint unused:false */
/* jshint camelcase:false */
/* global AmCharts:true */
/* global _:true*/
(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    generateChart();
    $('#compare').click(get);
  }

  var chartData;
  function get(){

    var numberOfMovies = $('#number-of-movies').val();

    var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit='+numberOfMovies+'&country=us&apikey=32nu4f2g4ksm8cyynfvt6zk7&callback=?';

    $.getJSON(url, function(data){

      chartData = [];
      var movies = data.movies;

      for(var i = 0; i<movies.length; i++){
        chart.dataProvider.push({
          title: movies[i].title,
          audience_score: movies[i].ratings.audience_score,
          critic_score: movies[i].ratings.critics_score
        });
      }
      chart.validateData();
    });
  }

  var chart;
  function generateChart(){

      chartData = [];
      chart = AmCharts.makeChart('chartdiv', {
          'type': 'serial',
          'theme': 'light',
          'pathToImages': 'http://www.amcharts.com/lib/3/images/',
          'legend': {
            'useGraphSettings': true
          },
          'dataProvider': chartData,
          'valueAxes': [{
              'axisAlpha': 0.2,
              'dashLength': 1,
              'position': 'left'
          }],
          'graphs': [{
              'id':'g1',
              'balloonText': 'Critic Score<br /><b><span style=\'font-size:14px;\'>value: [[value]]</span></b>',
              'bullet': 'round',
              'bulletBorderAlpha': 1,
      		    'bulletColor':'#FFFFFF',
              'hideBulletsCount': 50,
              'title': 'Critic Rating',
              'valueField': 'critic_score',
      		    'useLineColorForBulletBorder':true
          }, {
              'id':'g2',
              'balloonText': 'Audience Score<br /><b><span style=\'font-size:14px;\'>value: [[value]]</span></b>',
              'bullet': 'round',
              'bulletBorderAlpha': 1,
              'bulletColor':'#FFFFFF',
              'hideBulletsCount': 50,
              'title': 'Audience Rating',
              'valueField': 'audience_score',
              'useLineColorForBulletBorder':true
          }],
            'chartScrollbar': {
                'autoGridCount': false,
                'graph': 'g1',
                'scrollbarHeight': 10
          },
          'chartCursor': {
              'cursorPosition': 'mouse'
          },
          'categoryField': 'title',
          'categoryAxis': {
              'axisColor': '#DADADA',
              'dashLength': 1,
              'minorGridEnabled': true,
              'labelRotation':30
          },
      	'exportConfig':{
      	  menuRight: '20px',
            menuBottom: '30px',
            menuItems: [{
            icon: 'http://www.amcharts.com/lib/3/images/export.png',
            format: 'png'
            }]
      	}
      });

  }

})();
