import React from "react";

class Admin extends React.Component {
  componentDidMount() {
    this.props.displayApplicants();
  }

  render() {
    console.log(this.props.applicants);
    return (
      <div>
        {this.props.applicants.map(item => {
          <ul>
            <li>
              <h4>First Name:</h4>
              <p>{item.firstName}</p>
            </li>
            <li>
              <h4>Last Name:</h4>
              <p>{item.lastName}</p>
            </li>
            <li>
              <h4>Reason:</h4>
              <p>{item.reason}</p>
            </li>
            <li>
              <h4>Email:</h4>
              <p>{item.email}</p>
            </li>
          </ul>;
        })}
      </div>
    );
  }
}

export default Admin;
