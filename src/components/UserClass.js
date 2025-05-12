import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h1>Name: {this.props.name}</h1>
        <h3>Location: Pune</h3>
        <h4>Contact: 1234567890</h4>
      </div>
    );
  }
}

export default UserClass;
