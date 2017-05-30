import React, { Component } from 'react'
import $ from 'jquery'

const styles = {
    container: {
        'padding': 20,
        'border': '1px solid #ccc',
        'border-radius': 5
    },
    title: {
        'text-align': 'center',
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
        'padding-top': 8,
        'border-bottom': '1px solid #ddd',        
        // 'background': 'pink'
    },
    itemparent: {
    },
    item: {
        'display': 'inline-block',
        'padding': 7,        
        'color': '#a1a1a1',
    },
    score: {
        'cursor': 'pointer',        
        'padding': '0 10px', 
        'float': 'right', 
        'color': '#5ab1ef'
    },
    date: {
        'cursor': 'pointer',        
        'padding': '0 10px', 
        'float': 'right', 
        'color': '#2ec7c9'
    }
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
        $(e.target).parent().animate({marginLeft:-107}, 500)
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
                        <span style={styles.score}>{i.date? i.date: (<span className="glyphicon glyphicon-plus"></span>)}</span>
                        <span style={styles.date}>{i.score? ('score: ' + i.score): (<span className="glyphicon glyphicon-plus"></span>)}</span>
                    </div>
                </li>
            )
        })

        return (
            <div style={Object.assign(styles.container, this.props.style)} onClick={this.handleClick.bind(this)}>
                <h1 style={styles.title}>TODO LIST</h1>
                <ul style={styles.ul}>
                    {elements}
                </ul>
            </div>
        )
    }
}

export default List