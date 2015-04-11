$(document).ready(function(){
    
     document.addEventListener('deviceready', function () {
        
         // done
        $(".search").click(function(){
            $(".search-bar").slideToggle("slow");
        });

        $(".list-block").click(function(){
            $(this).parent().find(".list-content").slideToggle("slow");
            //$(this).slideToggle(".list-content");
        });


        $(".forward-icon").click(function(){
            $(".list-slider").css("left", "-100%");
        });


        $(".back-icon").click(function(){
            $(".list-slider").css("left", "0");
        });
        
         // done
        $("#register").click(function(){

            $("#f1_card").css({"transform": "rotateY(180deg)", });

        });

         // done
         $("#registerBack").click(function(){

            $("#f1_card").css({"transform": "rotateY(0deg)", });

        });
         // done
         
        /*$(".hamburger").on("click",function(){
            if($("#menu-bar").css("bottom") == "-80px" ){
                $("#menu-bar").css("bottom", "0");
                $(".hamburger").css("margin-top", "-160px");
            }else{
                $("#menu-bar").css("bottom", "-80px");
                $(".hamburger").css("margin-top", "0px"); 
            }

        });*/
         
        $('#add-plus').on('click', function(event){
            event.preventDefault();
            $('#overlay')
                .fadeIn()
                .find('.modal')
                .fadeIn();
        });

        $('.close').on('click', function(event){
            event.preventDefault();
            $('#overlay')
                .fadeOut()
                .find('.modal')
                .fadeOut();
        });
         
    }, false);

});