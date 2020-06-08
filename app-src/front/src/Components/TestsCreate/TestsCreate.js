import React,{Component} from 'react'
import Navbar from '../UI_Components/Navbar/Navbar'
import Footer from '../UI_Components/Footer/Footer'
import './style.css'
import TestsScreen from '../testScreen/testScreen'
import { connect } from 'react-redux'

import {add_Questions} from './../../Actions/index'

class TestsCreate extends Component{
    constructor(props){
        super(props)

        this.state = {
            problems:props.fromStore.TestsReducer,
            currentIndex:0
        }

        console.log(this.state.problems.length)
        
    }
    addOption = (event)=>{
        console.log("SF")
    }

    createTests = (event)=>{
        event.preventDefault()
        let question = event.target.question.value;
        let option1 = event.target.option1.value;
        let option2 = event.target.option2.value;
        let option3 = event.target.option3.value;
        let option4 = event.target.option4.value;
        if(question.length > 0 && option1.length > 0 && option2.length > 0 && option3.length > 0 && option4.length>0){
            let dispatch = this.props.dispatch;
            dispatch(add_Questions({
                question:question,
                options:[option1,option2,option3,option4]
            }))
        }else
        alert("Some Field may be missing")
    }
    render(){
        return <div> 
            <Navbar />
            <br />
                <div className='title is-1'>
                    Taking Tests ✍️ Was never easy
                </div>
                <div className='title is-3'>Now We're for that happen</div>
                <hr />
                <div className='columns' style={{background:"#f6f6f6"}} >
                    <div className='column is-two-thirds'>
                        <TestsScreen />
                    </div>
                    <div className='column' >    
                        <form onSubmit={this.createTests}>
                        <div class="field">
                            <label class="label">Add Question</label>
                            <div class="control">
                                <textarea class="textarea" id='question' type="text" placeholder="Add Question" />
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Option A</label>
                            <div class="control">
                                <input class="input is-success" id='option1' type="text" placeholder="Add Options data" /> 
                            </div>
                            {/* <p class="help is-success">This username is available</p> */}
                        </div>
                        <div class="field">
                            <label class="label">Option B</label>
                            <div class="control">
                                <input class="input is-success" id='option2' type="text" placeholder="Add Options data" /> 
                            </div>
                            {/* <p class="help is-success">This username is available</p> */}
                        </div>
                        <div class="field">
                            <label class="label">Option C</label>
                            <div class="control">
                                <input class="input is-success" type="text" id='option3' placeholder="Add Options data" /> 
                            </div>
                            {/* <p class="help is-success">This username is available</p> */}
                        </div>
                        <div class="field">
                            <label class="label">Option D</label>
                            <div class="control">
                                <input class="input is-success" type="text" id='option4' placeholder="Add Options data" /> 
                            </div>
                            {/* <p class="help is-success">This username is available</p> */}
                        </div>

                        {/* <div className='control'>
                            <button type='button' className='button is-primary is-rounded' onClick={this.addOption}> Add One More Option </button>
                        </div> */}

                        <hr />
                        <div class="field is-grouped">
                            <div class="control">
                                <button class="button is-link is-rounded"> Create </button>
                            </div>
                            <div class="control">
                                <button type='button' class="button is-link is-light">Add Question to Tests</button>
                            </div>
                        </div>

                        </form>
                    </div>
                    <div className='column'></div>
                </div>
            <Footer />
        </div>;
    }
}

const mapStatetoProps = (data)=>{
    return {
        fromStore:data
    }
}

export default connect(mapStatetoProps)(TestsCreate);