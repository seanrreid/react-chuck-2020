import React, { Component } from "react";

class Quote extends Component {
    render() {
        console.log("this.props ", this.props);
        const { quote } = this.props;
        return (
            <p>{quote}</p>
        );
    }
}

export default Quote;
