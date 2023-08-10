
    var context = document
        .getElementById('doughnut')
        .getContext('2d');
    var myChart = new Chart(context, {
        type: 'doughnut', // 차트의 형태
        data: { // 차트에 들어갈 데이터
            datasets: [
                { //데이터
                    cutout: "77%", // 도넛 그래프 굵기
                    label: '근무시간', //차트 제목
                    fill: false, // line 형태일 때, 선 안쪽을 채우는지 안채우는지
                    data: [
                        52,20,8,10,8,2 //x축 label에 대응되는 데이터 값
                    ],
                    backgroundColor: [
                        //색상
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        //경계선 색상
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1 //경계선 굵기
                }
            ],
            labels: [
                //x 축
                '근무중','출근전','출장','외근','휴가','기타'
            ],
        },
        options: {

            cutoutPercentage: 150,
            rotaion: Math.PI,
            animation:{
                animateScale:false,
                onComplete: function(){
                    var width = this.chart.width,
                    height = this.chart.height;

                    var fontSize = (height / 200).toFixed(2);
                    this.chart.ctx.font = fontSize + "em Verdana";
                    this.chart.ctx.textBaseline = "middle";

                    var text = "출근율",
                    textX = Math.round((width = this.chart.ctx.measureText(text).width)/2),
                    textY = height /2;
                    this.chart.ctx.fillText("출근율" + doughnutData.datasets[0].data[1] + "%", textX, textY);
                }
            },
            responsive: false,

          plugins:{ 
        
                legend: {
                    display: true, // 범례 유무
                    position: 'right', // 범례위치
                    align: 'center', // 범례 정렬
                },
            },
            
          indexAxis: 'y' // 가로 정렬
  
        }
    });



    

    document.getElementById("myChart").onclick = function(evt) {
        var activePoints = myChart.getElementsAtEvent(evt);

        if(activePoints.length > 0)
        {
            var clickedElementindex = activePoints[0]["_index"];

            var label = myChart.data.labels[clickedElementindex];
            console.log("label : " + label);

            var value = myChart.data.datasets[0].data[clickedElementindex];
            console.log("value : " + value);
        }
    }


    var context3 = document
        .getElementById('bar1')
        .getContext('2d');
    var myChart3 = new Chart(context3, {
        type: 'bar', // 차트의 형태
        data: { // 차트에 들어갈 데이터
            labels: [
                //x 축
                '동준','동준','재혁','정훈','가람'
            ],
            datasets: [
                { //데이터
                    label: '근무시간', //차트 제목
                    fill: false, // line 형태일 때, 선 안쪽을 채우는지 안채우는지
                    data: [
                        183,185,180,182,185 //x축 label에 대응되는 데이터 값
                    ],
                    backgroundColor: [
                        //색상
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        //경계선 색상
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1 //경계선 굵기
                }
            ]
        },
        options: { scales:{xAxes:{display:false},},maxBarThickness: 10,
            responsive: false,
         
          indexAxis: 'y',
  
        }
    });

    

    document.getElementById("myChart3").onclick = function(evt) {
        var activePoints = myChart.getElementsAtEvent(evt);

        if(activePoints.length > 0)
        {
            var clickedElementindex = activePoints[0]["_index"];

            var label = myChart.data.labels[clickedElementindex];
            console.log("label : " + label);

            var value = myChart.data.datasets[0].data[clickedElementindex];
            console.log("value : " + value);
        }
    }


    var context4 = document
        .getElementById('bar3')
        .getContext('2d');
    var myChart4 = new Chart(context4, {
        type: 'bar', // 차트의 형태
        data: { // 차트에 들어갈 데이터
            labels: [
                //x 축
                '동준','동준','동준','정훈','가람'
            ],
            datasets: [
                { //데이터
                    label: '근무시간', //차트 제목
                    fill: false, // line 형태일 때, 선 안쪽을 채우는지 안채우는지
                    data: [
                        183,185,180,182,185 //x축 label에 대응되는 데이터 값
                    ],
                    backgroundColor: [
                        //색상
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        //경계선 색상
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1 //경계선 굵기
                }
            ]
        },
        options: { scales:{xAxes:{display:false},},maxBarThickness: 10,
            responsive: false,
         
          indexAxis: 'y',
  
        }
    });

    

    document.getElementById("myChart").onclick = function(evt) {
        var activePoints = myChart.getElementsAtEvent(evt);

        if(activePoints.length > 0)
        {
            var clickedElementindex = activePoints[0]["_index"];

            var label = myChart.data.labels[clickedElementindex];
            console.log("label : " + label);

            var value = myChart.data.datasets[0].data[clickedElementindex];
            console.log("value : " + value);
        }
    }

    var context5 = document
        .getElementById('projectBar')
        .getContext('2d');
    var myChart5 = new Chart(context5, {
        type: 'bar', // 차트의 형태
        data: { // 차트에 들어갈 데이터
            labels: [
                //x 축
                '팀명선정','프로젝트명 선정','아이디어 기획','요구사항 정의서','와이어프레임'
            ],
            datasets: [
                { //데이터
                    label: '업무진행도(100% = 10)', //차트 제목
                    fill: false, // line 형태일 때, 선 안쪽을 채우는지 안채우는지
                    data: [
                        10,10,7,10,7,5,5//x축 label에 대응되는 데이터 값
                    ],
                    backgroundColor: [
                        //색상
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                    ],
                    borderColor: [
                        //경계선 색상
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        ],
                        borderWidth: 1 //경계선 굵기
                    },  
                    {
                        type: 'line',
                        label: 'Line Dataset',
                        data: [10,10,7,10,7,5,5]
                    }
                ],
            
            },
        options: { scales:{yAxes:{display:false},},maxBarThickness: 30,
            
            responsive: false,

          plugins:{
        
            legend: {
            display: false,
            position: 'bottom',
            align: 'end',
        },
        }

        }
    });

  

  document.getElementById("myProject").onclick = function(evt) {
      var activePoints = myChart.getElementsAtEvent(evt);

      if(activePoints.length > 0)
      {
          var clickedElementindex = activePoints[0]["_index"];

          var label = myChart.data.labels[clickedElementindex];
          console.log("label : " + label);

          var value = myChart.data.datasets[0].data[clickedElementindex];
          console.log("value : " + value);
      }
  }
