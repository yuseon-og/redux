import React from "react";
import {useParams} from "react-router";
import {connect} from "react-redux";

function Detail(props) {
  //   const id = useParams();
  //   console.log(id);
  console.log(props.toDos.text);
  return (
    <>
      <h1>Details of ToDo</h1>
      <span>What you need to do is {props.toDos.text}</span>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: {id},
    },
  } = ownProps;

  console.log(id);

  return {toDos: state.find((ele) => ele.id === parseInt(id))};
}

export default connect(mapStateToProps)(Detail);
