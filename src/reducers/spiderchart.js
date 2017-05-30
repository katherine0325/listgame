const stateDefault = {
    name: 'spiderchart',
    container:  {
        width: 450,
        height: 300
    },
    option: {
        title : {
            text: '完成实行属性增值图',
            subtext: '雷达图'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            orient : 'vertical',
            x : 'right',
            y : 'bottom',
            data:['上月','本月']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        polar : [
        {
            indicator : [
                    { text: '外在', max: 6000},
                    { text: '日语', max: 16000},
                    { text: '英语', max: 30000},
                    { text: '健康', max: 38000},
                    { text: '视力', max: 52000},
                    { text: 'react', max: 25000},
                    { text: 'react-native', max: 25000},
                    { text: '技术博', max: 25000}
                    
                ]
            }
        ],
        calculable : true,
        series : [
            {
                name: '上月 vs 本月',
                type: 'radar',
                data : [
                    {
                        value : [4300, 10000, 28000, 35000, 50000, 19000, 20000, 15000],
                        name : '上月'
                    },
                    {
                        value : [5000, 14000, 28000, 31000, 42000, 21000, 20000, 12000],
                        name : '本月'
                    }
                ]
            }
        ]
    }
}

const spiderchart = (state = stateDefault, action) => {
    switch (action.type) {
        default: 
            return state
    }
}

export default spiderchart