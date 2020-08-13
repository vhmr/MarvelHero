import React, { Component } from "react";
import { SearchForm } from "../components/SearchForm";

export class Home extends Component {
  state = { useSearch: false, results: [] };

  componentDidMount() {
    fetch(
      `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=0fb926bc51605a430980b05b4e281b91&hash=468c839c30211b0b94b8a316ef6cf3dc`
    )
      .then((res) => res.json())
      .then((personajes) => {
        console.log(personajes);
      });
  }
  render() {
    return (
      <>
        <SearchForm />
      </>
    );
  }
}
