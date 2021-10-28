import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    cats: [],
  };

  getImageUrl = async () => {
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
          <div className="cats">
            <h3>Loaded</h3>
            <div>
              {cats.map((cat) => (
                <img key={cat.id} src={cat.url} alt="cat" />
              ))}
            </div>
          </div>
        )}
      </section>
    );
  }
}

export default App;
