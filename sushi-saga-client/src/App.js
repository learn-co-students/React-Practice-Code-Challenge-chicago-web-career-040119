import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state= {
    sushis: [],
    eaten: false,
    startIndex: 0,
    wallet: 100
  }

  moreSushiClick = () => {
    this.setState({
      startIndex: this.state.startIndex + 4
    })
    console.log("clicked")
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => this.setState({
      sushis: sushis
    }))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  sushis={this.state.sushis} eaten={this.state.eaten} moreSushiClick={this.moreSushiClick}/>
        <Table wallet={this.state.wallet}/>
      </div>
    );
  }
}

export default App;
