import React, {useState} from "react";
import {connect} from "react-redux";
import {addToDo} from "../store";
import Todo from "../ToDo";

function Home({toDos, dispatch}) {
  //   console.log(props);
  const [text, setText] = useState("");
  const onChange = (event) => {
    setText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(text);
    setText("");
    dispatch(addToDo(text));
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="write to do"
          value={text}
          onChange={onChange}
        />
        <button>Create</button>
      </form>
      <ul>
        {toDos.map((todo) => (
          <Todo text={todo.text} id={todo.id} key={todo.id} />
        ))}
      </ul>
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  //   console.log(state, ownProps);
  return {toDos: state};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  //   console.log(dispatch);
  return {dispatch};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
