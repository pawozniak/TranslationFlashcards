import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';


class Quiz extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            questionNumber: Math.round(Math.random()*this.props.words.allWords.length),
            correctCounter: 0,
            incorrectCounter: 0
        };
    }

    generateAnswears = (questionNumber)=>{
        let answearArray = [];
        answearArray.push(this.state.questionNumber);
        let i=0;
        if(this.props.words.allWords.length>=3){
            while(i<2){
                let answearNumber = Math.round(Math.random()*(this.props.words.allWords.length-1));
                if(answearNumber!==questionNumber && answearArray.indexOf(answearNumber)<0){
                    answearArray.push(answearNumber);
                    i++;
                }
            }   
        }
        this.shuffle(answearArray);
        return answearArray;
    };

    shuffle = (a) => {
        for (let i = a.length; i; i--) {
            let j = Math.floor(Math.random() * i);
            [a[i - 1], a[j]] = [a[j], a[i - 1]];
        }
    };

    handleNextQuestion = () => {
        this.setState({
            questionNumber: Math.round(Math.random()*(this.props.words.allWords.length-1)),
        })
    }

    checkAnswear = (e) => {
        if(this.state.questionNumber==e.target.parentElement.getAttribute('data')){
            console.log('dobrze!');
            // this.setState({
            //     correctCounter: this.state.correctCounter+1
            // })
        } else { 
            console.log('źle!');
            // this.setState({
            //     incorrectCounter: this.state.incorrectCounter+1
            // })
        }
    }

    render(){
        const answearNumbers = this.generateAnswears(this.state.questionNumber);
        if(this.props.words.allWords.length>=3){
            return(
                <div>
                    <div>
                        <p>Wybierz prawidłowe tłumaczenie</p>
                        <h2>{this.props.words.allWords[this.state.questionNumber].translatedFrom}</h2>
                    </div>
                    <div>
                        <ul>
                            <div 
                                onClick={this.checkAnswear} 
                                className='float' 
                                data={answearNumbers[0]}>
                                    {this.props.words.allWords[answearNumbers[0]].translatedTo.map((elem, index)=><li key={index}>{elem}</li>)}
                            </div>
                            <div 
                                onClick={this.checkAnswear} 
                                className='float' 
                                data={answearNumbers[1]}>
                                    {this.props.words.allWords[answearNumbers[1]].translatedTo.map((elem, index)=><li key={index}>{elem}</li>)}
                            </div>
                            <div 
                                onClick={this.checkAnswear} 
                                className='float' 
                                data={answearNumbers[2]}>
                                    {this.props.words.allWords[answearNumbers[2]].translatedTo.map((elem, index)=><li key={index}>{elem}</li>)}
                            </div>
                        </ul>
                    </div>
                    {/* <div>
                        <div>Liczba poprawnych odpowiedzi {this.state.correctCounter}</div>
                        <div>Liczba błędnych odpowiedzi {this.state.incorrectCounter}</div>
                    </div> */}
                    <div>
                        <button 
                            onClick={this.handleNextQuestion}>
                                następne słówko
                        </button>
                    </div>
                    <div>
                        <button> 
                            <NavLink exact to="/">
                                powrót do menu
                            </NavLink> </button>
                    </div>
                </div>
            )
        } else {
            return(
                <div>
                    <div>Do rozpoczęcia quizu potrzeba co najmniej 3 słówek</div>
                    <button> 
                        <NavLink to="/translate">
                            wróć do tłumaczenia
                        </NavLink> 
                    </button>
                </div>
            )
        }
    }
};

const mapStateToProps = (state) => {
    return {
      words: state.words
    }
};

export default connect(mapStateToProps, null)(Quiz);
// export default Quiz;