var cth = document.getElementById('heigth');
var ctx = document.getElementById('myChart');

var ctK = document.getElementById('middleK');
var ctE = document.getElementById('middleE');
var ctN = document.getElementById('middleN');
var ctP = document.getElementById('middleP');
var ctU = document.getElementById('middleU');

var allYears = document.getElementById('years');


cth.style.backgroundColor = 'rgba(255,255,255,0.8)';
ctx.style.backgroundColor = 'rgba(255,255,255,0.8)';

ctK.style.backgroundColor = 'rgba(255,255,255,0.8)';
ctE.style.backgroundColor = 'rgba(255,255,255,0.8)';
ctN.style.backgroundColor = 'rgba(255,255,255,0.8)';
ctP.style.backgroundColor = 'rgba(255,255,255,0.8)';
ctU.style.backgroundColor = 'rgba(255,255,255,0.8)';
allYears.style.backgroundColor = 'rgba(255,255,255,0.8)';

Chart.defaults.global.elements.point.pointStyle = 'rectRot';
Chart.defaults.global.elements.point.radius = 5;

var chart = new Chart(cth, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: years,
        datasets: [{
            label: 'Усть-Озёрное',
            //backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: data1.datas,
            trendlineLinear: {
                style: 'rgb(105, 0, 146)',
                lineStyle: "solid",
                width: 3
            }
        },
		{
			label: 'Эссо',
            //backgroundColor: 'rgb(0, 191, 255)',
            borderColor: 'rgb(0, 191, 255)',
            data: data2.datas,
            trendlineLinear: {
                style: 'rgba(105, 0, 146, 0.774)',
                lineStyle: "solid",
                width: 3
            }
		},
		{
			label: 'Ключи',
            //backgroundColor: 'rgb(60, 255, 0)',
            borderColor: 'rgb(60, 255, 0)',
            data: data3.datas,
            trendlineLinear: {
                style: 'rgb(105, 0, 146)',
                lineStyle: "solid",
                width: 3
            }
		},
		{
			label: 'Начики',
            //backgroundColor: 'rgb(0, 60, 255)',
            borderColor: 'rgb(0, 60, 255)',
            data: data5.datas,
            trendlineLinear: {
                style: 'rgb(105, 0, 146)',
                lineStyle: "solid",
                width: 3
            }
		},
		{
			label: 'Петропавловск-Камчатский',
            //backgroundColor: 'rgb(212, 0, 255)',
            borderColor: 'rgb(212, 0, 255)',
            data: data6.datas,
            trendlineLinear: {
                style: 'rgb(105, 0, 146)',
                lineStyle: "solid",
                width: 3
            }
		},
		
	]
    },

    // Configuration options go here
    options: {
        title: {
            display: true,
            position: 'top',
            fontSize: 20,
            text: 'Максимальная толщина снежного покрова (за период с 1980 по 2019)'
        },
        tooltips: {
            mode: 'index'
        },
        scales: {
            yAxes: [{
              ticks:{
                fontColor : "#000",
                fontSize : 14
              },
              scaleLabel: {
                display: true,
                labelString: 'Высота снежного покрова'
                },
              gridLines:{
                color: "#000",
                zeroLineColor :"#000",
              }
            }],
            xAxes: [{
              ticks:{
                fontColor : "#000",
                fontSize : 14
              },
              scaleLabel: {
                display: true,
                labelString: 'Год'
                },
              gridLines:{
                color: "#fff",
              }
            }]
          }
	}
});


var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: years,
        datasets: [{
            label: 'Усть-Озёрное',
            //backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: data1.days,
            trendlineLinear: {
                style: 'rgb(105, 0, 146)',
                lineStyle: "solid",
                width: 3
            }
        },
		{
			label: 'Эссо',
            //backgroundColor: 'rgb(0, 191, 255)',
            borderColor: 'rgb(0, 191, 255)',
            data: data2.days,
            trendlineLinear: {
                style: 'rgb(105, 0, 146)',
                lineStyle: "solid",
                width: 3
            }
		},
		{
			label: 'Ключи',
            //backgroundColor: 'rgb(60, 255, 0)',
            borderColor: 'rgb(60, 255, 0)',
            data: data3.days,
            trendlineLinear: {
                style: 'rgb(105, 0, 146)',
                lineStyle: "solid",
                width: 3
            }
		},
		{
			label: 'Начики',
            //backgroundColor: 'rgb(0, 60, 255)',
            borderColor: 'rgb(0, 60, 255)',
            data: data5.days,
            trendlineLinear: {
                style: 'rgb(105, 0, 146)',
                lineStyle: "solid",
                width: 3
            }
		},
		{
			label: 'Петропавловск-Камчатский',
            //backgroundColor: 'rgb(212, 0, 255)',
            borderColor: 'rgb(212, 0, 255)',
            data: data6.days,
            trendlineLinear: {
                style: 'rgb(105, 0, 146)',
                lineStyle: "solid",
                width: 3
            }
		},
		
	]
    },

    // Configuration options go here
    options: {
		title: {
            display: true,
            position: 'top',
            fontSize: 20,
            text: 'Изменение количества дней с устойчивым снежным покровом (за период с 1980 по 2019)'
        },
        tooltips: {
            mode: 'index'
        },
        scales: {
            yAxes: [{
              ticks:{
                fontColor : "#000",
                fontSize : 14
              },
              scaleLabel: {
                display: true,
                labelString: 'Количество дней'
                },
              gridLines:{
                color: "#000",
                zeroLineColor :"#000",
              }
            }],
            xAxes: [{
              ticks:{
                fontColor : "#000",
                fontSize : 14
              },
              scaleLabel: {
                display: true,
                labelString: 'Год'
                },
              gridLines:{
                color: "#fff",
              }
            }]
          }
	}
});


var chartK = new Chart(ctK, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: years,
        datasets: [{
            label: 'Зима',
            backgroundColor : 'rgba(0,0,0,0.2)',
            borderColor: 'rgba(229, 255, 0, 0.5)',
            data: middleK.winter,
            trendlineLinear: {
                style: 'rgba(105, 0, 146, 0.774)',
                lineStyle: "solid",
                width: 2
            }
        },
		{
			label: 'Весна',
			backgroundColor : 'rgba(0,0,0,0.2)',
            borderColor: 'rgba(0, 191, 255, 0.5)',
            data: middleK.spring,
            trendlineLinear: {
                style: 'rgba(105, 0, 146, 0.774)',
                lineStyle: "solid",
                width: 2
            }
		},
		{
			label: 'Лето',
			backgroundColor : 'rgba(0,0,0,0.2)',
            borderColor: 'rgba(60, 255, 0, 0.5)',
            data: middleK.summer,
            trendlineLinear: {
                style: 'rgba(105, 0, 146, 0.774)',
                lineStyle: "solid",
                width: 2
            }
		},
		{
			label: 'Год',
			backgroundColor : 'rgba(0,0,0,0.2)',
            borderColor: 'rgb(0, 0, 255)',
            data: middleK.whole,
            trendlineLinear: {
                style: 'rgb(105, 0, 146)',
                lineStyle: "solid",
                width: 3
            }
		}
	]
    },

    // Configuration options go here
    options: {
        title: {
            display: true,
            position: 'top',
            fontSize: 20,
            text: 'Изменение сезонных температур (Ключи)'
        },
        scales: {
            yAxes: [{
              ticks:{
                fontColor : "#000",
                fontSize : 14
              },
              scaleLabel: {
                display: true,
                labelString: 'Температура'
                },
              gridLines:{
                color: "#000",
                zeroLineColor :"#000",
              }
            }],
            xAxes: [{
              ticks:{
                fontColor : "#000",
                fontSize : 14
              },
              scaleLabel: {
                display: true,
                labelString: 'Год'
                },
              gridLines:{
                color: "#fff",
              }
            }]
          }
	}
});





var chartE = new Chart(ctE, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: years,
        datasets: [{
            label: 'Зима',
            backgroundColor : 'rgba(0,0,0,0.2)',
            borderColor: 'rgba(229, 255, 0, 0.5)',
            data: middleE.winter,
            trendlineLinear: {
                style: 'rgba(105, 0, 146, 0.774)',
                lineStyle: "solid",
                width: 2
            }
        },
		{
			label: 'Весна',
			backgroundColor : 'rgba(0,0,0,0.2)',
            borderColor: 'rgba(0, 191, 255, 0.5)',
            data: middleE.spring,
            trendlineLinear: {
                style: 'rgba(105, 0, 146, 0.774)',
                lineStyle: "solid",
                width: 2
            }
		},
		{
			label: 'Лето',
			backgroundColor : 'rgba(0,0,0,0.2)',
            borderColor: 'rgba(60, 255, 0, 0.5)',
            data: middleE.summer,
            trendlineLinear: {
                style: 'rgba(105, 0, 146, 0.774)',
                lineStyle: "solid",
                width: 2
            }
		},
		{
			label: 'Год',
			backgroundColor : 'rgba(0,0,0,0.2)',
            borderColor: 'rgb(0, 0, 255)',
            data: middleE.whole,
            trendlineLinear: {
                style: 'rgb(105, 0, 146)',
                lineStyle: "solid",
                width: 3
            }
		}
	]
    },

    // Configuration options go here
    options: {
        title : {
            display: true,
            position: 'top',
            fontSize: 20,
            text: 'Изменение сезонных температур (Эссо)'
        },
        scales: {
            yAxes: [{
              ticks:{
                fontColor : "#000",
                fontSize : 14
              },
               scaleLabel: {
                display: true,
                labelString: 'Температура'
                },
              gridLines:{
                color: "#000",
                zeroLineColor :"#000",
              }
            }],
            xAxes: [{
              ticks:{
                fontColor : "#000",
                fontSize : 14
              },
              scaleLabel: {
                display: true,
                labelString: 'Год'
                },
              gridLines:{
                color: "#fff",
              }
            }]
          }
	}
});



var chartN = new Chart(ctN, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: years,
        datasets: [{
            label: 'Зима',
            backgroundColor : 'rgba(0,0,0,0.2)',
            borderColor: 'rgba(229, 255, 0, 0.5)',
            data: middleN.winter,
            trendlineLinear: {
                style: 'rgba(105, 0, 146, 0.774)',
                lineStyle: "solid",
                width: 2
            }
        },
		{
			label: 'Весна',
			backgroundColor : 'rgba(0,0,0,0.2)',
            borderColor: 'rgba(0, 191, 255, 0.5)',
            data: middleN.spring,
            trendlineLinear: {
                style: 'rgba(105, 0, 146, 0.774)',
                lineStyle: "solid",
                width: 2
            }
		},
		{
			label: 'Лето',
			backgroundColor : 'rgba(0,0,0,0.2)',
            borderColor: 'rgba(60, 255, 0, 0.5)',
            data: middleN.summer,
            trendlineLinear: {
                style: 'rgba(105, 0, 146, 0.774)',
                lineStyle: "solid",
                width: 2
            }
		},
		{
			label: 'Год',
			backgroundColor : 'rgba(0,0,0,0.2)',
            borderColor: 'rgb(0, 0, 255)',
            data: middleN.whole,
            trendlineLinear: {
                style: 'rgb(105, 0, 146)',
                lineStyle: "solid",
                width: 3
            }
		}
	]
    },

    // Configuration options go here
    options: {
    title: {
        display: true,
        position: 'top',
        fontSize: 20,
        text: 'Изменение сезонных температур (Начики)'
    },
    scales: {
            yAxes: [{
              ticks:{
                fontColor : "#000",
                fontSize : 14
              },
               scaleLabel: {
                display: true,
                labelString: 'Температура'
                },
              gridLines:{
                color: "#000",
                zeroLineColor :"#000",
              }
            }],
            xAxes: [{
              ticks:{
                fontColor : "#000",
                fontSize : 14
              },
              scaleLabel: {
                display: true,
                labelString: 'Год'
                },
              gridLines:{
                color: "#fff",
              }
            }]
          }
	}
});



var chartP = new Chart(ctP, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: years,
        datasets: [{
            label: 'Зима',
            backgroundColor : 'rgba(0,0,0,0.2)',
            borderColor: 'rgba(229, 255, 0, 0.5)',
            data: middleP.winter,
            trendlineLinear: {
                style: 'rgba(105, 0, 146, 0.774)',
                lineStyle: "solid",
                width: 2
            }
        },
		{
			label: 'Весна',
			backgroundColor : 'rgba(0,0,0,0.2)',
            borderColor: 'rgba(0, 191, 255, 0.5)',
            data: middleP.spring,
            trendlineLinear: {
                style: 'rgba(105, 0, 146, 0.774)',
                lineStyle: "solid",
                width: 2
            }
		},
		{
			label: 'Лето',
			backgroundColor : 'rgba(0,0,0,0.2)',
            borderColor: 'rgba(60, 255, 0, 0.5)',
            data: middleP.summer,
            trendlineLinear: {
                style: 'rgba(105, 0, 146, 0.774)',
                lineStyle: "solid",
                width: 2
            }
		},
		{
			label: 'Год',
			backgroundColor : 'rgba(0,0,0,0.2)',
            borderColor: 'rgb(0, 0, 255)',
            data: middleP.whole,
            trendlineLinear: {
                style: 'rgb(105, 0, 146)',
                lineStyle: "solid",
                width: 3
            }
		}
	]
    },

    // Configuration options go here
    options: {
    title: {
        display: true,
        position: 'top',
        fontSize: 20,
        text: 'Изменение сезонных температур (Петропавловск-Камчатский)'
    },
    scales: {
            yAxes: [{
              ticks:{
                fontColor : "#000",
                fontSize : 14
              },
               scaleLabel: {
                display: true,
                labelString: 'Температура'
                },
              gridLines:{
                color: "#000",
                zeroLineColor :"#000",
              }
            }],
            xAxes: [{
              ticks:{
                fontColor : "#000",
                fontSize : 14
              },
              scaleLabel: {
                display: true,
                labelString: 'Год'
                },
              gridLines:{
                color: "#fff",
              }
            }]
          }
	}
});

var chartU = new Chart(ctU, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: years,
        datasets: [{
            label: 'Зима',
            backgroundColor : 'rgba(0,0,0,0.2)',
            borderColor: 'rgba(229, 255, 0, 0.5)',
            data: middleU.winter,
            trendlineLinear: {
                style: 'rgba(105, 0, 146, 0.774)',
                lineStyle: "solid",
                width: 2
            }
        },
		{
			label: 'Весна',
			backgroundColor : 'rgba(0,0,0,0.2)',
            borderColor: 'rgba(0, 191, 255, 0.5)',
            data: middleU.spring,
            trendlineLinear: {
                style: 'rgba(105, 0, 146, 0.774)',
                lineStyle: "solid",
                width: 2
            }
		},
		{
			label: 'Лето',
			backgroundColor : 'rgba(0,0,0,0.2)',
            borderColor: 'rgba(60, 255, 0, 0.5)',
            data: middleU.summer,
            trendlineLinear: {
                style: 'rgba(105, 0, 146, 0.774)',
                lineStyle: "solid",
                width: 2
            }
		},
		{
			label: 'Год',
			backgroundColor : 'rgba(0,0,0,0.2)',
            borderColor: 'rgb(0, 0, 255)',
            data: middleU.whole,
            trendlineLinear: {
                style: 'rgb(105, 0, 146)',
                lineStyle: "solid",
                width: 3
            }
		}
	]
    },

    // Configuration options go here
    options: {
    title: {
        display: true,
        position: 'top',
        fontSize: 20,
        text: 'Изменение сезонных температур (Усть Озерное)'
    },
    scales: {
            yAxes: [{
              ticks:{
                fontColor : "#000",
                fontSize : 14
              },
               scaleLabel: {
                display: true,
                labelString: 'Температура'
                },
              gridLines:{
                color: "#000",
                zeroLineColor :"#000",
              }
            }],
            xAxes: [{
              ticks:{
                fontColor : "#000",
                fontSize : 14
              },
              scaleLabel: {
                display: true,
                labelString: 'Год'
                },
              gridLines:{
                color: "#fff",
              }
            }]
          }
	}
});

var chartYears = new Chart(allYears, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: years,
        datasets: [{
            label: 'Ключи',
            backgroundColor : 'rgba(0,0,0,0.2)',
            borderColor: 'rgb(229, 255, 0)',
            data: middleK.whole,
            trendlineLinear: {
                style: 'rgb(105, 0, 146)',
                lineStyle: "solid",
                width: 2
            }
        },
		{
			label: 'Эссо',
			backgroundColor : 'rgba(0,0,0,0.2)',
            borderColor: 'rgb(0, 191, 255)',
            data: middleE.whole,
            trendlineLinear: {
                style: 'rgb(105, 0, 146)',
                lineStyle: "solid",
                width: 2
            }
		},
		{
			label: 'Начики',
			backgroundColor : 'rgba(0,0,0,0.2)',
            borderColor: 'rgb(60, 255, 0)',
            data: middleN.whole,
            trendlineLinear: {
                style: 'rgb(105, 0, 146)',
                lineStyle: "solid",
                width: 2
            }
		},
		{
			label: 'Петропавловск-Камчатский',
			backgroundColor : 'rgba(0,0,0,0.2)',
            borderColor: 'rgb(0, 0, 255)',
            data: middleP.whole,
            trendlineLinear: {
                style: 'rgb(105, 0, 146)',
                lineStyle: "solid",
                width: 3
            }
		},
		{
			label: 'Усть-Озёрное',
			backgroundColor : 'rgba(0,0,0,0.2)',
            borderColor: 'rgb(255, 0, 0)',
            data: middleU.whole,
            trendlineLinear: {
                style: 'rgb(105, 0, 146)',
                lineStyle: "solid",
                width: 3
            }
		}
	]
    },

    // Configuration options go here
    options: {
    title: {
        display: true,
        position: 'top',
        fontSize: 20,
        text: 'Изменение среднегодовой температуры воздуха'
    },
    scales: {
            yAxes: [{
              ticks:{
                fontColor : "#000",
                fontSize : 14
              },
               scaleLabel: {
                display: true,
                labelString: 'Температура'
                },
              gridLines:{
                color: "#000",
                zeroLineColor :"#000",
              }
            }],
            xAxes: [{
              ticks:{
                fontColor : "#000",
                fontSize : 14
              },
              scaleLabel: {
                display: true,
                labelString: 'Год'
                },
              gridLines:{
                color: "#fff",
              }
            }]
          }
	}
});