import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";
function CakeContainer(props) {
  console.log(props.numOfCakes);
  if (props.numOfCakes <= 0) {
    alert("cakes less than 0");
    return (
      <div>
        <h1>cakes are less than 0 so cant buy cake</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Number of cakes are :{props.numOfCakes}</h2>

        <button id="buyButton" onClick={props.buyCake}>
          buy cake
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    numOfCakes: state.numOfCakes
  };
};
const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
