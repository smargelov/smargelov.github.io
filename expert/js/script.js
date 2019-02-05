$(document).ready(function () {
        $('#search-button').click(function (e) {
            $(this).toggleClass('active');
            $('#searchform').toggle();
                
        });

        // $('body').click(function() {
        //     var link = $('#search-button');
        //     if (link.hasClass('active')) {
        //         link.click();
        //     }
        // })

        $('.tablet-right, .mobile-burg').click(function (e) {
            
            $('.mobile-cat').toggle();
                
        });

        
        
        
        
    });