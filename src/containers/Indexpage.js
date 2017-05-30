import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Allactions from '../actions'

import Nav from '../components/Nav'
import List from '../components/List'
import PieChart from '../components/PieChart'
import SpiderChart from '../components/SpiderChart'
import Histogram from '../components/Histogram'
import Footer from '../components/Footer'

const styles = {
    flex: {
        'display': 'flex',
        'justify-content': 'space-around'
    }
}

const Indexpage = ({list, piechart, spiderchart, histogram, actions}) => (
    <div>
        <Nav />
        <div className="constainer" style={styles.flex}>
            <List list={list} actions={actions} />
            <div>
                <div style={Object.assign(styles.flex, {'margin-bottom': 20})}>
                    <PieChart piechart={piechart} actions={actions} style={{'margin-right': 20}}/>
                    <SpiderChart spiderchart={spiderchart} actions={actions} />
                </div>
                <Histogram histogram={histogram} actions={actions} />
            </div>
        </div>
        <Footer />
    </div>
)

const mapStateToProps = state => ({
    list: state.list,
    piechart: state.piechart,
    spiderchart: state.spiderchart,
    histogram: state.histogram
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Allactions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Indexpage)
