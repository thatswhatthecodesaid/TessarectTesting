import React,{Component} from 'react' 
import Navbar from '../UI_Components/Navbar/Navbar';
import Footer from '../UI_Components/Footer/Footer';
class Login extends Component{
    constructor(props){
        super(props)

        this.state = {

        }
    }
    
    render(){
        return <div >
            <Navbar />
            <br />  
            <article class="panel is-primary" style={{maxWidth:'600px',margin:'0px auto'}}>
                <p class="panel-heading">
                    Login Component
                </p>
                <div class="panel-block">
                    <p class="control has-icons-left">
                    <input class="input is-primary" type="text" placeholder="Search" />
                    <span class="icon is-left">
                        <i class="fas fa-search" aria-hidden="true"></i>
                    </span>
                    </p>
                    
                </div>
                <div class="panel-block">
                    <p class="control has-icons-left">
                        <button className='button is-primary' style={{margin:'0px auto'}}>Log Me In</button>
                    </p>
                    
                </div>
                </article>
                <br />
            <Footer />
        </div>;
    }
}
export default Login