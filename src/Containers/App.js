import React, { useEffect } from 'react';
import CardList from './../Components/CardList';
import SearchBox from './../Components/SearchBox';
import Scroll from './../Components/Scroll';
import ErrorBoundry from './../Components/ErrorBoundry';
import './App.css';
import { connect } from 'react-redux'
import { requestRobots, setSearchfield } from '../action';



const mapStateToProps = (state) => {
	return {
		searchfield: state.searchRobots.searchfield,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchfield(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}



function App({ searchfield, onSearchChange, onRequestRobots, robots, isPending, error }) {

	useEffect(() => {
		onRequestRobots()
	}, [])


	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase()) || robot.email.toLowerCase().includes(searchfield.toLowerCase());
	});

	return isPending ?
		<h1 className="tc">LOADING!!</h1> :
		<div className="tc">
			<h1 className="f1">ROBO FRIENDS</h1>
			<SearchBox onSearchChange={onSearchChange} />
			<Scroll>
				<ErrorBoundry>
					<CardList robots={filteredRobots} />
				</ErrorBoundry>
			</Scroll>
		</div>

}

export default connect(mapStateToProps, mapDispatchToProps)(App);