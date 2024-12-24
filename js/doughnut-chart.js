$('document').ready(function() {
    
    
    let databases = ['Landing Page', 'Portfolio', 'Box Office'];
    let hits = [100, 200, 300];
    let colors = ['#926bfa', '#ff9e2c' , '#2bbf7d'];
    
    new Chart("summary-report-pie", {
        type: "doughnut",
        data: {
            labels: databases,
            datasets: [{
                backgroundColor: colors,
                data: hits
            }]
        },
        options: {
            title: {
                display: true,
                text: "World Wide Wine Production 2018"
            },

            plugins: {
                    
                legend : {
                    display : false
                },
                                
            }
        }
    });
    
})