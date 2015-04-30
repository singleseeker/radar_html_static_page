var investevent_percent_by_industry = echarts.init(document.getElementById('investevent_percent_by_industry'));
var option = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',
        x : 'right',
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series : [
        {
            name:'行业分布占比',
            type:'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ]
        }
    ]
};
investevent_percent_by_industry.setOption(option);

window.onresize = investevent_percent_by_industry.resize; 


var investevent_avg_time_by_angle = echarts.init(document.getElementById('investevent_avg_time_by_angle'));
var option = option = {
    tooltip : {
        trigger: 'axis'
    },
    xAxis : [
        {
            type : 'category',
            data : ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'蒸发量',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 2.2],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            }
        }
    ]
};
investevent_avg_time_by_angle.setOption(option);

window.onresize = investevent_avg_time_by_angle.resize; 

var investevent_avg_time_by_round_a = echarts.init(document.getElementById('investevent_avg_time_by_round_a'));
var option = option = {
    tooltip : {
        trigger: 'axis'
    },
    xAxis : [
        {
            name:'行业',
            type : 'category',
            data : ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','直接访问','邮件营销','联盟广告','视频广告','搜索引擎','直接访问','邮件营销','联盟广告','视频广告','搜索引擎','直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
            axisLabel: {
              interval: 0,
              rotate: 60
            }
        }
    ],
    yAxis : [
        {
            name:'单位 月',
            type : 'value'
        }
    ],
    series : [
        {
            name:'蒸发量',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 2.2,2.0, 4.9, 7.0, 23.2, 2.2,2.0, 4.9, 7.0, 23.2, 2.2,2.0, 4.9, 7.0, 23.2, 2.2],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            }
        }
    ]
};
investevent_avg_time_by_round_a.setOption(option);

window.onresize = investevent_avg_time_by_round_a.resize; 

var investevent_avg_time_by_round_b = echarts.init(document.getElementById('investevent_avg_time_by_round_b'));
var option = option = {
    tooltip : {
        trigger: 'axis'
    },
    xAxis : [
        {
            type : 'category',
            data : ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'蒸发量',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 2.2],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            }
        }
    ]
};
investevent_avg_time_by_round_b.setOption(option);

window.onresize = investevent_avg_time_by_round_b.resize; 

var investevent_avg_time_by_round_c = echarts.init(document.getElementById('investevent_avg_time_by_round_c'));
var option = option = {
    tooltip : {
        trigger: 'axis'
    },
    xAxis : [
        {
            type : 'category',
            data : ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'蒸发量',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 2.2],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            }
        }
    ]
};
investevent_avg_time_by_round_c.setOption(option);

window.onresize = investevent_avg_time_by_round_c.resize; 

var investevent_avg_time_by_round_d = echarts.init(document.getElementById('investevent_avg_time_by_round_d'));
var option = option = {
    tooltip : {
        trigger: 'axis'
    },
    xAxis : [
        {
            type : 'category',
            data : ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'蒸发量',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 2.2],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            }
        }
    ]
};
investevent_avg_time_by_round_d.setOption(option);

window.onresize = investevent_avg_time_by_round_d.resize; 


var investevent_amount_by_us = echarts.init(document.getElementById('investevent_amount_by_us'));
var option = {
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
    },
    yAxis : [
        {
            type : 'value'
        }
    ],
    xAxis : [
        {
            type : 'category',
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[32, 302, 301, 334, 390, 330, 320]
        },
        {
            name:'邮件营销',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[150, 212, 201, 154, 190, 330, 410]
        },
        {
            name:'搜索引擎',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[820, 832, 901, 934, 1290, 1330, 1320]
        }
    ]
};;
investevent_amount_by_us.setOption(option);

window.onresize = investevent_amount_by_us.resize; 

var investevent_amount_by_cn = echarts.init(document.getElementById('investevent_amount_by_cn'));
var option = {
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
    },
    yAxis : [
        {
            type : 'value'
        }
    ],
    xAxis : [
        {
            type : 'category',
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[32, 302, 301, 334, 390, 330, 320]
        },
        {
            name:'邮件营销',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[150, 212, 201, 154, 190, 330, 410]
        },
        {
            name:'搜索引擎',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[820, 832, 901, 934, 1290, 1330, 1320]
        }
    ]
};;
investevent_amount_by_cn.setOption(option);

window.onresize = investevent_amount_by_cn.resize;

var investevent_percent_by_currency = echarts.init(document.getElementById('investevent_percent_by_currency'));
var option = {
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
    },
    yAxis : [
        {
            type : 'value'
        }
    ],
    xAxis : [
        {
            type : 'category',
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[32, 302, 301, 334, 390, 330, 320]
        },
        {
            name:'邮件营销',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[150, 212, 201, 154, 190, 330, 410]
        },
        {
            name:'搜索引擎',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[820, 832, 901, 934, 1290, 1330, 1320]
        }
    ]
};;
investevent_percent_by_currency.setOption(option);

window.onresize = investevent_percent_by_currency.resize;

var investevent_total_by_currency = echarts.init(document.getElementById('investevent_total_by_currency'));
var option = {
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
    },
    yAxis : [
        {
            type : 'value'
        }
    ],
    xAxis : [
        {
            type : 'category',
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[32, 302, 301, 334, 390, 330, 320]
        },
        {
            name:'邮件营销',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[150, 212, 201, 154, 190, 330, 410]
        },
        {
            name:'搜索引擎',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[820, 832, 901, 934, 1290, 1330, 1320]
        }
    ]
};;
investevent_total_by_currency.setOption(option);

window.onresize = investevent_total_by_currency.resize; 

var investevent_percent_by_round = echarts.init(document.getElementById('investevent_percent_by_round'));
var option = {
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
    },
    yAxis : [
        {
            type : 'value'
        }
    ],
    xAxis : [
        {
            type : 'category',
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[32, 302, 301, 334, 390, 330, 320]
        },
        {
            name:'邮件营销',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[150, 212, 201, 154, 190, 330, 410]
        },
        {
            name:'搜索引擎',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[820, 832, 901, 934, 1290, 1330, 1320]
        }
    ]
};;
investevent_percent_by_round.setOption(option);

window.onresize = investevent_percent_by_round.resize; 

var investevent_total_by_round = echarts.init(document.getElementById('investevent_total_by_round'));
var option = {
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
    },
    yAxis : [
        {
            type : 'value'
        }
    ],
    xAxis : [
        {
            type : 'category',
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[32, 302, 301, 334, 390, 330, 320]
        },
        {
            name:'邮件营销',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[150, 212, 201, 154, 190, 330, 410]
        },
        {
            name:'搜索引擎',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[820, 832, 901, 934, 1290, 1330, 1320]
        }
    ]
};
investevent_total_by_round.setOption(option);

window.onresize = investevent_total_by_round.resize; 

var investevent_total_by_industry = echarts.init(document.getElementById('investevent_total_by_industry'));
var option = {
    tooltip : {
        trigger: 'axis'
    },
    xAxis : [
        {
            type : 'value',
            boundaryGap : [0, 0.01]
        }
    ],
    yAxis : [
        {
            show : false,
            type : 'category',
            data : ['巴西','印尼','美国','印度','中国','世界人口(万)','巴西','印尼','美国','印度','中国','世界人口(万)','中国','世界人口(万)']
        }
    ],
    series : [
        {
            name:'行业分布',
            type:'bar',
            data:[18203, 23489, 29034, 104970, 131744, 630230,18203, 23489, 29034, 104970, 131744, 630230, 131744, 630230],
            itemStyle : { 
              normal: {label : {show: true, position: 'right',formatter: "{b}"}},
            },
        }
    ]
};

investevent_total_by_industry.setOption(option);
investevent_total_by_industry.on("click",function(param){
  console.log(param);
});

window.onresize = investevent_total_by_industry.resize; 