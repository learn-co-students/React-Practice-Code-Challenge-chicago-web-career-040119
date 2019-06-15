import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super()
    this.state= {
      sushis: [],
      index: 0,
      eaten: [],
      money: 89
    }
  }

  // make a functin that gives the button only 4 sushis at a time
  justFourSushis = () => {
    // console.log(this.state.sushis)
    return this.state.sushis.slice(this.state.index, this.state.index+4)
  }

  moreSushis = () => {
    this.setState({
        index: this.state.index + 4
      })
  }
  iAmEaten =(sushi)=> {
    if (this.state.money > sushi.price) {
      let newEatenArray = [...this.state.eaten, sushi]
      this.setState({
        eaten: newEatenArray,
        money: this.state.money - sushi.price
      })
    } else {
      return console.warn("Add money into you account!")
    }
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(sushis => {
        this.setState({
          sushis: sushis
        })
      })
  }

  render() {

    return (
      <div className="app">
        <SushiContainer
          fourSushis={this.justFourSushis()}
          moreSushis={this.moreSushis}
          eaten={this.state.eaten}
          iAmEaten={this.iAmEaten}/>
        <Table money={this.state.money} eaten={this.state.eaten}/>
      </div>
    );
  }
}

export default App;
