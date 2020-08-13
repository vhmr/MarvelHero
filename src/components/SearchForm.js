import React, { Component } from "react";

//1110d20117f06855e88c4b8a43b432fdfa9c2b9590fb926bc51605a430980b05b4e281b91

export class SearchForm extends Component {
  state = {
    inputSearch: "",
  };

  _handleChange = (e) => {
    this.setState({ inputSearch: e.target.value });
  };

  _handleSubmit = (e) => {
    e.preventDefault();
    const { inputSearch } = this.state;
    fetch(
      `https://gateway.marvel.com/v1/public/characters?name=${inputSearch}&ts=1&apikey=0fb926bc51605a430980b05b4e281b91&hash=468c839c30211b0b94b8a316ef6cf3dc`
    )
      .then((res) => res.json())
      .then((results) => {
        console.log(results);
      });
  };

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Moive...."
              onChange={this._handleChange}
            />
          </div>
          <div className="control">
            <button className="button is-info">Search</button>
          </div>
        </div>
      </form>
    );
  }
}
