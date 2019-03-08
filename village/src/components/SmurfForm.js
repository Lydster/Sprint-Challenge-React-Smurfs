import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        name: '',
        age: '',
        height: '',
        id: ''
      }
    };
  }

  changeHandler = e => {
    e.persist();
    this.setState(prevState => ({
      item: {
        ...prevState.smurf,
        [e.target.name]: e.target.value
      }
    }))
  }

  submitHandler = e => {
    this.props.addSmurf(e, this.state.smurf);
    this.setState({
      smurf: {
        name: '',
        age: '',
        height: '',
        id: ''
      }
    })
  }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            onChange={this.changeHandler}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            type="text"
            onChange={this.changeHandler}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            type="text"
            onChange={this.changeHandler}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
           <input
            type="text"
            onChange={this.changeHandler}
            placeholder="ID"
            value={this.state.id}
            name="id"
          />
          <button onClick={this.submitHandler} type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}


export default SmurfForm;
