import React from 'react'
import {Button, Card, ListGroup} from 'react-bootstrap'
import {connect} from 'react-redux';

class TestsScreen extends React.Component{
    constructor(props){
        super(props)


        console.log(props)
        this.state = {
            problems:props.fromStore.TestsReducer,
            currentIndex:0
        }
    }


    nextQuestion = ()=>{
        this.setState(prevState=>{
            if(prevState.currentIndex>=0 && prevState.currentIndex < prevState.problems.length-1){
                return {
                    ...prevState,currentIndex:prevState.currentIndex+1
                }
            }else{
                return prevState
            }
        })
    }

    prevQuestion = ()=>{
        this.setState(prevState=>{
            if(prevState.currentIndex>0 && prevState.currentIndex < prevState.problems.length){
                return {
                    ...prevState,currentIndex:prevState.currentIndex-1
                }
            }else{
                return prevState
            }
        })
    }

    render(){
        return (<section class="hero is-primary">
        <div class="hero-body">
            <div class="container">
            <div class="columns is-mobile is-centered">
                <div class="column is-half">
                <div class="has-text-centered">
                <h1 class="title has-text-centered">The awesome CSS quiz</h1>
                <h7 class="subtitle has-text-centered is-uppercase is-7 navigation">
                    QUESTION {this.state.currentIndex+1} OF {this.state.problems.length}
                </h7>
                <h5 class="subtitle has-text-centered is-5"> {this.state.problems[this.state.currentIndex].question} </h5>
                <p class="option has-text-grey-dark">
                    <span class="has-text-weight-bold is-size-5">A</span> 
                    {this.state.problems[this.state.currentIndex].options[0]}
                </p>
                <p class="option has-text-grey-dark">
                    <span class="has-text-weight-bold is-size-5">B</span>

                    {this.state.problems[this.state.currentIndex].options[1]}
                </p>
                <p class="option has-text-grey-dark">
                    <span class="has-text-weight-bold is-size-5">C</span>
                    {this.state.problems[this.state.currentIndex].options[2]}
                </p>
                <p class="option has-text-grey-dark">
                    <span class="has-text-weight-bold is-size-5">D</span>
                    {this.state.problems[this.state.currentIndex].options[3]}
                </p>
                <br />
                <div className='columns'>
                <a onClick={this.prevQuestion} style={{margin:'5px'}} class="button column is-primary is-inverted is-outlined is-rounded is-fullwidth">
                    Back
                </a>
                <a onClick={this.nextQuestion} style={{margin:'5px'}} class="button column is-white is-inverted is-outlined is-rounded is-fullwidth">
                    Move Forward
                </a>
                
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        </section>);
    }
}

const mapStateToProps = (data)=>{
    console.log(data)
    return {
        fromStore:data
    }
}

export default connect(mapStateToProps)(TestsScreen);