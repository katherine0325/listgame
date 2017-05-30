import React, { Component } from 'react'
import { Link } from 'react-router'

class App extends Component {
    render() {
        return (
            <div>
                mariko and haruna
                <div>{JSON.stringify(this.props)}</div>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/list">List</Link></li>
                </ul>
            </div>
        )
    }
}

export default App

//当前的APP， About， List  都是页面，，其实可以放进routes文件夹里面，然后再在containers里面写组件的业务逻辑，component写组件的UI，这样就可以把可复用的组件和易于定位的页面分开放置，这样维护代码的时候才容易定位
//写多一个字