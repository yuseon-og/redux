import React from "react";
import {connect} from "react-redux";
import {deleteToDo} from "./store";
import {Link} from "react-router-dom";

const Todo = ({text, id, dispatch, ownProps}) => {
  // console.log(text, id, dispatch, ownProps);
  const onBtnClick = () => {
    dispatch(deleteToDo(id));
  };
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
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
