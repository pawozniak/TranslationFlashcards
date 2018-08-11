import React from 'react';
import { NavLink } from 'react-router-dom';

class Main extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <h1>Co robimy?</h1>
                <button> <NavLink to="/translate"> tłumaczymy</NavLink> </button>
                <button> <NavLink to="/learn"> uczymy się</NavLink> </button>
            </div>
        )
    }
}

export default Main;