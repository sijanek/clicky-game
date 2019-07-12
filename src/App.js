import React, { Component } from "react";
import bears from "./bears.json";
import Card from "./components/Card/Card.js";
import Wrapper from "./components/Wrapper/Wrapper.js";
import "./App.css";

class App extends Component {

  state = {
    bears,
    clickedArray: [],
    score: 0,
    topScore: 0,
    message: "",
    shakeit: "false"
  };
  clickPicture = id => {
    const shuffledArray = this.shuffleArray(this.state.bears);
    this.setState({bears: shuffledArray});
    if (this.state.clickedArray.includes(id)) {
      this.setState({ score: 0, clickedArray: [], message:"Incorrect guess!! Click for a new game!", shakeit: "true"});
    }
    else {
      this.setState({
        clickedArray: this.state.clickedArray.concat([id]),
        score: this.state.score + 1,
        message: "Correct guess!! You rock!",
        shakeit: "false"
      });
    }
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score});
    }
  }
  shuffleArray = (bearsArray) => {
    for (let i = bearsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [bearsArray[i], bearsArray[j]] = [bearsArray[j], bearsArray[i]];
      console.log(bearsArray[i]);
      console.log(bearsArray[j]);
    }
  return bearsArray;
  }
  render () {
    //console.log(this.state.bears)
  return (
    <div className="App">
      <header className="App-header">
          
          <h1 className="App-title">Play Clicky Game!!</h1>
        </header>
        <h3 className="App-intro">
          <strong>Click on a card to earn points, but only click it once!</strong> 
          <p className = "score"><strong>Score: {this.state.score} | TopScore: {this.state.topScore}</strong></p>
          <p className="message"><strong>{this.state.message}</strong></p>
        </h3>
      <Wrapper
      shakeWrapper = {this.state.shakeit}
    bears =
    {this.state.bears.map(bear => (
    <Card 
    clickPicture={this.clickPicture}
    id = {bear.id}
    key = {bear.id} 
    image = {bear.image} />
     ))}
     />
     <footer className="footer">
      <div className="container">
        <span className="text-muted">Save Polar Bears</span>
      </div>
    </footer> 

    </div>
  )
  }
}

export default App;
