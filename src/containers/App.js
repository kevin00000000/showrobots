import React, { Component } from 'react'
import {connect} from 'react-redux'
import SearchField from '../components/SearchField'
import CardList from '../components/CardList'
import Scroll from '../components/Scroll'
import {searchField, requestRobots} from '../redux/actions'
import './App.css'

const mapStateToProps = (state) => ({
    searchField: state.searchFieldReducer.searchField,
    isPending: state.requestRobotsReducer.isPending,
    robots: state.requestRobotsReducer.robots,
    error: state.requestRobotsReducer.error
})

const mapDispatchToProps = (dispatch) => ({
    searchFieldChange: (event) => {dispatch(searchField(event.target.value))},
    requestRobots: () => {dispatch(requestRobots())}
})

class App extends Component{
   
    componentDidMount = () => {
        this.props.requestRobots()
    }

    onSearchChange = (event) => {
        this.props.searchFieldChange(event)
    }

    render(){
        const {searchField, isPending, robots, error} = this.props
        let filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return isPending ?
        (<h1>Loading</h1>):
        (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchField onSearchChange={this.onSearchChange} />
                <Scroll>
                    {error.length === 0 ? <CardList robots={filterRobots} /> : <h1>{error}</h1>}
                </Scroll>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)