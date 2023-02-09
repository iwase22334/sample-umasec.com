const _draw_chart = (data) => {
    var ctx = document.getElementById('myChart').getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: data
        },

        options: {
            maintainAspectRatio: false,

            legend: {
                display: false
            },

            plugins: {
                colorschemes: {
                    scheme: 'tableau.HueCircle19'
                }
            },
        }
    });
}

function draw_chart() {
    if (this.readyState !== XMLHttpRequest.DONE || this.status != 200) {return};

    // convert json into drawing data fomat 
    const time_data = JSON.parse(this.responseText);

    var data = []
    for (index in time_data['dataset']) {
        data.push({
                    label: time_data['dataset'][index]['name'],
                    data: time_data['dataset'][index]['pdf'],
                    showLine: true,
                    pointRadius: 0,
                    borderWidth: 1
                });
    }

    // draw chart
    _draw_chart(data)
}

