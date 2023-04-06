import React, { Component } from 'react';

export default class Main extends Component {
  state = {
    novaTarefa: '',
  };

  handleChange = (event) => {
    this.setState({
      novaTarefa: event.target.value,
    });
  };

  render() {
    const { novaTarefa } = this.state;
    return (
      <div className="main">
        <h1>{novaTarefa}</h1>

        <form action="#">
          <input onChange={this.handleChange} type="text" />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}
