import React from "react";

class Apply extends React.Component {
  constructor() {
    super();

    this.state = {
      toggleThanks: false
    };

    this.setThankYou = this.setThankYou.bind(this);
  }

  setThankYou() {
    this.setState({
      toggleThanks: !this.state.toggleThanks
    });
  }

  render() {
    return (
      <div className="application">
        <form
          className="application__form"
          onSubmit={event => {
            event.preventDefault();
            this.props.postApply(this.props.application);
          }}
        >
          <h3>APPLY BELOW!</h3>
          <input
            onChange={event => {
              this.props.changeFirstName(event.target.value);
            }}
            type="text"
            required
            name="firstName"
            placeholder="First name..."
            autoComplete="given-name"
            value={this.props.application.firstName}
          />
          <p />
          <input
            onChange={event => {
              this.props.changeLastName(event.target.value);
            }}
            type="text"
            required
            name="lastName"
            placeholder="Last name..."
            autoComplete="family-name"
            value={this.props.application.lastName}
          />
          <p />
          <textarea
            onChange={event => {
              this.props.changeReason(event.target.value);
            }}
            className="application__reason"
            type="text"
            required
            name="reason"
            placeholder="Explain your reason for applying. Remember, I will judge you."
            value={this.props.application.reason}
          />
          <p />
          <input
            onChange={event => {
              this.props.changeEmail(event.target.value);
            }}
            type="email"
            required
            name="email"
            autoComplete="email"
            placeholder="you@email.com"
            value={this.props.application.email}
          />
          <button onClick={this.setThankYou} className="application-button">
            Submit
          </button>
          <div className="thug__life">
            <img
              className={
                this.state.toggleThanks
                  ? "application__smoke"
                  : "application__smoke-hidden"
              }
              src={"./static/images/thug-smoke.png"}
            />

            <img
              className={
                this.state.toggleThanks
                  ? "animated 1 bounceIn application__thanks-popup"
                  : "application__thanks"
              }
              src="./static/images/dmitri-thanks.png"
            />
            <img
              className={
                this.state.toggleThanks
                  ? "application__glasses"
                  : "application__glasses-hidden"
              }
              src={"./static/images/thug-glasses.png"}
            />
            {this.state.toggleThanks ? (
              <iframe
                className="audio-file"
                src="./static/images/music.mp3"
                allow="autoplay"
              />
            ) : null}
          </div>
        </form>
      </div>
    );
  }
}

export default Apply;
