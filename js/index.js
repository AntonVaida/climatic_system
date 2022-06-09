function getPlace(vol){
    let ounput = document.querySelector(`#volume`);
    ounput.value = vol;
    ounput.style.left = vol * 3.3333 + `%`;
    if(ounput.value > 4) ounput.style.left = vol * 3.3333 - 2 + `%`;
    if(ounput.value > 8) ounput.style.left = vol * 3.3333 - 3 + `%`;
    if(ounput.value > 12) ounput.style.left = vol * 3.3333 - 4 + `%`;
    if(ounput.value > 16) ounput.style.left = vol * 3.3333 - 5 + `%`;
    if(ounput.value > 20) ounput.style.left = vol * 3.3333 - 6 + `%`;
    if(ounput.value > 24) ounput.style.left = vol * 3.3333 - 7 + `%`;
    if(ounput.value > 24) ounput.style.left = vol * 3.3333 - 8 + `%`;
}
function getPlaceSecond(voll){
    let ounput = document.querySelector(`#volume_second`);
    ounput.value = voll;
    ounput.style.left = voll + `%`;
    if(ounput.value > 12) ounput.style.left = voll - 2 + `%`;
    if(ounput.value > 24) ounput.style.left = voll - 3 + `%`;
    if(ounput.value > 36) ounput.style.left = voll - 4 + `%`;
    if(ounput.value > 48) ounput.style.left = voll - 5 + `%`;
    if(ounput.value > 60) ounput.style.left = voll - 6 + `%`;
    if(ounput.value > 72) ounput.style.left = voll - 7 + `%`;
    if(ounput.value > 84) ounput.style.left = voll - 8 + `%`;
    if(ounput.value > 96) ounput.style.left = voll - 10 + `%`;
}

const labels = [
    'one',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'TEMPERATURE',
      data: [15, 18, 15, 15, 17, 15, 18, 21, 19, 20, 19, 18, 17, 15, 19, 20],
    tension: 0.7,
      backgroundColor: `red`,
      fill: true,
    }
]
  };

  const config = {
    type: 'line',
    data: data,
    options: {
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 14,
                        family: `inter`,
                        weight: 700,
                    }
                }
            }
        }
    }
};

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

  const dataSecond = {
    labels: labels,
    datasets: [{
      label: 'HUMIDITY',
      data: [60, 65, 63, 60, 53, 51, 65, 62, 61, 54, 75, 56, 61, 71, 54, 43],
      tension: 0.7,
      backgroundColor: `green`,
      fill: true,
    }]
  };
  const configSecond = {
    type: 'line',
    data: dataSecond,
    options: {
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 14,
                        family: `inter`,
                        weight: 700,
                    }
                }
            }
        }
    }
  };
  const myChartSecond = new Chart(
    document.getElementById('Petro'),
    configSecond
  );