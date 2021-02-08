import {Component} from 'react';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';


class SignIn extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]:value})
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''});
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    label='email'
                    handleChange={this.handleChange}
                    name='email' 
                    type='email' 
                    value={this.state.email} 
                    required />

                    <FormInput 
                    handleChange={this.handleChange}
                    name='password' 
                    label='password'
                    type='password' 
                    value={this.state.password} 
                    required />
                    <div className="buttons">
                        <CustomButton type='submit' >SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>SIGN IN with GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;


