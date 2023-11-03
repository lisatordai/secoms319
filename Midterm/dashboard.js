(() => {
    'use strict'
  
    // Graphs
    const ctx = document.getElementById('myChart')
    // eslint-disable-next-line no-unused-vars
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          '12AM',
          '4AM',
          '8AM',
          '12PM',
          '4PM',
          '8PM',
          '11PM'
        ],
        datasets: [{
          data: [
            50,
            60,
            68,
            78,
            72,
            67,
            61
          ],
          lineTension: 0,
          backgroundColor: 'transparent',
          borderColor: '#007bff',
          borderWidth: 4,
          pointBackgroundColor: '#007bff'
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            boxPadding: 3
          }
        }
      }
    })
  })()
  