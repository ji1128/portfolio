// const menuToggleBtn = document.querySelector('.menu-toggle-btn');
// const menuHide = document.getElementById('gnb-mo');
// let isHideMenu = false;

// menuToggleBtn.addEventListener('click', function () {
//     isHideMenu = !isHideMenu;
//     if (isHideMenu) {
//         menuToggleBtn.classList.add('active');
//         menuHide.classList.add('show');
//     } else {
//         menuToggleBtn.classList.remove('active');
//         menuHide.classList.remove('show');
//     }
// });

$(document).ready(function () {

    // mo-menu -----------------------------
    $('.menu-toggle-btn').click(function () {
        $('#gnb-mo').toggleClass('show');
        $('.menu-toggle-btn').toggleClass('active');
        $('.mo-menu-box').toggleClass('show');
    });
    $('.menu-toggle-btn.active').click(function () {
        $('#gnb-mo').removeClass('show');
        $('.menu-toggle-btn').removeClass('active');
        $('.mo-menu-box').removeClass('show');
    });

    // intro -----------------------------
    const content = '웹 퍼블리셔 김현지 입니다.'
    const txt = document.querySelector('.txt');
    let n = 0;

    const typing = function () {
        txt.innerHTML += content[n++]; //.txt엘리먼트에 위에 content의 변수에 저장한 문자를 순차적으로 뿌리겠다.
        if (n > content.length) { // content의의 변수 길이가 넘으면 제안을 설정한다.
            txt.innerHTML = ''; // .txt엘리먼트에 위에 빈문자를 뿌리겠다.
            n = 0; // n번째를 0으로 초기화 하겠다.
        }
    };

    setInterval(typing, 200);


    // skill -----------------------------
    // coding-skill
    var $gauge = [
            "85", "85", "70", "70", "50"
        ],
        $skillCoding = $("#section2 .left .coding-box .skill span");
    $skillDesign = $("#section2 .left .design-box .skill span");

    $skillCoding.hover(function () {
        var i = $(this).index();
        console.log(i);

        $("#section2 .right div h2").text($gauge[i])
        $(this).css("text-decoration", "underline");
    }, function () {
        $(this).css("text-decoration", "");
    });

    // design-skill
    var $gauge2 = [
            "85", "85", "95"
        ],
        $skillDesign = $("#section2 .left .design-box .skill span");

    $skillDesign.hover(function () {
        var i = $(this).index();
        console.log(i);

        $("#section2 .right div h2").text($gauge2[i])
        $(this).css("text-decoration", "underline");
    }, function () {
        $(this).css("text-decoration", "");
    });

    // skill -----------------------------

    // skill -----------------------------

    // skill -----------------------------



})