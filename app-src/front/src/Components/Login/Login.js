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
                <a class="panel-block is-active">
                    <span class="panel-icon">
                    <i class="fas fa-book" aria-hidden="true"></i>
                    </span>
                    bulma
                </a>
                <a class="panel-block">
                    <span class="panel-icon">
                    <i class="fas fa-book" aria-hidden="true"></i>
                    </span>
                    marksheet
                </a>
                <a class="panel-block">
                    <span class="panel-icon">
                    <i class="fas fa-book" aria-hidden="true"></i>
                    </span>
                    minireset.css
                </a>
                <a class="panel-block">
                    <span class="panel-icon">
                    <i class="fas fa-book" aria-hidden="true"></i>
                    </span>
                    jgthms.github.io
                </a>
                </article>
                <br />
            <Footer />
        </div>;
    }
}
export default Login