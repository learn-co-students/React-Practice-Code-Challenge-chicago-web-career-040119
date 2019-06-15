import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state= {
    sushis: [],
    eaten: [],
    startIndex: 0,
    wallet: 100
  }

//rendering only 4 sushis at a time
  gimmeFour = () => {
    return this.state.sushis.slice(this.state.startIndex, this.state.startIndex + 4)
  }

// more sushi on click on the "More Sushi" btn
  moreSushi = () => {
    this.setState({
      startIndex: this.state.startIndex + 4
    })
  }

// check if we have enough money in our wallet & adding eaten sushi to our eaten.sushi array
  nomSushi = sushi => {
    if (this.state.wallet >= sushi.price) {
      this.setState({
        eaten: [...this.state.eaten, sushi],
        wallet: this.state.wallet - sushi.price
      })
    }
    else {
      alert("Insufficient founds")
    }
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => this.setState({
      sushis: sushis
    }))
  }


  render() {
    return (
      <div className="app">
        <SushiContainer
        /* calling on gimmeFour fnc te Render the next 4 sushis in array, and sushi array becomes the slice array of 4 that  we need to render  */
          sushis={this.gimmeFour()}
          eaten={this.state.eaten}
          moreSushi= {this.moreSushi}
          nomSushi= {this.nomSushi}/>
        <Table wallet={this.state.wallet} eaten={this.state.eaten}/>
      </div>
    );
  }
}

export default App;
