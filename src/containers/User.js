import React from 'react'
import { bindActionCreactors } from 'redux'
import { connect } from 'react-redux'
import * as AllActions from '../actions'

import Nav from '../components/Nav'
import Footer from '../components/Footer'

const styles = {
    item: {
        'height': 50,
        'line-height': 50,
        'font-size': 20
    },
    gly: {
        'width': 50,
        'color': '#ddd'
    },
    text: {
        'color': '#a0a0a0'
    },
    text2: {
        'font-size': 16
    }
}

const User = () => (
    <div>
        <Nav params={'user'}  />
            <div className='container' style={{display: 'flex'}}>
                <div className='thumbnail'>
                    <img src="./public/img/q.png" target="头像" />
                    <h4 style={{'text-align': 'center'}}>Katherine Lo</h4>
                </div>
                <div style={{margin: '0 40px', padding: 30}}>
                    <div style={styles.item}>
                        <span className="glyphicon glyphicon-user" style={styles.gly}></span>
                        <span style={styles.text}>Katherine Lo</span>
                    </div>
                    <div style={styles.item}>
                        <span className="glyphicon glyphicon-heart" style={styles.gly}></span>
                        <span style={styles.text}>React, Redux, React-router, webpack</span>
                    </div>
                    <div style={styles.item}>
                        <span className="glyphicon glyphicon-envelope" style={styles.gly}></span>
                        <span style={Object.assign(styles.text, styles.text2)}>gzbxq@foxmail.com</span>
                    </div>
                </div>
            </div>
        <Footer style={{'position': 'absolute', 'bottom': 0, 'width': '100%'}} />
    </div>
)

export default connect()(User)