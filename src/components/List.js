import React, { Component } from 'react'
import $ from 'jquery'

const styles = {
    container: {
        'width': 300,
        'padding': 20,
        'border': '1px solid #ccc',
        'border-radius': 5
    },
    title: {
        'font-size': 48,
        'color': 'rgba(175, 47, 47, 0.15)',
        'margin-botom': 40
    },
    ul: {
        'margin-left': -36,
        'list-style': 'none inside'
    },
    li: {
        'overflow': 'hidden',
        'cursor': 'pointer'
    },
    itemparent: {
        'width': 400,
        // 'background': 'pink'
    },
    item: {
        'display': 'inline-block',
        'width': 254,
        'padding': 10,        
        'color': '#a1a1a1',
        'border-bottom': '1px solid #ddd'
    },
    color: {
        'padding': 13,
        'color': '#fff'        
    },
    finish: {},
    delete: {},
    more: {}
}

// data structure
// [
//     {
//         _id,
//         text
//     }
// ]

class List extends Component {
    itemClick(e) {
        $(e.target).parent().animate({marginLeft:-140}, 500)
    }

    finishClick(e) {
        $(e.target).parent().animate({marginLeft:0}, 500)
    }

    deleteClick(e) {
        $(e.target).parent().animate({marginLeft:0}, 500)        
    }

    handleClick(e) {
        $(e.target).find('li div').animate({marginLeft: 0}, 500)
    }

    render() {
        const _this = this;

        const elements = this.props.list.data.map(function(i) {
            return (
                <li className="clearfix" key={i._id} style={styles.li}>
                    <div style={styles.itemparent}>
                        <span style={styles.item} onClick={_this.itemClick.bind(this)}>{i.text}</span>
                        <span style={Object.assign(styles.finish, styles.color, {background: '#2ec7c9'})} onClick={_this.finishClick.bind(this)}>完成</span>                        
                        <span style={Object.assign(styles.more, styles.color, {background: '#5ab1ef'})} onClick={_this.finishClick.bind(this)}>+</span>                        
                        <span style={Object.assign(styles.delete, styles.color, {background: '#d87a80'})} onClick={_this.deleteClick.bind(this)}>删除</span>
                    </div>
                </li>
            )
        })

        return (
            <div style={styles.container} onClick={this.handleClick.bind(this)}>
                <h1 style={styles.title}>TODO LIST</h1>
                <ul style={styles.ul}>
                    {elements}
                </ul>
            </div>
        )
    }
}

export default List