$(document).ready(function(){

	//공통 팝업
	$('.pop-btn').off().on('click', function(){
		layerHandler(this);
	});
	selectPopup();

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
		if ($(this).parent().parent().hasClass('ipt-pass')) {
			$(this).parent().parent().addClass('active');
		}
	});
	$('.ipt input').blur(function(){
		if($(this).val() == ''){
			$(this).next().removeClass('lab-top');
			if ($(this).parent().parent().hasClass('ipt-pass')) {
				$(this).parent().parent().removeClass('active');
			}
		}
	});
	
	//input 주민번호  //20211111
	$('.ipt-idnum input').focus(function(){
		$(this).parents('.ipt-box02').addClass('active');
		$(this).parents().children('label').addClass('lab-top');
	});
	$('.ipt-idnum input').blur(function(){
		if( $('.ipt-idnum input').eq(0).val() == '' && $('.ipt-idnum input').eq(1).val() == '' ){
			$(this).parents('.ipt-box02').removeClass('active');
			$(this).parents().children('label').removeClass('lab-top');
		} else {
			$(this).parents('.ipt-box02').removeClass('active');
		}
	});
	//input 주민번호(cosmos) //20211207
	$('.int.type02 div input').focus(function(){
		$(this).parents('.int.type02').addClass('active');
	});
	$('.int.type02 div input').blur(function(){
		$(this).parents('.int.type02').removeClass('active');
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

	//휴대폰인증동의내용 팝업 20111108
	$('.phone-pop01').on('click', function(){
		window.open('https://cert.vno.co.kr/app/agree/agree_m_01.jsp', '개인정보 수집/이용 동의', 'width=500, height=540');
	});
	$('.phone-pop02').on('click', function(){
		window.open('https://cert.vno.co.kr/app/agree/agree_m_02.jsp', '고유식별정보 처리 동의', 'width=500, height=540');
	});
	$('.phone-pop03').on('click', function(){
		window.open('https://cert.vno.co.kr/app/agree/agree_m_03.jsp', '통신사 이용약관 동의', 'width=500, height=540');
	});
	$('.phone-pop04').on('click', function(){
		window.open('https://cert.vno.co.kr/app/agree/agree_m_04.jsp', '서비스 이용약관 동의', 'width=500, height=540');
	});
	$('.phone-pop05').on('click', function(){
		window.open('https://cert.vno.co.kr/app/agree/agree_m_05.jsp', '개인정보 제 3자 제공 동의(KT, LGU+ 알뜰폰 통합)', 'width=500, height=540');
	});

	//모바일 키보드 포커싱
	if($(window).width() < 767) {
		$('input[type="text"], input[type="password"], input[type="email"], input[type="tel"], input[type="url"], input[type="search"], textarea').focus(function () {
			$('html, body').animate({
				scrollTop: ($(this).offset().top - 100) + 'px'
			}, 'fast');
		});	
		$('.layer-popup input[type="text"], .layer-popup input[type="password"], .layer-popup input[type="email"], .layer-popup input[type="tel"], .layer-popup input[type="url"], .layer-popup input[type="search"], .layer-popup textarea').focus(function () {
			var offset = $(this).offset().top;
			if( offset > $(this).parents('.pop-cont').height() ) {
				$(this).parents('.pop-cont').animate({
						scrollTop: offset - 400 + 'px'
				}, 'fast');
			} else {
				$(this).parents('.pop-cont').animate({
						scrollTop: offset + 'px'
				}, 'fast');
			}
		});
	}    

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


// mobile popup 높이
var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", vh + "px");

window.addEventListener("resize", function(){
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", vh + "px");
});


//select popup
function selectPopup() {
	var target = $('.ipt-sel');
	
	// 셀렉트 클릭 버튼 이벤트
	$('.btn-sel').off().on('click', function() {
		var targetSel = $(this).next();
		var popTarget = $('.pop-sel');
		var selectValue = targetSel.val();
		var selTit = $(this).text();

		var tmp = ''
		targetSel.find('option').each(function(i) {
			if(typeof $(this).attr('value') != 'undefined') {
				tmp += '<li class="sel-radio">';
				if($(this).attr('value') == selectValue) {
					tmp += '	<input type="radio" name="sel_radio" id="sel_radio_' + i +'" value="' + $(this).attr('value') + '" checked />';
				} else {
					tmp += '	<input type="radio" name="sel_radio" id="sel_radio_' + i +'" value="' + $(this).attr('value') + '" />';
				}
				tmp += '	<label for="sel_radio_' + i +'">' + $(this).html() + '</label>';
				tmp += '</li>';
			}
		});
		popTarget.find('ul').html('');
		popTarget.find('ul').html(tmp);
		popTarget.find('.sel-head h1').text(selTit);
		if(targetSel.attr('disabled') != 'disabled'){
			popTarget.show();
			$('body').css('overflow', 'hidden');
		}
		$('input[name="sel_radio"]').off().on('click', function() {
			var radioValue = $('input[name="sel_radio"]:checked').val();
			var oldVal = targetSel.val();
			targetSel.val(radioValue);
			targetSel.val(radioValue).attr("selected","selected");
			var newVal = targetSel.val();
			popTarget.hide();
			$('body').css('overflow','auto');
			
			//select박스 onchange기능. select태그에 attribute를 change=펑션명 으로 사용. 
			if( oldVal != newVal ){
				var changeFn = targetSel.attr("change");
				if( changeFn != null && typeof changeFn != "undefined" && changeFn != "" ){
					var convertStringToFunction = window[changeFn];
					convertStringToFunction();
				}
			}
			
		});
		
		$('.close-sel').off().on('click', function() {
			popTarget.hide();
			$('body').css('overflow','auto');
		});
	});
};