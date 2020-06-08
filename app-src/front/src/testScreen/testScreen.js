import React from 'react'

const API = "url";
const DEFAULT_QUERY = "default";


class Question extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            question:[],
        };
    }

    componentDidMount(){
        fetch(API+DEFAULT_QUERY)
        .then(response => response.json)
        .then(data=>this.setState({question: data.question}));
        
    }

    render(){
        const { question } = this.state;
        return(

            <div class="card">
            <div class="card-content">
                  <p class="title is-4"></p>
                  <p>question.body</p>
                  <div class="control">
                    <label class="radio">
                    <input type="radio" name="answer" />
                    question.option1
                    </label>
                    <label class="radio">
                    <input type="radio" name="answer" />
                    question.option2
                    </label>
                    <label class="radio">
                    <input type="radio" name="answer" />
                    question.option3
                    </label>
                    <label class="radio">
                    <input type="radio" name="answer" />
                    question.option4
                    </label>
                    </div>
              </div>
            </div>
        );
    }
}

export default Question;