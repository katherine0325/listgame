import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as AllActions from '../actions'

import Maps2 from '../components/Maps'

const Maps = ({list, actions}) => (
    <div>
        <Maps2 />
    </div>
)

const mapStateToProps = state => ({
    list: state.list
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(AllActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Maps)