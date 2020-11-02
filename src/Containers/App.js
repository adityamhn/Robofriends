import React, {useState, useEffect} from 'react';
import CardList from './../Components/CardList';
import SearchBox from './../Components/SearchBox';
import Scroll from './../Components/Scroll';
import ErrorBoundry from './../Components/ErrorBoundry';
import './App.css';

function App () {
	// constructor() {
	// 	super()
	// 	this.state = {
	// 		robots: [],
	//         searchfield: ' '
	// 	}
	// }
	const [robots,setRobots] = useState([])
	const [searchfield,setSearchfield] = useState("")

	// componentDidMount() {
	// 	fetch('https://jsonplaceholder.typicode.com/users')
	// 	.then(response =>response.json())
	// 	.then(users => {this.setState({robots: users})});
	// }

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response =>response.json())
		.then(users => {setRobots(users)});
	},[])
    
const onSearchChange = (event) => {
    	setSearchfield(event.target.value)
    	}

		const filteredRobots = robots.filter(robot => {
    		return robot.name.toLowerCase().includes(searchfield.toLowerCase()) || robot.email.toLowerCase().includes(searchfield.toLowerCase()) ;
    	});
        return robots.length === 0 ?
        <h1 className="tc">LOADING!!</h1> :
		<div className="tc">
		<h1 className="f1">ROBO FRIENDS</h1>
		<SearchBox onSearchChange={onSearchChange}/>
		<Scroll>
		<ErrorBoundry>
        <CardList robots={filteredRobots} />
        </ErrorBoundry>
          </Scroll>
     </div>
	  
	}

export default App;