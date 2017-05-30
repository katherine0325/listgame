import React, { Component } from 'react'
import echarts from 'echarts'

const styles = {
    container: {
        'padding': 20,
        'border': '1px solid #ccc',
        'border-radius': '5px'
    }
}

// data structure
// {
//     title: '',
//     data: [
//         {
//             "name": "xxx",
//             "percent": 50
//         }
//     ]
// }


class PieChart extends Component {
    componentDidMount() {
        var _this = this;
        // alert(JSON.stringify(this.props.piechart.project))
        require(
            [
                'echarts',
                'echarts/theme/macarons'
            ],
            function(ec) {
                // 基于准备好的dom，初始化echarts实例
                var myChart = echarts.init(_this.refs.myChart, 'macarons');

                // 指定图表的配置项和数据
                var option = _this.props.piechart.option;

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }
        )
    }

    render() {
        return (
            <div style={Object.assign(styles.container, this.props.style)}>
                <div ref="myChart" style={this.props.piechart.container}></div>
            </div>
        )
    }
}

export default PieChart