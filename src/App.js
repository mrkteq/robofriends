import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';

function App() {
    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {setRobots(users)});
    }, [])

    const onsearchChange = (event) => {
        setSearchfield(event.target.value)
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return (
        <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchBox searchChange={onsearchChange}/>
            <CardList robots={filteredRobots}/>
        </div>
    );

}

export default App;
