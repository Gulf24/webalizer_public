$('document').ready(function() {


    
    let bar_chart;
    
    displayBarChart();
    
    function displayBarChart(array_data) {
        
        
        let countries_array = ['China', 'United States', 'Philippines', 'Russia', 'Hong Kong'];
        
        // let country_data_array = [130, 410, 305, 260, 120, 320, 405, 56, 104, 207, 162, 97, 23, 103, 89];
        let tempo_data_arr = [130, 410, 305, 260, 120];

        
        if(bar_chart) {
            
            bar_chart.destroy();
        }
        
        let ctx = $("#country_bar_chart");
        
        let country_data_array = tempo_data_arr;
        
        bar_chart = new Chart(ctx, {
            
            type: 'bar',
            
            data: {
                
                labels: countries_array,
                datasets: [
                    {
                        label: 'Occurence',
                        data: country_data_array,
                        
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.3)',
                            '#9966ff' 
                        ],
                        
                        borderColor:[
                            "#9966ff",
                            'rgba(75, 192, 192, 1)'
                        ],
                        
                    }
                ]
            },
            
            
            options : {
                
                layout: {
                    padding: {
                        top: 50, // Adds padding to the top of the chart
                    }
                },
                
                scales: {
                    y: {
                        beginAtZero: true, // Y-axis starts at zero
                        grid: {
                            color: 'rgba(0, 128, 128, 0.1)', // Color of the horizontal grid lines
                            lineWidth: 1 // Thickness of the horizontal grid lines
                        }
                    },
                    
                    x : {
                        grid: {
                            color: 'rgba(0, 128, 128, 0.1)', // Color of the horizontal grid lines
                            lineWidth: 1 // Thickness of the horizontal grid lines
                        },
                        
                        
                        /*
                        ticks: {
                        color: 'white', // Color of the labels below the bars
                        }
                        */
                    }
                },
                
                
                responsive: true,
                
                plugins: {
                    
                    legend : {
                        display : false
                    },
                    
                    datalabels: {
                        anchor: 'end',  // Position the label at the top of the bar
                        align: 'end',   // Align the label above the bar
                        color: 'wheat',  // Text color for the labels
                        offset: 2,
                        font: {
                            weight: 'bold', // Make the label bold
                            size: 10
                        },
                        formatter: function(value) {
                            return value;
                        }
                    }
                }
            },
            plugins: [ChartDataLabels]
            
        });
        
    }
    
});