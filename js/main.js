$(window).on("load",function(){
    // home section slideshow 
    var slideIndex = $(".slide.active").index();
    const slideLen =$(".slide").length;
    
    function slideshow(){
        $(".slide").removeClass("active").eq(slideIndex)
        .addClass("active");
        if(slideIndex ==slideLen-1){
            slideIndex= 0;
        }
        else{
            slideIndex++;
        }
        setTimeout(slideshow,5000);
      
    }
    slideshow();
    

})

$(document).ready(function(){

    // nav toggle

    $(".hambuger-btn").click(function(){
        $(".header .nav").slideToggle();

    })
    $(".header .nav a").click(function(){
        if($(window).width() < 768){
         $(".header .nav").slideToggle();



        }

    })

    // fixed header 
    $(Window).scroll(function(){
        if($(this).scrollTop() > 100){
            $(".header").addClass("fixed");

        }
        else{
            $(".header").removeClass("fixed");
        }

    })

    //fixed  ends

        $.scrollIt();


    // people filter
    peopleFilter($(".filter-btn.active").attr("data-target"))
    $(".filter-btn").click(function(){

        peopleFilter($(this).attr("data-target"))
    })
    function peopleFilter(target){
       console.log(target)
      $(".filter-btn").removeClass("active");
      $(".filter-btn[data-target='"+target+"']").addClass("active");
      $(".people-item").hide();
      $(".people-item[data-category='"+target+"']").fadeIn();
    }
    //gallery popup //

    const wheight = $(Window).height();
    console.log(wheight)
    $(".gallery-popup .gp-img").css("max-height",wheight+ "px");

    var  itemIndex  = 0;
    const totalGalleryItems =  $(".gallery-item").length;
    
    $(".gallery-item").click(function(){
        itemIndex = $(this).index();
       // console.log(itemIndex)
       $(".gallery-popup").addClass("open");
       $(".gallery-popup .gp-img").hide();
       gpSlideShow();
        
    })
        //carousel
    $(" .gp-controls .next").click(function(){
        if(itemIndex ==  totalGalleryItems-1){
            itemIndex = 0;
        }
        else{
            itemIndex++;
        }
        $(".gallery-popup .gp-img").fadeOut(function(){
            gpSlideShow();

        })
      //  console.log(itemIndex)

    })

    $(" .gp-controls .prev").click(function(){
        if(itemIndex ==0){
         itemIndex = totalGalleryItems-1;
        }
        else{
            itemIndex--;
        }
        $(".gallery-popup .gp-img").fadeOut(function(){
            gpSlideShow();

        })
      //console.log(itemIndex)

    })

    function gpSlideShow(){
        const imgSrc = $(".gallery-item").eq(itemIndex).find("img").attr("data-large");
      //  console.log(imgSrc)
      $(".gallery-popup .gp-img").fadeIn().attr("Src",imgSrc);
      $(".gp-counter").text((itemIndex+1) +"/"+   totalGalleryItems);
    }
    // gallery open
    $(".gp-close").click(function(){
        $(".gallery-popup").removeClass("open");
    })

    // hide gallery popup with clickout gp container
    $(".gallery-popup").click(function(event){
        if($(event.target).hasClass("open")){
             console.log("true")
            $(".gallery-popup").removeClass("open");

        }
     

    })
})