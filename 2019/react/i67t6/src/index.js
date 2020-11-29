import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import Content from "./content";
import "./styles.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      movies: [],
      selectedMovies: []
    };
  }

  componentDidMount() {
    (async () => {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=d7fc424ee402bd0666f5f420c5201966&page=1&region=CH"
        );
        const json = await res.json();
        setTimeout(() => {
          this.setState({
            ...this.state,
            movies: json.results,
            isLoading: false
          });
        }, 1000);
      } catch (error) {
        console.log(error);
        this.setState({
          ...this.state,
          isLoading: false
        });
      }
    })();
  }

  handlePosterClick = id => {
    if (this.state.selectedMovies.includes(id)) {
      this.setState({
        ...this.state,
        selectedMovies: this.state.selectedMovies.filter(
          existingId => existingId !== id
        )
      });
    } else {
      this.setState({
        ...this.state,
        selectedMovies: [...this.state.selectedMovies, id]
      });
    }
  };

  render() {
    return (
      <div className="app">
        <Header count={this.state.selectedMovies.length} />
        <Content
          isLoading={this.state.isLoading}
          movies={this.state.movies}
          selectedMovies={this.state.selectedMovies}
          handlePosterClick={this.handlePosterClick}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
