
import React, { Component } from "react";
import axios from "axios";

class Data extends Component {
  state = {
    people: []
  };

  componentDidMount() {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then(response => {
        this.successShow(response);
      })
      .catch(error => {
        this.successShow(error);
      });
  }

  successShow(response) {
    this.setState({
      people: response.data.data
    });
  }

  render() {
    console.log(this.state.people[0]);
    //this console log prints this:
    //{id: 1, first_name: "George", last_name: "Bluth", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"}

    console.log(this.state.people[1]);
    //this console log prints this:
    //{id: 2, first_name: "Janet", last_name: "Weaver", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"}

    return <div className="first">
<h1>Get data from api</h1>
 <ul>
    {this.state.people.map(({id, first_name, last_name, avatar}) => (
      <li key={id}>
        First Name: {first_name}
<br/>
<br/>
 Last Name: {last_name}
<br/>
<br/>
 avatar: {avatar}
<br/>
<br/>
      </li>))
    }
  </ul>

</div>;
  }
}
export default Data;