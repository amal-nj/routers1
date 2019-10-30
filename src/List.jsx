import React, { Component } from "react";
import axios from "axios";
import Hero from "./Hero";
import { Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import HeroDetails from './HeroDetails';
import "./App.css";

export default class List extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    axios
      .get(
        "https://raw.githubusercontent.com/akabab/superhero-api/0.2.0/api/all.json"
      )
      .then(res => {
        // console.log(res);
        this.setState({
          data: res.data
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (

    <div className="grid">
        List

        {this.state.data.map((hero)=>{ return <a href={`/Hero/${hero.id}`}><Hero name={hero.name} id={hero.id} image={hero.images.md}/></a>})}

    </div>
    );
  }
}
