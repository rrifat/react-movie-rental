import React, { Component } from "react";

class DisplayStat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firebaseRef: this.props.path
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Props", props);
    console.log("State", state);
    return { firebaseRef: props.path };
  }

  componentDidMount() {
    this.getData(this.state.firebaseRef);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Prev Props", prevProps);
    console.log("Prev State", prevState);
    console.log("This State", this.state);
  }

  getData(ref) {
    // ref.on("value", snapshot => {
    //   // perform some operations
    // });
    console.log("Print from getData", ref);
  }
  render() {
    return <div>DisplayStat</div>;
  }
}

export default DisplayStat;
