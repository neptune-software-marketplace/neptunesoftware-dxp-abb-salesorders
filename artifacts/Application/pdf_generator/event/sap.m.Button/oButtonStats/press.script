oDialog.open();


let counterA = 0;
let counterB = 0;
let counterC = 0;

for (let i = 0; i < RESULT.length; i++) {

    console.log(RESULT[i])
    
  if (RESULT[i].VBUK.LFSTK === "A")
  counterA++;

  if (RESULT[i].VBUK.LFSTK === "B")
  counterB++;

  if (RESULT[i].VBUK.LFSTK === "C")
  counterC++;

}
console.log(counterA); 
console.log(counterB); 
console.log(counterC);




function Pie() {

    Highcharts.chart('container1', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: RESULT.length + " Sales orders"
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Orders',
            colorByPoint: true,
            data: [{
                name: counterB + ' Pending',
                y: counterB,
                sliced: true,
                selected: true
            }, {
                name: counterA + ' Approved',
                y: counterA
            }, {
                name: counterC + ' Rejected',
                y: counterC
            }]
        }]
    });
}

Pie();

