import React, { Component } from 'react'
import{ Link } from 'react-router'
import $ from 'jquery'
 
class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" to="/">TODO LIST</Link>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        {/*<li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
                        <li><a href="#">Link</a></li>*/}
                        {/*<li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li role="separator" className="divider"></li>
                            <li><a href="#">Separated link</a></li>
                            <li role="separator" className="divider"></li>
                            <li><a href="#">One more separated link</a></li>
                        </ul>
                        </li>*/}
                    </ul>
                    {/*<form className="navbar-form navbar-left">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search" />
                            <span className='input-group-btn'>
                                <button type="submit" className="btn btn-default">Submit</button>
                            </span>
                        </div>
                    </form>*/}
                    <ul className="nav navbar-nav navbar-right">
                        <li className={this.props.params == 'manage'? 'active': ''}><Link to="/manage">Manage</Link></li>
                        <li className={this.props.params == 'user'? 'active': ''}><Link to="/user">User</Link></li>
                        {/*<li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li role="separator" className="divider"></li>
                                <li><a href="#">Separated link</a></li>
                            </ul>
                        </li>*/}
                    </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav