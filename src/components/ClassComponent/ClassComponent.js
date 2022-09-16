import { Component } from 'react';

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      initialState: 0,
      stock: 10,
    };
  }

  suma = () => {
    this.setState({
      initialState: this.state.initialState + 1,
    });
  };

  resta = () => {
    this.setState({
      initialState: this.state.initialState - 1,
    });
  };

  stock = () => {
    this.setState({
      initialState: 0,
    });
    alert('se agoto el stock')
  }

  render() {
    return (
      <div>
        <h1>{this.state.initialState}</h1>
        <button onClick={this.state.initialState === 0 ? null : this.resta}>Dame click -</button>
        <button onClick={this.state.stock <= this.state.initialState ? this.stock : this.suma}>Dame click +</button>
      </div>
    );
  }
}

export default ClassComponent;