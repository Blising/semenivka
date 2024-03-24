import React, { Component } from 'react'
import MapComponents from '../components/mapComponent/map';
import "../ style/Map.css";

export default class map extends Component {
  render() {
    return (
      <div className="mapDiv" >map<MapComponents/></div>
    )
  }
}
