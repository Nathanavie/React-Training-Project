import React from 'react';
import GetJoke from './getJoke';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: [],
      isLoaded: false,
    };
  }

fetchJoke = () => {
  console.log('test')
  fetch('https://sv443.net/jokeapi/category/Any?blacklistFlags=nsfw')
  .then(response => response.json())
  .then(data => {
    this.setState ({
      joke: data,
      isLoaded: true,
    })
    console.log(this.state.joke);
  })
}

render() {
  if (!this.state.isLoaded) {
    return (
      <section>
        <GetJoke function={this.fetchJoke} />
      </section>
    )
  }
  if (this.state.joke.type === "twopart") {
    return (
      <section>
        <p>{this.state.joke.setup}</p>
        <p>{this.state.joke.delivery}</p>
                <GetJoke function={this.fetchJoke} />
      </section>
    )
  }
  else{
    return (
    <section>
      <h1>{this.state.joke.joke}</h1>
        <GetJoke function={this.fetchJoke} />
    </section>
    )
  }
}

}
export default Main;
