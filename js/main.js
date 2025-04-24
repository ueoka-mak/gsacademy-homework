// jsを記述する際はここに記載していく
$(function() {
    // スムーススクロール
    $('a[href^="#"]').click(function() {
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - 120; // ヘッダーの高さ分調整
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
  
    // ニュースアイテムのホバーエフェクト
    $('.news-item').hover(
      function() {
        $(this).css('opacity', '0.7');
      },
      function() {
        $(this).css('opacity', '1');
      }
    );
  
    // メインビジュアルのスライドショー（オプション）
    // 4枚の画像のスライドショー（順番を入れ替え）
    var imagePatterns = [
        ['img/about_01.jpg', 'img/about_02.jpg', 'img/about_03.jpg', 'img/about_04.jpg'],
        ['img/about_02.jpg', 'img/about_03.jpg', 'img/about_04.jpg', 'img/about_01.jpg'],
        ['img/about_03.jpg', 'img/about_04.jpg', 'img/about_01.jpg', 'img/about_02.jpg'],
        ['img/about_04.jpg', 'img/about_01.jpg', 'img/about_02.jpg', 'img/about_03.jpg']
    ];
    
    var currentPattern = 0;
    
    // HTMLで4つの画像用の要素を作成
    var aboutImagesHtml = '';
    for (var i = 0; i < 4; i++) {
        aboutImagesHtml += '<img src="' + imagePatterns[0][i] + '" alt="About ' + (i+1) + '">';
    }
    $('.about-images').html(aboutImagesHtml);
    
    function rotateImages() {
        currentPattern = (currentPattern + 1) % imagePatterns.length;
        
        // フェードアウトして画像を入れ替え、フェードイン
        $('.about-images').fadeOut(1000, function() {
        // 各画像のsrcを更新
        $('.about-images img').each(function(index) {
            $(this).attr('src', imagePatterns[currentPattern][index]);
        });
        $(this).fadeIn(1000);
        });
    }
    
    setInterval(rotateImages, 5000); // 5秒ごとに画像を切り替え
  });