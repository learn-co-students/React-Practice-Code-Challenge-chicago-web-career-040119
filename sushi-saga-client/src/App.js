import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      sushi: [],
      converyorStart: 0,
      converyorEnd: 4,
      moneyLeft: 100,
      emptyPlates: []
    }
  }

  componentDidMount() {
    return fetch(API)
      .then(res => res.json())
      .then(sushiData => this.setState({sushi: sushiData}))
      .catch(errors => console.log(errors.messages))
  }

  eatSushiHandler = (id) => {
    const clickedSushi = this.state.sushi.find(sushi => sushi.id === id)
    const clickedSushiIndex = this.state.sushi.findIndex(sushi => sushi === clickedSushi)
    if (!clickedSushi.eaten) {
      if (this.state.moneyLeft - clickedSushi.price >= 0) {
        const newSushi = this.state.sushi.slice()
        newSushi[clickedSushiIndex] = {
          id: clickedSushi.id,
          name: clickedSushi.name,
          img_url: clickedSushi.img_url,
          price: clickedSushi.price,
          created_at: clickedSushi.created_at,
          eaten: true,
          emptyPlates: this.state.emptyPlates.push("empty")
        }
        this.setState({
          sushi: newSushi,
          moneyLeft: this.state.moneyLeft - clickedSushi.price
        })
      } else {
        alert("You don't have enough money, ya bum!")
      }
    }
  }

  moreSushiHanlder = () => {
    this.setState({
      converyorStart: this.state.converyorStart !== 96 ? this.state.converyorStart + 4 : 0,
      converyorEnd: this.state.converyorEnd !== 100 ? this.state.converyorEnd + 4 : 4
    })
  }

  displaySushi = () => {
    return this.state.sushi.length
    ?
      this.state.sushi.slice(this.state.converyorStart, this.state.converyorEnd)
    :
      this.state.sushi
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  sushi={this.displaySushi()} eatSushiHandler={this.eatSushiHandler} moreSushiHanlder={this.moreSushiHanlder}/>
        <Table moneyLeft={this.state.moneyLeft} emptyPlates={this.state.emptyPlates}/>
      </div>
    );
  }
}

export default App;
