$(document).ready(function(){

	//공통 팝업
	$('.pop-btn').off().on('click', function(){
		layerHandler(this);
	});

	// toggle
	$('.toggle-action > ul > li dt').off().on('click', function () {
	// 초기화
	$('.toggle-action > ul > li dt .btn_toggle').text('상세내용 열기');
	$(this).parents().siblings().removeClass('active');

	if ($(this).parents('li').hasClass('active') === false) {
		$(this).parents('li').addClass('active');
		$(this).children('.btn_toggle').text('상세내용 닫기');
	} else {
		$(this).parents('li').removeClass('active');
		$(this).children('.btn_toggle').text('상세내용 열기');
	}
	});

    //password
    $('.ipt-pass i').on('click',function(){
        $('.ipt-pass input').toggleClass('act-pass');
        if($('input').hasClass('act-pass')){
            $(this).attr('class',"icon-eye-slash").prev().prev('input').attr('type',"text");
        }else{
            $(this).attr('class',"icon-eye").prev().prev('input').attr('type','password');
        }
    });
	
	//input focus
	$('.ipt input').focus(function(){
		$(this).next().addClass('lab-top');
	});
	$('.ipt input').blur(function(){
		if( $('.ipt input').val() == ''){
			$(this).next().removeClass('lab-top');
		}
	});

	//toolTip focus
	$('.tip-box button').focus(function(){
		$(this).next().show();
		$(this).parent('.tip-box').attr('tabindex','0');
	});
	$('.tip-box button').blur(function(){
		$(this).next().hide();
		$(this).parent('.tip-box').removeAttr('tabindex');
	});

});

// popup
function layerHandler(obj) {
	var bthObj = $(obj);
	var thisClass = $(obj).attr('class');
	var idNum = thisClass.substring(thisClass.length-2);
	var idPop = $('.pop-open' + idNum);
	idPop.fadeIn();
	$('body').css('overflow-y','hidden');
	$('.close-btn' + idNum).on('click', function(){
		idPop.fadeOut();
		$('body').css('overflow-y','auto');
		return false;
	});
};