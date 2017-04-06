/**
 * Created by Administrator on 2017/4/6 0006.
 */
var myChart = echarts.init(document.getElementById('main'));

var option = {

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: 'yellow'
            }
        }
    },

    legend: {
        data:['仓位','净值'],
        top:10
    },
    xAxis: [
        {
            type: 'category',
            width:'10px',
            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月'],
            axisLabel:{
                rotate:45
            },
            axisPointer: {
                type: 'shadow'
            },
            axisTick:{
                lineStyle:{
                    color:'blue'
                }
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            min: 0,
            max: 120,
            interval: 20,
            axisLabel: {
                formatter: '{value} %'
            }
        },
        {
            type: 'value',
            min: 0,
            max: 8,
            interval: 1,
            axisLabel: {
                formatter: '{value} '
            }
        }
    ],
    series: [
        {
            name:'仓位',
            type:'bar',
            barWidth:'15px',
            data:[100,100,100,80,100,50,30,0,10,20,35],
            itemStyle:{
                normal:{color:'#006cb7'}
            }
        },
        {
            name:'净值',
            type:'line',
            yAxisIndex: 1,
            data:[3.5,3.6,4,4.3,4.8,7.5,6,5.9,5.9,5.9,6],
            itemStyle:{
                normal:{color:'red'}
            }
        }
    ]
};


// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
var a = document.getElementById('main');
a.style.backgroundColor = '#F4F4F4';