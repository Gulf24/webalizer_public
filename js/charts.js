$('document').ready(function() {

    let visitor_line_chart = $("#visitor_line_chart");

    let label_array = ['Initial', 'Week 1', 'Week 2', 'Week 3', 'Week 4'];
    let web_hits_data = [0, 160, 52, 208, 340];

    let data_2 = [0, 208, 152, 58, 140];
    let data_3 = [0, 502, 360, 805, 305];

    chart_data = new Chart(visitor_line_chart, {
            
        type: 'line',
        
        data : {
            
            labels: label_array,
            
            datasets: [
                

                // First Line
                {
                    label: "Landing Page",
                    data: web_hits_data,
                    fill: true,
                    backgroundColor: "rgba(75, 192, 192, 0.1)",
                    borderColor: '#d059cf',
                    tension: 0,
                    
                    pointBackgroundColor: '#36bcba', 
                    pointBorderColor: 'gray', 
                    pointRadius: 3,
                    
                    datalabels: {
                        display: true,
                        align: "top",
                        anchor: "end",
                        
                        
                        /*
                        formatter: (value) => value + " Hits"
                        */
                        
                        
                        formatter: function(value, context) {
                            
                            return "";
                                                        
                        }
                    }
                },



                // Second Line
                {
                    label: "Portfolio",
                    data: data_2,
                    fill: true,
                    backgroundColor: "rgba(75, 192, 192, 0.1)",
                    borderColor: 'red',
                    tension: 0.1,
                    
                    pointBackgroundColor: '#36bcba', 
                    pointBorderColor: 'gray', 
                    pointRadius: 3,
                    
                    datalabels: {
                        display: true,
                        align: "top",
                        anchor: "end",
                        
                        
                        /*
                        formatter: (value) => value + " Hits"
                        */
                        
                        
                        formatter: function(value, context) {                            
                            return "";                                                        
                        }
                    }
                },



                // Third Line

                {
                    label: "Box Office",
                    data: data_3,
                    fill: true,
                    backgroundColor: "rgba(75, 192, 192, 0.1)",
                    borderColor: '#966dff',
                    tension: 0.1,
                    
                    pointBackgroundColor: '#36bcba', 
                    pointBorderColor: 'gray', 
                    pointRadius: 3,
                    
                    datalabels: {
                        display: true,
                        align: "top",
                        anchor: "end",
                        
                        
                        /*
                        formatter: (value) => value + " Hits"
                        */
                        
                        
                        formatter: function(value, context) {                            
                            return "";                                                        
                        }
                    }
                }
                
            ]
            
        },
        
        
        // options
        options : {
            
            layout: {
                padding: {
                    top: 30, // Adds padding to the top of the chart
                    // left: 30,
                    // right: 20
                }
            },
            
            plugins: {
                
                legend: {
                    display: false 
                },
                
                datalabels: {
                    color: 'wheat', 
                    offset: 5,
                    font: {
                        weight: 'bold',
                        size: 12
                    }
                }
            },
            
            
            
            responsive: true,
            
            scales: {
                y: {
                    beginAtZero: true,
                    min: 0,
                    grid: {
                        color: 'rgba(0, 128, 128, 0.1)', 
                        lineWidth: 1 
                    }
                },
                
                x: {
                    grid: {
                        color: 'rgba(0, 128, 128, 0.1)', 
                        lineWidth: 3 
                    },
                    
                    
                    ticks: {
                        
                        color: function(context) {                                
                            
                            return '#ffffff';
                        },                        
                    }
                }
                
            }
        },
        
        plugins: [ChartDataLabels]
                        
    });

})