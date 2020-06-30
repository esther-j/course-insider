import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import "./homepage.css";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolname: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const schoolname = event.target.value;
    this.setState({ schoolname: schoolname });
  }

  render() {
    return (
      <>
        <header>
          <NavBar />
        </header>
        <div id="main-container">
          <div id="main-flex-container">
            <div id="text-block">
              <h1>Discover and share course advice</h1>
              <p>Make schedule planning simple!</p>
              <div id="searchbar-container">
                <input 
                  name="schoolname"
                  type="text" 
                  placeholder="Find your school..."
                  onChange={this.handleInputChange} />
                <Link 
                  id="submit-button" 
                  className="no-text-deco" 
                  to={`school/${this.state.schoolname}`}
                >
                  Go
                </Link>
              </div>
            </div>
            <div id="img-block">
              <img src={require("../assets/homepage-img.svg")} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
