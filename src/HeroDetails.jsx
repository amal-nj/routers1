import React, { Component } from 'react'
import axios from 'axios'
export default class HeroDetails extends Component {
    constructor(){
        super();
        this.state = {
          data: []
        };
      }
     
      componentDidMount() {
        axios
          .get(
            "https://raw.githubusercontent.com/akabab/superhero-api/0.2.0/api/all.json"
          )
          .then((res) => {
            // console.log(res.data);
            this.setState({
              data: res.data
            });
          })
          .catch(err => console.log(err));
      }
    render() {
        // console.log(this.props);
        if(this.state.data[0]){
        var data=this.state.data[0].name;
        console.log("this is data: "+data);
        console.log("Hi");}
        var image;
        if(this.state.data[this.props.match.params.id-1]){

           data= this.state.data[this.props.match.params.id-1].name;
        image=this.state.data[this.props.match.params.id-1].images.md;}
        return (
            <div>
                Hi
                jffffffffffffffffffnf
              <h1>{data}</h1>
              <img src={image}/>

            </div>
        )
    }
}
