import React from "react";
import axios from "axios";

import GithubUserList from "./components/GithubUserList";
import SearchForm from "./components/SearchForm";

import "./App.css";

const data = [
  {
    login: "viewgo",
    id: 41560150,
    node_id: "MDQ6VXNlcjQxNTYwMTUw",
    avatar_url: "https://avatars2.githubusercontent.com/u/41560150?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/viewgo",
    html_url: "https://github.com/viewgo",
    followers_url: "https://api.github.com/users/viewgo/followers",
    following_url: "https://api.github.com/users/viewgo/following{/other_user}",
    gists_url: "https://api.github.com/users/viewgo/gists{/gist_id}",
    starred_url: "https://api.github.com/users/viewgo/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/viewgo/subscriptions",
    organizations_url: "https://api.github.com/users/viewgo/orgs",
    repos_url: "https://api.github.com/users/viewgo/repos",
    events_url: "https://api.github.com/users/viewgo/events{/privacy}",
    received_events_url: "https://api.github.com/users/viewgo/received_events",
    type: "User",
    site_admin: false,
    name: "Hugo Oliveira",
    company: null,
    blog: "",
    location: "Kansas City",
    email: null,
    hireable: null,
    bio: "I code.",
    public_repos: 33,
    public_gists: 0,
    followers: 21,
    following: 35,
    created_at: "2018-07-23T03:14:24Z",
    updated_at: "2019-10-28T20:12:21Z"
  },
  {
    login: "Sara-DLC",
    id: 54650844,
    node_id: "MDQ6VXNlcjU0NjUwODQ0",
    avatar_url: "https://avatars3.githubusercontent.com/u/54650844?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/Sara-DLC",
    html_url: "https://github.com/Sara-DLC",
    followers_url: "https://api.github.com/users/Sara-DLC/followers",
    following_url: "https://api.github.com/users/Sara-DLC/following{/other_user}",
    gists_url: "https://api.github.com/users/Sara-DLC/gists{/gist_id}",
    starred_url: "https://api.github.com/users/Sara-DLC/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/Sara-DLC/subscriptions",
    organizations_url: "https://api.github.com/users/Sara-DLC/orgs",
    repos_url: "https://api.github.com/users/Sara-DLC/repos",
    events_url: "https://api.github.com/users/Sara-DLC/events{/privacy}",
    received_events_url: "https://api.github.com/users/Sara-DLC/received_events",
    type: "User",
    site_admin: false,
    name: "Sara De La Cruz",
    company: null,
    blog: "",
    location: "Omaha, NE",
    email: null,
    hireable: null,
    bio: "Full Stack Web Dev ",
    public_repos: 42,
    public_gists: 0,
    followers: 23,
    following: 29,
    created_at: "2019-08-29T00:33:39Z",
    updated_at: "2019-10-28T16:54:52Z"
    },
    {
      login: "Sara-DLC",
      id: 54650432,
      node_id: "MDQ6VXNlcjU0NjUwODQ0",
      avatar_url: "https://avatars3.githubusercontent.com/u/54650844?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/Sara-DLC",
      html_url: "https://github.com/Sara-DLC",
      followers_url: "https://api.github.com/users/Sara-DLC/followers",
      following_url: "https://api.github.com/users/Sara-DLC/following{/other_user}",
      gists_url: "https://api.github.com/users/Sara-DLC/gists{/gist_id}",
      starred_url: "https://api.github.com/users/Sara-DLC/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/Sara-DLC/subscriptions",
      organizations_url: "https://api.github.com/users/Sara-DLC/orgs",
      repos_url: "https://api.github.com/users/Sara-DLC/repos",
      events_url: "https://api.github.com/users/Sara-DLC/events{/privacy}",
      received_events_url: "https://api.github.com/users/Sara-DLC/received_events",
      type: "User",
      site_admin: false,
      name: "Sara De La Cruz",
      company: null,
      blog: "",
      location: "Omaha, NE",
      email: null,
      hireable: null,
      bio: "Full Stack Web Dev ",
      public_repos: 42,
      public_gists: 0,
      followers: 23,
      following: 29,
      created_at: "2019-08-29T00:33:39Z",
      updated_at: "2019-10-28T16:54:52Z"
      }
];

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [],
      search: ""
    };
  }

  searchInputChange = event => {
    this.setState({ search: event.target.value });
  };

  componentDidMount() {
    axios.get("https://api.github.com/users/viewgo").then(response => {
      this.setState({ users: [response.data] });

      axios.get("https://api.github.com/users/viewgo/followers").then(response => {
        const followers = response.data;

        followers.map(element => {
          axios.get(`${element.url}`).then(response => {
            const follower = response.data;
            this.setState({ users: [...this.state.users, follower] });
          });
        });
      });
    });

    // this.setState({users: data});

    console.log(this.state.users);
  }

  render() {
    console.log(this.state.search);
    return (
      
      <div className="container">
        <div className="App">
          <SearchForm search={this.state.search} searchInputChange={this.searchInputChange} />
          <GithubUserList search={this.state.search} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
