import React from "react";
import ReactDOM from "react-dom";

class Child extends React.Component {
    componentDidMount() {
      const { childRef } = this.props;
      childRef(this);
    }
    componentWillUnmount() {
     const { childRef } = this.props;
      childRef(undefined);
    }
    alertMessage() {
      window.alert('called from parent component');
    }
    render() {
      return <h1>Hello World!</h1>
    }
  }
  
  export default Child;

  class Parent extends React.Component {
    onClick = () => {
      this.child.alertMessage(); // do stuff
    }
    render() {
      return (
        <div>
          <Child childRef={ref => (this.child = ref)} />
          <button onClick={this.onClick}>Child.alertMessage()</button>
        </div>
      );
    }
  }

// ========================================

ReactDOM.render(<Parent />, document.getElementById("root"));