import React from 'react';
import 'tachyons';


class SignIn extends React.Component {

	constructor(props){

		super(props);
		this.state={

			signInEmail:'',
			SignInPassword:''
		}

	}

	onEmailChange = (event)=>{

		this.setState({signInEmail:event.target.value})
	}

	onPasswordChange = (event)=>{

		this.setState({SignInPassword:event.target.value})
	}

	onSubmitSignIn=()=>{
		fetch('http://localhost:3000/signin',{

			method:'post',
			headers:{'Content-Type':'application/json'},
			body:JSON.stringify({

				name:this.state.signInEmail,
				password:this.state.SignInPassword

			})

		}).then(response=>response.json())
		.then(user=>{

			if(user.id)
			{
				this.props.loadUser(user)
				this.props.onRouteChange('home')
			}

		})

		
	}

render(){
	const { onRouteChange } =this.props; 

	return(
			<article className="mw6 center  br3 pa3 shadow-5 pa4-ns mv3 ba b--black-10">
					<main className="pa4 black-80">
				  <form className="measure ">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f2 fw6 ph0 mh0">Sign In</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input 
				        onChange={ this.onEmailChange}
				        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        type="email" name="email-address"  
				        id="email-address" />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input 
				        onChange={this.onPasswordChange}
				        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        type="password" 
				        name="password"  id="password" />
				      </div>

				    </fieldset>
				    <div className="">
				      <input 
				      onClick={this.onSubmitSignIn}
				      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				      type="submit" 
				      value="Sign in" />
				    </div>
				    <div className="lh-copy mt3">

				      <a href="#0" 
				       onClick={()=> onRouteChange('register')}
				       className="f6 link dim black db">Register</a>
				    </div>
				  </form>
				</main>
				 	
			</article>
	);
}



}

export default SignIn;