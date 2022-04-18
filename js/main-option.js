var myFullpage = new fullpage('#fullpage', {
    //이동
    menu: '#menu',
    lockAnchors: false,
    anchors: ['firstPage', 'secondPage'],
    navigation: true, //네비게이션
    navigationPosition: 'right',
    navigationTooltips: ['Home', 'About', 'contact', 'last'],
    showActiveTooltip: false,
    slidesNavigation: false,
    slidesNavPosition: 'bottom',

    //스크롤
    css3: true,
    scrollingSpeed: 1200, //스크롤 속도
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    interlockedSlides: false,
    dragAndMove: false,
    offsetSections: false,
    resetSliders: false,
    fadingEffect: false,
    normalScrollElements: '#element1, .element2',
    scrollOverflow: false,
    scrollOverflowReset: false,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    bigSectionsDestination: null,

    //접근성
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    //디자인
    controlArrows: true,
    verticalCentered: true,
    sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'], //세션 컬러
    paddingTop: '3em',
    paddingBottom: '10px',
    fixedElements: '#header, .footer',
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: false,
    parallax: false,
    parallaxOptions: {
        type: 'reveal',
        percentage: 62,
        property: 'translate'
    },
    cards: false,
    cardsOptions: {
        perspective: 100,
        fadeContent: true,
        fadeBackground: true
    },

    //맞춤 선택자
    sectionSelector: '.section',
    slideSelector: '.slide',

    lazyLoading: true,

    //사건(이벤트) - 어떤 동작나 상황이 발생했을 때 함수가 실행됨
    //onLeave 스크롤이 시작할때 시작
    //origin(원래 있던세션에 대한 정보),destination(이동하는 세션에 대한 정보) ,direction(스크롤 방향)
    onLeave: function (origin, destination, direction) {},
    //afterLoad 스크롤이 끝날때 시작
    afterLoad: function (origin, destination, direction) {
        if(destination == 2){
            $('#section2 h3').show();
        }
    },
    afterRender: function () {},
    afterResize: function (width, height) {},
    afterReBuild: function () {},
    afterResponsive: function (isResponsive) {},
    afterSlideLoad: function (section, origin, destination, direction) {},
    onSlideLeave: function (section, origin, destination, direction) {}
});