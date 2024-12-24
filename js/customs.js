$('document').ready(function() {
    
    $("#expand-sidebar").click(function() {
        
        $('.sidebar').animate({ width: '250px' }, 250);
        $('.content').animate({ marginLeft: '250px' }, 250, function() {
            

            // Display username and user profile image
            $(".user-profile-img").show();
            $(".user-profile-txt").show();

            // Show Sidebar Body
            $("#expanded-sidebar-tools").removeClass('d-none');
            $("#sidebar-bottom-text").show();
            
        });
        
        
        // hide this button
        $(this).hide();
        
        // show shrink button
        $("#shrink-sidebar").show();

        $("#shrinked-sidebar-tools").addClass('d-none');
        $("#shrink-sidebar-note").addClass('d-none');
        
        
    });
    
    
    
    $("#shrink-sidebar").click(function() {
        
        $('.sidebar').animate({ width: '80px' }, 250);
        $('.content').animate({ marginLeft: '80px' }, 250);
        
        // hide this button
        $(this).hide();
        $("#expand-sidebar").show();
        

        // Hide username and user profile image
        $(".user-profile-img").hide();
        $(".user-profile-txt").hide();

        $("#expanded-sidebar-tools").addClass('d-none');
        $("#shrinked-sidebar-tools").removeClass('d-none');

        // remove bottom text in sidebar
        $("#sidebar-bottom-text").hide();

        $("#shrink-sidebar-note").removeClass('d-none');
    });

    // $("#shrink-sidebar").click();
})