import React from 'react';

class Reject extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = {};
    for (const field in this.refs) {
      formData[field] = this.refs[field].value;
    }
    console.log('-->', formData);
  }

  render() {
    return (
        <div>

          <form onSubmit={this.handleSubmit}>
            <input ref="username" className="phone" type='text' name="username"/>
            <input ref="password" className="email" type='password' name="password"/>
            <input type="submit" value="Submit"/>
          </form>

        </div>
    );
  }
}

export default Reject;
