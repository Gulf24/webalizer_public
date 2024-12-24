$('document').ready(function() {
    
    
    let lottie_path = "../webalizer/lotties/moving-earth-greenish.json";        
    
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    
    function randomLottiePath() {
        let random_color_code = getRandomInt(1, 3);
        
        switch(random_color_code) {
            
            case 1:
            lottie_path = "lotties/moving-earth-greenish.json";
            break;
            
            case 2:
            lottie_path = "lotties/moving-earth-greenish.json";
            break;
            
            case 3:
            lottie_path = "lotties/moving-earth-greenish.json";        
            break;
        }
        
        
    }
    
    
    
    
    randomLottiePath();
    
    
    var animation_1 = lottie.loadAnimation({
        container: $("#lottie-animation-xl")[0], // HTML container element
        renderer: 'svg', // Render as SVG
        loop: true,      // Animation should loop
        autoplay: true,  // Start playing automatically
        path: lottie_path // Path to your Lottie JSON file
        // moving-earth-greenish.json
        
    });
    
    
    var animation_2 = lottie.loadAnimation({
        container: $("#lottie-animation-sm")[0], // HTML container element
        renderer: 'svg', // Render as SVG
        loop: true,      // Animation should loop
        autoplay: true,  // Start playing automatically
        path: lottie_path // Path to your Lottie JSON file
        // moving-earth-greenish.json
        
    });
    
    var animation_3 = lottie.loadAnimation({
        container: $("#lottie-animation-lg")[0], // HTML container element
        renderer: 'svg', // Render as SVG
        loop: true,      // Animation should loop
        autoplay: true,  // Start playing automatically
        path: lottie_path // Path to your Lottie JSON file
        // moving-earth-greenish.json
        
    });
    
    
    // For Lottie Animaton - Pause when clicked, Play when clicked again
    function pauseAndPlaylottie(element, lottie) {
        
        element.click(function() {
            let lottie_status = $(this).attr('data-lottie-status');
            
            if(lottie_status == 'play') {
                lottie.pause();
                $(this).attr('data-lottie-status', 'pause');
                
            } else if(lottie_status == 'pause') {
                
                lottie.play();
                $(this).attr('data-lottie-status', 'play');
            }
        });

    }

    // apply to both large and small lotties
    pauseAndPlaylottie($("#lottie-animation-xl"), animation_1);
    pauseAndPlaylottie($("#lottie-animation-sm"), animation_2);
    pauseAndPlaylottie($("#lottie-animation-lg"), animation_3);
    
    
})