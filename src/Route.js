import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom"
import Auth from './pages/auth';
import Registry from './pages/reg';
import Announce from './pages/announce';
import Kharkiv from './components/choice/kharkiv';

import style from './components/choice/index.css'


class Header extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="nav">
                    <ul>
                        <li><Link to='/auth'>Войти</Link></li>
                        <li><Link to='/registry'>Зарегистрироваться</Link></li>
                        <li><Link to='/announce'>Announce</Link></li>
                    </ul>
                
                    

                    <Route path="/auth" component={Auth}/>
                    <Route path="/registry" component={Registry}/>
                    <Route path="/announce" component={Announce}/>

                    <Route path="/kharkiv" component={Kharkiv}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default Header;
