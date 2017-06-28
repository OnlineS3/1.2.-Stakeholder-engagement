import React from 'react';
import { Link } from 'react-router';

class ServerView extends React.Component {
  constructor(props){
    super(props);
    this.state = {text:"testishit"};
  }

  componentDidMount(){
    fetch("/api/users")
      .then(res => {console.log("body", res.body); return res;})
      .then(res => res.json())
      .then(text => this.setState(text))
  }

  render(){
      return (
      <div>
        <h2>{this.state.text}</h2>
      </div>
    )
  }
}

export default ServerView;
