import React from 'react';
import { connect } from 'react-redux';
import { render } from 'react-dom';
import { Link } from 'react-router';
import Header from './Header'
import * as actionCreators from '../actions/actionCreators';

class Main extends React.Component {

  componentDidMount() {
    this.props.onMount();
  }

  componentDidUpdate() {
    const loginHandlers = <div>
      {(this.props.user.logged_in) ?
        <div>
          <span className="header-text">{this.props.user.username}</span>
          <a href="/logout"><button className='login-btn'>Logout</button></a>
        </div>
        :
        <div>
          <a href="/login"><button className='login-btn'>Log in</button></a>
          <a href="/login"><button className='register-btn'>Register</button></a>
        </div>
      }
    </div>
    render(loginHandlers, document.getElementById('login-handlers'));
  }

  render() {
    return (
      <div>
        <Header user={this.props.user} params={this.props.params}/>

        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onMount() {
      dispatch(actionCreators.getUser());
      dispatch(actionCreators.fetchCategories());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
