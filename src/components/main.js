import React from 'react';

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
        <button onClick={this.fetchJoke}>Get Joke</button>
      </section>
    )
  }
  if (this.state.joke.type === "twopart") {
    return (
      <section>
        <p>{this.state.joke.setup}</p>
        <p>{this.state.joke.delivery}</p>
                <button onClick={this.fetchJoke}>Get Joke</button>
      </section>
    )
  }
  else{
    return (
    <section>
      <h1>{this.state.joke.joke}</h1>
      <button onClick={this.fetchJoke}>Get Joke</button>
    </section>
    )
  }
}

}
export default Main;
