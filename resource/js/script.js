
// $(function(){
//   $(".play_btn").click(function(){
//     $(".video_cont_iframe")[0].src += "?rel=0&amp;autoplay=1&amp;playlist=JUzNi3J5OIw";
//     $(".video_thumbnail").fadeOut(1500);
//    });
// });


// 메뉴 슬라이드 토글
$(function(){
  $(".mo_menu a").click(function(){
    $(".mo_menu").slideToggle("slow");
  });
});

$(function(){
  $(".menu_btn").click(function(){
    $(".mo_menu").slideToggle("slow");
  });
});


//메뉴 width값에 따라
// $(function(){
//   $(window).on('resize', function() {
//     if($(document).width() < 1025){
//       $(".menu_txt_ul").css("display","none");
// 	    $(".mo_menu").css("display","block");
//     }else{
//       $(".menu_txt_ul").css("display","block");
//       $(".mo_menu").css("display","none");
//     }
//   });
// });


// 스크롤 탑
$(window).scroll(function(){
	if ($(this).scrollTop() > 1500){
		$('.go_top').css("opacity","1");
	} else{
		$('.go_top').css("opacity","0");
	}
});

// 버튼 클릭 active
$(function(){
  var active = $(".s_button");
  active.parent().find("div").click(function(){ 
  active.removeClass("active");
  $(this).addClass("active");
  });
});