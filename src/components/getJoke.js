import React from 'react';

class GetJoke extends React.Component {
  render () {
    return (
      <>
        <button onClick={this.props.function}>Get Joke</button>
      </>
    )
  }
}
export default GetJoke;
