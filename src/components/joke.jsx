import React, { Component } from 'react'
import Character from './Character'

export default class personaje extends Component {
    constructor(){
        super();
        this.state={
            personaje: []
            // {id:1, name: 'joto', thumbnail:{path: '', extesion: '.jpg'}, description:'Hola c:'},
        }
    }

    componentDidMount(){
        console.log('im in local storage call: -----> '+ localStorage.getItem('personaje'));
        if (!navigator.onLine) {

            if (localStorage.getItem('personaje') === null)
                this.setState({ personaje: "loading..." })
            else
                this.setState({ personaje: JSON.parse(localStorage.getItem('personaje')) });
            
        }
else
        fetch('http://gateway.marvel.com/v1/public/characters?ts=2020-04-26T09:33:45.908Z&apikey=37031599379f49ecac3a1ab1e4ba323e&hash=309fd47fffe6f5adae7a7280483f37de')
          .then(res => {
              return res.json();
          }).then(res => {
              this.setState({ personaje: res.data.results });
              localStorage.setItem('personaje', JSON.stringify(res.data.results));
          });
      }

    render() {
        console.log(this.state)
        return (
            <div>
                <div className="container-fluid">
          <div className="accordion" id="accordionExample">
              { 
              (typeof(this.state.personaje)==='string')?
              <Loading text={this.state.personaje}></Loading>
              :
              this.state.personaje && this.state.personaje.map( (character, i) =>{
                  return(
                    <Character key= {i} character={character}/>
                  );
              }) } 
          </div>
        </div>
            </div>
        )
    }
}

export function Loading(props) {
    console.log('at least?')
    return (
        <div>
            <h1>{props.text}</h1>
        </div>
    )
}
