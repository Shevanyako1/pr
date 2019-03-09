import React, { Component } from 'react';

import style from './index.css'
import Kharkiv from './kharkiv';



class ChoiceBody extends Component {

  constructor(props) {
    super(props);
    this.state = { data : []}
  }

    gettingAnnounce = async (event) => {
        event.preventDefault();
        const api_url = await
        fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=vSebMgF3asuIBXYTlm4AeCSgvXM87Kpn&q=kharkiv&language=en&details=false&offset=0`);
        const data = await api_url.json();
        this.setState({data})
        console.log(data,this.state.id)
        
    }

  render() {
    return (
      <div className="container">
        <p >{this.state.data.map(el => <span key={el.AdministrativeArea.ID}>{el.AdministrativeArea.LocalizedName} </span> )}</p>
        <button onClick={this.gettingAnnounce}/>
        <Kharkiv />
      </div>
    );
  }
}
export default ChoiceBody;