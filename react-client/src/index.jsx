import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  render () {
    return (
      <h1>Pass Pass</h1>
      <div>Sign In Box Goes Here</div>
    )
  }
}

ReactDOM.render(<SignIn />, document.getElementById('signIn'));
