import React from "react";

class Apply extends React.Component {
  render() {
    console.log(this.props.application);
    return (
      <div className="application">
        <form
          className="application__form"
          onSubmit={event => {
            event.preventDefault();
            this.props.postApply(this.props.application);
          }}
        >
          <input
            onChange={event => {
              this.props.changeFirstName(event.target.value);
            }}
            type="text"
            name="firstName"
            placeholder="First name..."
            autoComplete="given-name"
            value={this.props.application.firstName}
          />
          <input
            onChange={event => {
              this.props.changeLastName(event.target.value);
            }}
            type="text"
            name="lastName"
            placeholder="Last name..."
            autoComplete="family-name"
            value={this.props.application.lastName}
          />
          <textarea
            onChange={event => {
              this.props.changeReason(event.target.value);
            }}
            className="application__reason"
            type="text"
            name="reason"
            placeholder="Explain your reason for applying. Remember, I will judge you."
            value={this.props.application.reason}
          />
          <input
            onChange={event => {
              this.props.changeEmail(event.target.value);
            }}
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@email.com"
            value={this.props.application.email}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Apply;
