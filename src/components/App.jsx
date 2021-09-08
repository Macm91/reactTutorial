import React, { Component } from "react";
import './App.css'
import TitleBar from "./TitleBar/TitleBar";
import BookViewer from "./BookViewer/BookViewer";
import Footer from "./Footer/Footer";
import CreateBook from "./CreateBook/CreateBook";

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

    goToNextBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber++;
        if(tempBookNumber === this.books.length){
            tempBookNumber = 0;
        }
        this.setState({
            bookNumber : tempBookNumber
        })
    }

    goToPreviousBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber--; 
        if(tempBookNumber < 0){
            tempBookNumber = this.books.length - 1;
        }
        this.setState({
            bookNumber : tempBookNumber
        })
    }

    createBook = (newBook) => {
        console.log ("from the createBoon on the App componenet", newBook);
        this.books.push(newBook);
        this.setState({
            bookNumber: this.books.length - 1
        })
    }

    render(){
        return(
          <div className="container-fluid">
              <TitleBar/>
              <BookViewer book={this.books[this.state.bookNumber]} nextBook = {this.goToNextBook} previousBook= {this.goToPreviousBook}/>
              <CreateBook createNewBook={this.createBook}/>
              <Footer/>
          </div> 
        )
    }


}

export default App;