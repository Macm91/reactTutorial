import React, { Component } from "react";
import './App.css'
import TitleBar from "./TitleBar/TitleBar";

class App extends Component {
    constructor(props) {
        super(props);
        this.books = [
                {title: "Tools of Titans", author: "Tim Ferris"},
                {title: "Deskbound", author: "Dr. Kelly Starrett"},
                {title: "An Army At Dawn", author: "Rick Atkinson"},
        ];
        this.state = {
            bookNumber: 0
        };       
    }

    render(){
        return(
          <div className="container-fluid">
              <TitleBar/>
              <div className="row">
                <div className="col=md=4"></div>
                {/* button will be here to move to the previous book viewed */}
                <div className="col=md=4">
                    {/* display book with cover here */}
                    <h1> {this.books[this.state.bookNumber].title} </h1>
                    <h4> {this.books[this.state.bookNumber].author} </h4>
                </div>
                <div className="col=md=4">
                    {/* Button here to move to next book */}
                </div>
              </div>
          </div> 
        )
    }
}

export default App;