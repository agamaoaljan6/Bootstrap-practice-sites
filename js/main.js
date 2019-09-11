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

    const x = 854;
    const y = 672;

    $(window).on('scroll', function() {
        let scrollh = $(document).height();
        let scrollt = $(document).scrollTop();

        if(x < scrollt){
            $('.prog-1').css('width', '90%');
            $('.prog-2').css('width', '94%');
            $('.prog-3').css('width', '85%');
        }else if(y > scrollt) {
            $('.prog-1, .prog-2, .prog-3')
        }


    })

})