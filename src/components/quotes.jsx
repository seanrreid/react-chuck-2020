import React, { Component } from 'react';

class Quote extends Component {
  state = {
    quote: 'Chuck Norris does rad stuff!'
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        quote: 'Chuck waits for no one!!'
      });
    }, 2000);
  }

  render() {
    const { quote } = this.state;
    return <p>{quote}</p>;
  }
}

export default Quote;
