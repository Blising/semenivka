import React, { Component } from 'react';
import MapComponents from '../components/mapComponent/map';
import "../ style/Map.css";

export default class map extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="mapDiv">
            <MapComponents />
          </div>
        </div>

        <footer>
       

    
          <div className="footer-content">
          <a href='https://www.facebook.com/village.of.semenivka/?_rdr' target='_blank'>

            <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png'} alt='ImageFooter' />
            </a>
          </div>
        </footer>
      </>
    )
  }
}
