import React, { Component } from 'react'
import { Link } from 'react-router'

const styles = {
    footer: {
        'background': '#3b3f51',
        'color': '#fff'
    },
    page: {
        'margin': '0 10px',
        'padding': '5px 10px',
        // 'border': '1px solid #fff',
        'background': 'rgba(255, 255, 255, .2)',
        'opacity': .5
    }
}

const page = [
    { name: 'HOME', to: '/' },
    { name: 'MANAGE', to: '/manage' },
    { name: 'USER', to: '/user' }
]

class Footer extends Component {
    render() {
        const elements = page.map(function(item) {
            return (
                <li style={styles.page}><Link style={{color: '#fff'}} to={item.to}>{item.name}</Link></li>
            )
        })

        return (
            <footer  style={Object.assign(styles.footer, this.props.style? this.props.style: {position: 'static'})}>
                <div className='container'>
                <div className='row'>
                    <div className='col-sm-5'>
                    <h3 className='lead'><strong>Information</strong> and <strong>Copyright</strong></h3>
                    <p>Powered by <strong>React</strong> with <strong>Redux</strong> architecture, <strong>React-router</strong>, <strong>webpack</strong> and server-side rendering.</p>
                    <p>You may view the <a href='https://github.com/sahat/newedenfaces-react'>Source Code</a> behind this project on GitHub.</p>
                    <p>© 2017 Katherine Lo.</p>
                    </div>
                    <div className='col-sm-7 hidden-xs'>
                    <h3 className='lead'>OTHER PAGE OF THIS PROJECT</h3>
                    <ul className='list-inline'>
                        {elements}
                    </ul>
                    </div>
                </div>
                </div>
            </footer>
        )
    }
}

export default Footer