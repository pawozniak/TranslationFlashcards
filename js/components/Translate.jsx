import React from 'react';
import { NavLink } from 'react-router-dom';


class Translate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        if(this.props.error){
            return(
                <div className='chalkboard'>
                    <div>Słowa nie znaleziono w słowniku.</div>
                    <button onClick={this.props.onOtherTranslation}>Podaj inne słowo do przetłumaczenia</button>
                </div>
            )
        }
        return(
            <div className='chalkboard'>
                <form 
                    onSubmit={this.props.onTranslate} 
                    className='form'
                >
                    <input 
                        type="search" 
                        value={this.props.phraseEntered}
                        onChange={this.props.onPhraseEnter}
                    />
                    <input type="submit" value='Tłumacz'/>
                </form>
                <div  className='form'><ul>{this.props.translatedTo.map((elem, index)=>{
                    return <li key={index}>{elem}</li>
                })}</ul></div>
                <div>
                    <button 
                        onClick={this.props.onNewWord} 
                        style={{display: this.props.visibility? 'block' : 'none'}}
                    >
                        dodaj do listy słówek
                    </button>
                </div>
                <button> <NavLink exact to="/">powrót do menu</NavLink> </button>
                <button> <NavLink to="/learn">przejdź do quizu</NavLink> </button>
            </div>
        )
    }
}

export default Translate;