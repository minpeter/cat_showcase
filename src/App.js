import React from "react";
import axios from "axios";
import Cat from "./Cat.js";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    cats: [],
  };

  getImageUrl = async () => {
    this.setState({ isLoading: true });
    const { data } = await axios.get(
      "https://api.thecatapi.com/v1/images/search"
    );
    this.setState({ cats: data, isLoading: false });
  };

  componentDidMount() {
    this.getImageUrl();
  }

  render() {
    const { isLoading, cats } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div>
            <div className="cats">
              {cats.map((cat) => (
                <Cat key={cat.id} id={cat.id} imageURL={cat.url} />
              ))}
            </div>

            <button className="newimgbutton" onClick={this.getImageUrl}>
              ✨ NEW image
            </button>
          </div>
        )}
      </section>
    );
  }
}

export default App;
