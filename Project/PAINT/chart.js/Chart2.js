
var context = document
.getElementById('bar1')
.getContext('2d');
var myChart = new Chart(context, {
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
