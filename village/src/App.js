import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import {Route, NavLink} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    console.log('before axios')
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res)
        this.setState({ smurfs: res.data })
      })
      .catch(err => console.log(err))
  }


  addSmurf = (e, smurf) => {
    e.preventDefault();
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(res => {
        this.setState({
          smurfs: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (




      <div className="App">
        <nav>
          <NavLink to="/">Smurfs</NavLink>
          <NavLink to="/smurfs-form">Add</NavLink>
        </nav>
        <Route 
          path="/" 
          render={props =>  <Smurfs {...props} smurfs={this.state.smurfs} />} 
        />
        <Route 
          path="/smurfs-form"
          render={props => <SmurfForm {...props} addSmurf={this.addSmurf}/>}
        /> 
      </div>
    );
  }
}

export default App;
