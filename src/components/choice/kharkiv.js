import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom"


import style from './index.css'

class Kharkiv extends Component {

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
        <BrowserRouter>
                <div className="kh-page">
                        <p className="kh"><Link to='/kh'>kh</Link></p>
                       
                
                    

                   

                    <Route path="/kh" component={Kharkiv}/>
                </div>
            </BrowserRouter>
      );
    }
  }
  export default Kharkiv;