import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as AllActions from '../actions'

import Nav from '../components/Nav'
import BorBox from '../components/BorBox'
import List2 from '../components/List2'
import Footer from '../components/Footer'

const Manage = ({list, project, actions}) => (
    <div>
        <Nav params={'manage'} />
        <div className="container" style={{display: 'flex', marginBottom: 20}}>
            <BorBox project={project} actions={actions} />
            <List2 list={list} actions={actions} style={{width: '60%'}} />
        </div>
        <Footer />
    </div>
)

const mapStateToProps = state => ({
    list: state.list,
    project: state.project
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(AllActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Manage)