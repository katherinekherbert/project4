import React, { Component } from 'react'


class LikeButton extends Component {
  constructor() {
    super();

  {this.state = {
    count: 0
  }}
  this.incrementMe = this.incrementMe.bind(this);
  }
  incrementMe() {
    let newCount = this.state.count + 1
    this.setState({
      count: newCount
    })
  }

  render() {
    

    return (
      <div>
        <button id='gold-button' onClick={this.incrementMe}>
          Likes: {this.state.count}
        </button>
       
      </div>
    )
  }
}

export default LikeButton;
