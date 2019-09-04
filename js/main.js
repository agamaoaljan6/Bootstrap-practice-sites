$(document).ready(function () {
    $('.btn-sub1').hover(
        function () {
            $('.fa-angle-right').css({
                "transform": "rotate(180deg)",
                "margin-left": "5px"
            });
        },
        function () {
            $('.fa-angle-right').css({
                "transform": "rotate(0deg)",
                "margin-left": "0px"
            });
        }
    )
    $('.btn-sub2').hover(
        function () {
            $('.fa-angle-double-right').css({
                "transform": "rotate(180deg)",
                "margin-left": "5px"
            });
        },
        function () {
            $('.fa-angle-double-right').css({
                "transform": "rotate(0deg)",
                "margin-left": "0px"
            });
        }
    );

    $('.content-1 .col-md-4 .circle').hover(
        function () {
        $(this).css({
            "width":"105px",
            "height":"105px",
            "color":"#3f494c"
        });
    },
    function() {
        $(this).css({
            "width":"100px",
            "height":"100px",
            "color":" #ef233c"
        });
    }
    
    
    
    )
})