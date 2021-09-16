// JavaScript Document
$(document).ready(function () {
	var $table1 = $('table#table1');
	var $tableBody1 = $table1.find('tbody');

	var $table2 = $('table#table2');
	var $tableBody2 = $table2.find('tbody');

	var $table3 = $('table#table3');
	var $tableBody3 = $table3.find('tbody');

	var $table4 = $('table#table4');
	var $tableBody4 = $table4.find('tbody');
	
	var $table5 = $('table#table5');
	var $tableBody5 = $table5.find('tbody');
	
	var $tableTr1 = $tableBody1.find('tr');
	var $tableTr2 = $tableBody2.find('tr');
	var $tableTr3 = $tableBody3.find('tr');
	var $tableTr4 = $tableBody4.find('tr');
	var $tableTr5 = $tableBody5.find('tr');

	var menuObj = {};

	// D1 넘버링을 위한 태그 추가
	$table1.find('colgroup').prepend('<col style="width:40px" />');
	$table1.find('thead').find('tr').eq(0).prepend('<th scope="col" rowspan="2" style="border-right:1px solid #ccc">No</th>');
	// D1 대메뉴 메뉴 데이터 생성
	$tableTr1.each(function (idx) {
		var $depth1 = $(this).find('td').eq(0);
		var $depth2 = $(this).find('td').eq(1);
		// 넘버링
		$(this).prepend('<td style="font-weight: bold;text-align: center;">'+ (idx + 1)+ '</td>');
	});

	

	// D2 넘버링을 위한 태그 추가
	$table2.find('colgroup').prepend('<col style="width:40px" />');
	$table2.find('thead').find('tr').eq(0).prepend('<th scope="col" rowspan="2" style="border-right:1px solid #ccc">No</th>');
	// D2 대메뉴 메뉴 데이터 생성
	$tableTr2.each(function (idx) {
		var $depth1 = $(this).find('td').eq(0);
		var $depth2 = $(this).find('td').eq(1);
		// 넘버링
		$(this).prepend('<td style="font-weight: bold;text-align: center;">'+ (idx + 1)+ '</td>');
	});



	// D3 넘버링을 위한 태그 추가
	$table3.find('colgroup').prepend('<col style="width:40px" />');
	$table3.find('thead').find('tr').eq(0).prepend('<th scope="col" rowspan="2" style="border-right:1px solid #ccc">No</th>');
	// D3 대메뉴 메뉴 데이터 생성
	$tableTr3.each(function (idx) {
		var $depth1 = $(this).find('td').eq(0);
		var $depth2 = $(this).find('td').eq(1);
		// 넘버링
		$(this).prepend('<td style="font-weight: bold;text-align: center;">'+ (idx + 1)+ '</td>');
	});



	// D4 넘버링을 위한 태그 추가
	$table4.find('colgroup').prepend('<col style="width:40px" />');
	$table4.find('thead').find('tr').eq(0).prepend('<th scope="col" rowspan="2" style="border-right:1px solid #ccc">No</th>');
	// D4 대메뉴 메뉴 데이터 생성
	$tableTr4.each(function (idx) {
		var $depth1 = $(this).find('td').eq(0);
		var $depth2 = $(this).find('td').eq(1);
		// 넘버링
		$(this).prepend('<td style="font-weight: bold;text-align: center;">'+ (idx + 1)+ '</td>');
	});



	// D5 넘버링을 위한 태그 추가
	$table5.find('colgroup').prepend('<col style="width:40px" />');
	$table5.find('thead').find('tr').eq(0).prepend('<th scope="col" rowspan="2" style="border-right:1px solid #ccc">No</th>');
	// D5 대메뉴 메뉴 데이터 생성
	$tableTr5.each(function (idx) {
		var $depth1 = $(this).find('td').eq(0);
		var $depth2 = $(this).find('td').eq(1);
		// 넘버링
		$(this).prepend('<td style="font-weight: bold;text-align: center;">'+ (idx + 1)+ '</td>');
	});
	
});


$(function($){
	//--total
	// var total=$('#table1 .tdNum').length;
	// var complete=$('.hisList').length;
	// $('.siteInfo dd span').eq(0).text(total);
	// $('.siteInfo dd span').eq(1).text(complete);
	// $('#compRate').text(Math.round(((complete/total)*100)) + '%');
	//--total end

/*
	$('.hisList li:first-child').addClass('on');

	$('.tm').click(function(){
		$(this).addClass('selected');
		$('.menu>dd').show().siblings('dt').children('a').removeClass('selected');
		return false;
	});
*/
	$('.menu>dt a').click(function(){
		$('.tm').removeClass('selected');
		$(this).addClass('selected').parent('dt').siblings('dt').children('a').removeClass('selected');
		$(this).parent('dt').next('dd').show().siblings('dd').hide();
		return false;
	});
	$('.btnHis').click(function(){
		$(this).toggleClass('off');
		$(this).next('.hisList').children('li:not(.on)').toggle();
		return false;
	});
	$('.tip').hover(function(){
		$(this).children('span').toggle();
	});
	$('.notice li').append('<span class="bul"></span>');


	// to top
	var scrollDiv = document.createElement('div');
	$(scrollDiv).attr('id', 'toTop').html('<a href="#nohref">↑ 처음으로 이동</a>').appendTo('body');
	$(window).scroll(function(){
		if ($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function(){
		$('body,html').animate({scrollTop: 0}, 'fast');
		return false;
	});
	$('.overlay').click(function(){
		$('.dNotice').hide(200); $('.overlay').fadeOut();
	});
});