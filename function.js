$(document).ready(function(){
    var $col = $(".collapse")
   $($col).collapse({
       toggle:false      
   });
    
    // animowane elementy
    
     var $window = $(window);
    
    
    $window.on('scroll resize' , check_if_in_view); // wywołaj funkcję check_if_in_view dla każdorazowego scrolla i zmiany rozmiru okna
    var $animation_elements = $(".animation-element");
    function check_if_in_view(){
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
        
        $.each($animation_elements , function(){
           
            var $element = $(this); // wykonaj zadanie dla konkretnego elementu.
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var elemnet_bottom_positon = (element_top_position + element_height);
            
            // sprawdź czy dany kontener znajduje się w polu widzenia
            if((elemnet_bottom_positon >= window_top_position) && (element_top_position <= window_bottom_position)){
                $element.addClass('in-view');
            }
        });            
    }
    //navigation
    if( $('.cd-stretchy-nav').length > 0 ) {
		var stretchyNavs = $('.cd-stretchy-nav');
		
		stretchyNavs.each(function(){
			var stretchyNav = $(this),
				stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');
			
			stretchyNavTrigger.on('click', function(event){
				event.preventDefault();
				stretchyNav.toggleClass('nav-is-visible');
			});
		});

		$(document).on('click', function(event){
			( !$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span') ) && stretchyNavs.removeClass('nav-is-visible');
		});
	} 
    
    
});