$(document).ready(function () {
    // $('.btn-sub1').hover(
    //     function () {
    //         $('.fa-angle-right').css({
    //             "transform": "rotate(180deg)",
    //             "margin-left": "5px"
    //         });
    //     },
    //     function () {
    //         $('.fa-angle-right').css({
    //             "transform": "rotate(0deg)",
    //             "margin-left": "0px"
    //         });
    //     }
    // )
    // $('.btn-sub2').hover(
    //     function () {
    //         $('.fa-angle-double-right').css({
    //             "transform": "rotate(180deg)",
    //             "margin-left": "5px"
    //         });
    //     },
    //     function () {
    //         $('.fa-angle-double-right').css({
    //             "transform": "rotate(0deg)",
    //             "margin-left": "0px"
    //         });
    //     }
    // );

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

    let basic_span = '.basic .basic-border:nth-child';

    $('.basic a').hover(function() {
        $(basic_span +'(1)').css('width', '100%');
        $(basic_span +'(2)').css('height', '100%');
        $(basic_span +'(3)').css('height', '100%');
        $(basic_span +'(4)').css('width', '100%');
        $('.basic hr').css('background-color','red');
    },
    
    function() {
        $(basic_span +'(1)').css('width', '30px');
        $(basic_span +'(2)').css('height', '30px');
        $(basic_span +'(3)').css('height', '30px');
        $(basic_span +'(4)').css('width', '30px');
        $('.basic hr').css('background-color','inherit');
    })

    let enterprise_span = '.enterprise .basic-border:nth-child';

    $('.enterprise a').hover(function() {
        $(enterprise_span +'(1)').css('width', '100%');
        $(enterprise_span +'(2)').css('height', '100%');
        $(enterprise_span +'(3)').css('height', '100%');
        $(enterprise_span +'(4)').css('width', '100%');
        $('.enterprise hr').css('background-color','red');
    },
    
    function() {
        $(enterprise_span +'(1)').css('width', '30px');
        $(enterprise_span +'(2)').css('height', '30px');
        $(enterprise_span +'(3)').css('height', '30px');
        $(enterprise_span +'(4)').css('width', '30px');
        $('.enterprise hr').css('background-color','inherit');
       
    })


    let pro_span = '.pro .pro-span:nth-child';
    $('.pro #pro-button').hover(
        function() {
        $(pro_span +'(1)').css({
            'height':'100%',
            'bottom':'0%'
        });
        $(pro_span +'(2)').css({
            'height':'100%',
            'bottom':'0%'
        })
    },
    function() {
        $(pro_span +'(1)').css({
            'height':'100px',
            'bottom':'40%',
        });
        $(pro_span +'(2)').css({
            'height':'100px',
            'bottom':'40%'
        })
    });


    $('.content-4 .nav-tabs:nth-child(1)').css({
        'background-color' : "#ffffff",
        'border-top' : '3px solid #e30022'
    });

    $('.content-4 .nav-tabs:nth-child(1)').on('focusin',function(){
        $(this).css({
            'background-color': '#ffffff',
            'border-top': '3px solid #e30022'
        })
    });

    $('.content-4 .nav-tabs:nth-child(1)').on('focusout',function(){
        $(this).css({
            'background-color':'#edf2f4',
            'border-top': '0px'
        })
    })

    $('.content-4 .nav-tabs:nth-child(2)').on('focusin',function(){
        $('content-4 .nav-tabs:nth-child(1').css({
            'background-color':'#edf2f4',
            'border-top':'0px'
        })

        $(this).css({
            'background-color': '#ffffff',
            'border-top': '3px solid #e30022'
        })
    });

    $('.content-4 .nav-tabs:nth-child(2)').on('focusout',function(){
        $(this).css({
            'background-color':'#edf2f4',
            'border-top': '0px'
        })
    })

    $('.content-4 .nav-tabs:nth-child(3)').on('focusin',function(){
        $(this).css({
            'background-color': '#ffffff',
            'border-top': '3px solid #e30022'
        })
    });

    $('.content-4 .nav-tabs:nth-child(3)').on('focusout',function(){
        $(this).css({
            'background-color':'#edf2f4',
            'border-top': '0px'
        })
    })

    $('.content-4 .nav-tabs:nth-child(4)').on('focusin',function(){
        $(this).css({
            'background-color': '#ffffff',
            'border-top': '3px solid #e30022'
        })
    });

    $('.content-4 .nav-tabs:nth-child(4)').on('focusout',function(){
        $(this).css({
            'background-color':'#edf2f4',
            'border-top': '0px'
        })
    })


    $(window).scroll(function(){
        if($(document).scrollTop()>450) {
            $('nav').addClass('fixed-top').addClass('sticky');
        }else {
            $('nav').removeClass('fixed-top').removeClass('sticky');
        }
    })




})

