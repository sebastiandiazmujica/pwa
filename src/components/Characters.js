import React, { Component } from "react";
import axios from "axios";
import Character from "./Character";

class Characters extends Component {
  state = {
    data: []
  };

  componentDidMount = async () => {
      const data = await axios.get("http://localhost:3001/characters");
      this.setState( {data : data.data } )
  }; 

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="accordion" id="accordionExample">
              { this.state.data && this.state.data.map( (character, i) =>{
                  return(
                    <Character key= {i} character={character}/>
                  );
              }) } 
          </div>
        </div>
      </div>
    );
  }
}

export default Characters;
