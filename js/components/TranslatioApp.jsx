import React from 'react';
import { connect } from 'react-redux';
import { addNewWord } from '../actions';
import Translate from './Translate.jsx';

class TranslationApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            url: '',
            phraseEntered: '',
            translatedTo: [],
            translatedPhrases: [],
            newTranslation: [],
            error: false,
            visibility: false
        };
    }

    handlePhraseEntered = (e) => {
        this.setState({
            phraseEntered: e.target.value,
            url: 'https://glosbe.com/gapi/translate?from=eng&dest=pol&format=json&phrase='+e.target.value,
            translatedTo: [],
            visibility: false
        })
    };

    handleTranslate = (e) => {
        e.preventDefault();
        let translatedToList = [];

        fetch(this.state.url)
            .then(r => r.json())
            .then( data => {
                console.log(data);
                if(data.tuc.length===0){
                    this.setState({
                        error: true
                    });
                } else {
                    this.setState({
                        error: false
                    });
                    for(let i=0; (i<data.tuc.length && i<3); i++){
                        translatedToList.push(data.tuc[i].phrase.text)
                }
                    let newTranslation = {
                        translatedFrom: this.state.phraseEntered,
                        translatedTo: translatedToList
                    };
                    this.setState({
                        error: false,
                        translatedTo: translatedToList,
                        newTranslation: newTranslation,
                        visibility: true
                    });
                }
            }).catch(()=>{
                this.setState({
                    error: true

                });
        })
    };

    handleAddWord = () => {
        this.props.addNewWord({
            translatedFrom: this.state.phraseEntered,
            translatedTo: this.state.translatedTo,
        });

        this.setState({
            translatedPhrases: this.state.phraseEntered.concat(this.state.newTranslation),
            visibility: false,
            translatedTo: [],
            phraseEntered: ''
        });
    };

    handleOtherTranslation = ()=>{
        this.setState({
            error: false,
            phraseEntered: '',
            translatedTo: []
        });
    };

    render(){
        return(
            <Translate
                translation={this.state.translatedPhrases}
                translatedTo={this.state.translatedTo}
                phraseEntered={this.state.phraseEntered}
                onPhraseEnter={this.handlePhraseEntered}
                onTranslate={this.handleTranslate}
                onNewWord={this.handleAddWord}
                error={this.state.error}
                onOtherTranslation={this.handleOtherTranslation}
                visibility={this.state.visibility}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
      words: state.words
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewWord: (newWord) => {
            dispatch(addNewWord(newWord))
        }
    };
};

  
export default connect(mapStateToProps, mapDispatchToProps)(TranslationApp);