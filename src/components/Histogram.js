import React, { Component } from 'react'
import echarts from 'echarts'

const styles = {
    container: {
        'padding': 20,
        'border': '1px solid #ccc',
        'border-radius': '5px'
    }
}

class Histogram extends Component {
    componentDidMount() {
        var _this = this;

        require(
            [
                'echarts',
                'echarts/theme/macarons'
            ],
            function(ec) {
                // 基于准备好的dom，初始化echarts实例，以及使用的主题
                var myChart = echarts.init(_this.refs.myChart, 'macarons');

                // 指定图表的配置项和数据
                var option = _this.props.histogram.option;

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            }
        )
    }

    render() {
        return (
            <div style={styles.container}>
                <div ref="myChart" style={this.props.histogram.container}></div>
            </div>
        )
    }
}

export default Histogram