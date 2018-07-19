import React from "react";

class Admin extends React.Component {

  componentDidMount() {
    this.props.displayApplicants();
  }

  render() {
    const { applicants } = this.props

    return (
      <div>

        {Object.keys(applicants).map(item => {
          return (
            <ul key={applicants[item].id}>
              <li >
                <h4>First Name:</h4>
                <p>{applicants[item].firstName}</p>
              </li>
              <li>
                <h4>Last Name:</h4>
                <p>{applicants[item].lastName}</p>
              </li>
              <li>
                <h4>Reason:</h4>
                <p>{applicants[item].reason}</p>
              </li>
              <li>
                <h4>Email:</h4>
                <p>{applicants[item].email}</p>
              </li>
            </ul>
          )
        })}

      </div>)
  }
}

export default Admin;
