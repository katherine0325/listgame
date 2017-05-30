import React, { Component } from 'react'

const styles = {
    thum: {
        'width': 120,
        'margin': '0 20px 10px 0'
    },
    imgp: {
        "text-align": "center",
        'margin-bottom': 0
    }
}

// data structure
// {
//     title: 'xxx',
//     imgdata: [
//         {imgsrc: 'xxxxxxxxxxx', name: 'xxxx'}
//     ]
// }

class BorBox extends Component {
    render() {
        const elements = this.props.project.data.map(function(item) {
            return (
                <div className='col-md-3 thumbnail' style={styles.thum}>
                    <img src={'./public/img/' + item.imgsrc} alt={item.name}/>
                    <div className="caption">
                        <p style={styles.imgp}>{item.name}</p>
                    </div>
                </div>
            )
        })

        return (
            <div style={{width: 440}}>
                <div className='row'>
                    {elements}
                </div>
            </div>
        )
    }
}

export default BorBox