const stateDefault = {
    name: 'piechart',
    container:  {
        width: 450,
        height: 300
    },
    option: {
        title : {
            text: '本月所完成事项',
            subtext: '饼状图',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : 'left',
            data:['外在', '日语', '英语', '身体健康', '视力保持', '精通react', '精通react-native', '技术博']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true, 
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            width: '50%',
                            funnelAlign: 'left',
                            max: 1548
                        }
                    }
                },
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        series : [
            {
                name:'访问来源',
                type:'pie',
                radius : '55%',
                center: ['65%', '65%'],
                data:[
                    {name: '外在', value: 300},
                    {name: '日语', value: 350},
                    {name: '英语', value: 450},
                    {name: '身体健康', value: 300},
                    {name: '视力保持', value: 200},
                    {name: '精通react', value: 100},
                    {name: '精通react-native', value: 50},
                    {name: '技术博', value: 50}
                ]
            }
        ]
    }
}

const piechart = (state = stateDefault, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default piechart