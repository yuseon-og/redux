import React from "react";
import {connect} from "react-redux";
import {deleteToDo} from "./store";

const Todo = ({text, id, dispatch, ownProps}) => {
  const onBtnClick = () => {
    dispatch(deleteToDo(ownProps.id));
  };
  return (
    <li>
      {text}
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  //   console.log(dispatch);
  //   console.log(ownProps);
  //   return {
  //     onBtnClick: () => dispatch(deleteToDo(ownProps.id)),
  //   };
  return {dispatch, ownProps};
};

export default connect(null, mapDispatchToProps)(Todo);
