$(function() {
  'use strict';

  var files = [
      'files/food1.jpg',
      'files/food2.jpg',
      'files/food3.jpg',
      'files/food4.jpg'
  ];
  var img;
  var timer;
  var currentNum = 0;
  var nowPlaying = false;
  for (var i = 0; i < files.length; i++) {
      img = $('<img>').attr('src', files[i]).addClass('thumbnail');
      $('#thumbnails').append(img);
  }
  $('#main').append(
      $('<img>').attr('src', files[0])
  );
  $('.thumbnail:first').addClass('current');
  $('.thumbnail').click(function() {
      $('#main img').attr('src', $(this).attr('src'));
      currentNum = $(this).index();
      $(this).addClass('current').siblings().removeClass('current');
  });
  $('#prev').click(function() {
      currentNum--;
      if (currentNum < 0) {
          currentNum = files.length - 1;
      }
      $('#main img').attr('src', files[currentNum]);
      $('.thumbnail').removeClass('current');
      $('.thumbnail').eq(currentNum).addClass('current');
  });
  $('#next').click(function() {
      currentNum++;
      if (currentNum > files.length - 1) {
          currentNum = 0;
      }
      $('#main img').attr('src', files[currentNum]);
      $('.thumbnail').removeClass('current');
      $('.thumbnail').eq(currentNum).addClass('current');
  });
  function autoPlay() {
      $('#next').click();
      timer = setTimeout(function() {
          autoPlay();
      }, 1000);
  }
  $('#play').click(function() {
      if (nowPlaying) return;
      nowPlaying = true;
      autoPlay();
  });
  $('#stop').click(function() {
      clearTimeout(timer);
      nowPlaying = false;
  });

})();
