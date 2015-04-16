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