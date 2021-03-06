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

  deleteSmurf = (e, id) => {
    e.preventDefault();
    axios.delete(`http://localhost:3333/smurfs/${id}`)
      .then((res) => {
        console.log(res.data)
        this.setState({
          smurfs: res.data

        })
          })
      .catch((err) => {console.log(err)})
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (




      <div className="App">
        <nav className='nav'>
          <NavLink className="link" exact to="/">Just Smurfs</NavLink>
          <NavLink className="link" exact to="/smurf-form">Add a Smurf</NavLink>
        </nav>
        <Route 
          path="/" 
          render={props =>  <Smurfs {...props} smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf} />} 
        />
       
        <Route 
          path="/smurf-form"
          render={props => <SmurfForm {...props} addSmurf={this.addSmurf}/>}
        /> 
        
        <footer className="footer"></footer>
      </div>
    );
  }
}

export default App;
