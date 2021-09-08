import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailError: '',
      email: ''
    };
  }

handleTouchTap = () => {
    if(this.state.email == '' || this.state.email == null){
      this.setState({
      emailError: "Email cannot be empty"
    });
    }
    else if (!emailPattern.test(this.state.email) && this.state.email.length > 0) {
      this.setState({
        emailError: "Enter a valid email"
      });
    }
    }else{

      let data = {};
      data.email = this.state.email;
      // this.props.registerUser(data);
    }
  };

  changeEmail = (evt) => {
    this.setState({
        email: evt.target.value
      });
  }

  render() {
    return (
      <div>
        <div className="module row" style={{display: 'flex'}}>
          <section className="section">
            <h1>Create an account</h1> 
            <h3>It's free and always will be!</h3>  
            <imports.TextField errorText={this.state.emailError} floatingLabelText="Email" hintText="Enter your email" value={this.state.email} onChange={this.changeEmail} name="email" /> 
          </section>
          <section className="section">
            <div className="feature-link-carousel-cell">
              <a href="https://www.glassdoor.com/blog/do-race-gender-play-a-role-in-salary-negotiations/" data-ga-category="homepage" data-ga-lbl="marketing-whatsnew" data-ga-action="whats-new-click">
                <img width="960" data-original="https://media.glassdoor.com/home/feature-link/reviews/iStock_81884597_MEDIUM.jpg" className="lazy lazy-loaded" src="https://media.glassdoor.com/home/feature-link/reviews/iStock_81884597_MEDIUM.jpg" alt="Do Race &amp; Gender Play a Role in Salary Negotiations? A New Study Says Yes" style={{opacity: 1}}>
                </img>
              </a>
            </div>
          </section>
        </div>
      </div>
    );
  }
}