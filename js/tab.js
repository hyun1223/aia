        $(document).ready(function() {
            UI.tab('tab01', 0);
            UI.tab('tab02', 0);
            UI.tab('tab03', 0);
            UI.tab('tab04', 0);
            UI.tab('tab05', 0);
        });


        var Pub = Pub || {};
        (function (context) {
            Pub.util = {
                isValid(variables) {
                    if (variables === null || variables === undefined || variables === '' || variables === 'undefine') return false;
                    return true;
                },
            };
        }(window));
        var UI = (function () {
            var tab = {
                /**
                  * Tab
                  * --------------------------------------
                  * @param _tabID : tab Name
                  * @param _activeNum : 활성화 Index(Default : 0)
                  * @param _callback :
                  * 일반탭과 스크롤 탭의 data-tab="_tabID" 위치가 다름에 주의
                  */
                handler(_tabID, _activeNum, _callback) {
                    var initActNum = Pub.util.isValid(_activeNum) ? _activeNum : 0;
                    var $tabNav = $(`.tab-nav[data-tab="${_tabID}"]`);
                    var $tabCon = $(`.tab-content[data-tab="${_tabID}"]`);
                    var $navItem = $tabNav.find('li');

                    var len = $tabNav.find('> li').length;
                    if (len <= 2) {
                        if (len <= 1) $tabNav.addClass('len1'); // 탭 갯수 2개일 경우 양쪽 여백 15
                        else $tabNav.addClass('len2'); // 탭 갯수 2개일 경우 양쪽 여백 15
                    }

                    // tab-br : 한줄 또는 두줄일경우 min-높이값 설정
                    // ex : HFACC02001000, HFACC02001000_01
                    if ($tabNav.hasClass('tab-br')) {
                        var titleH_init = 45;
                        $tabNav.find('a').each(function () {
                            var titleH = $(this).height();
                            if (titleH_init < titleH) titleH_init = titleH;
                        });
                        $tabNav.find('a').css({
                            'min-height': titleH_init + 28,
                        });
                    }

                    // tap-top : make circle
                    if ($tabNav.hasClass('tab-top')) {
                        $tabNav.find('a span').wrapInner('<em class="txt">').append('<i class="circle"></i>');
                    }

                    var curTitle = $navItem.eq(initActNum).addClass('on').find('a').text();
                    $navItem.eq(initActNum).addClass('on').find('a').attr('title', `${curTitle} 탭 선택`);
                    $tabCon.hide();
                    $tabCon.eq(initActNum).show();

                    // EventHandler
                    $tabNav.on('click', 'a', function () {
                        // disabled
                        if ($(this).hasClass('disabled')) {
                            return false;
                        }

                        var clickNum = $(this).parent().index();
                        $navItem.removeClass('on').find('a').attr('title', '');
                        var curTitle01 = $navItem.eq(clickNum).addClass('on').find('a').text();
                        $navItem.eq(clickNum).addClass('on').find('a').attr('title', `${curTitle01} 탭 선택`);
                        $tabCon.hide();
                        $tabCon.eq(clickNum).show();
                        $(this).blur();

                        // -callback--------------
                        if (_callback) _callback(clickNum);
                        //------------------------
                        return false;
                    });
                },
                // HFACC02001000_01(보장분석 SubTab)
                // HFPEN00004200(SFP 정주행 학습)
                // HFACO02000100(아치트)
                scroll(_tabID, _activeNum, _callback) {
                    var initActNum02 = Pub.util.isValid(_activeNum) ? _activeNum : -999;
                    var btnW = 0;
                    var $tabNav = $(`[data-tab="${_tabID}"]`).find('.scroll-wrap');
                    var $tabCon = $(`.tab-content[data-tab="${_tabID}"]`);
                    var $navItem = $tabNav.children();

                    // Gradient
                    $(`.tab-scroll[data-tab="${_tabID}"]`).wrap('<div class="tab-gradient"></div>');


                    // 보장분석 title 있는 케이스
                    var $title = $(`[data-tab="${_tabID}"]`).find('.title');
                    var titleW = 0;
                    var titleMargin = 10;
                    if ($title.length > 0) {
                        titleW = $title.outerWidth();
                        titleMargin = 10;
                        $tabNav.css('margin-left', (titleW + titleMargin));
                    }

                    $navItem.each(function () {
                        btnW += $(this).outerWidth();
                    });

                    $tabNav.width(btnW + 20);
                    $navItem.eq(initActNum02).addClass('on').siblings().removeClass('on');
                    var activePos = $navItem.eq(initActNum02).position().left;
                    $tabNav.parent().scrollLeft(activePos - (titleW + titleMargin));

                    var curTitle = $navItem.eq(initActNum02).addClass('on').find('a').text();
                    $navItem.eq(initActNum02).addClass('on').find('a').attr('title', `${curTitle} 탭 선택`);
                    $tabCon.hide();
                    $tabCon.eq(initActNum02).show();

                    // -callback--------------
                    if (_callback) _callback(initActNum02);
                    //------------------------

                    // EventHandler
                    $tabNav.on('click', 'a', function () {
                        // disabled
                        if ($(this).hasClass('disabled')) {
                            return false;
                        }

                        var clickNum = $(this).parent().index();
                        $navItem.removeClass('on').find('a').attr('title', '');
                        var curTitle02 = $navItem.eq(clickNum).addClass('on').find('a').text();
                        $navItem.eq(clickNum).addClass('on').find('a').attr('title', `${curTitle02} 탭 선택`);
                        $tabCon.hide();
                        $tabCon.eq(clickNum).show();
                        $(this).blur();

                        // -callback--------------
                        if (_callback) _callback(clickNum);
                        //------------------------
                        return false;
                    });
                },
            };

            return {
                tab: tab.handler,
                tabScroll: tab.scroll,
            };
        }());
