// import React from "react";
// import ReactDOM from "react-dom";

// import App from "./App";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

//   기본 리엑트 프로젝트 여기까지

// const add = document.getElementById("add");
// const minus = document.getElementById("minus");
// const number = document.querySelector("span");

// let count = 0;

// number.innerText = count;

// const updateText = () => {
//   number.innerText = count;
// };

// const handleAdd = () => {
//   count++;
//   updateText();
// };

// const handleMinus = () => {
//   count--;
//   updateText();
// };

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);

// 바닐라 자바스크립트 프로젝트 여기까지

// import {createStore} from "redux";

// const ADD = "ADD";
// const MINUS = "MINUS";

// const add = document.getElementById("add");
// const minus = document.getElementById("minus");
// const number = document.querySelector("span");

// const countModifier = (count = 0, action) => {
//   switch (action.type) {
//     case ADD:
//       return count + 1;
//     case MINUS:
//       return count - 1;
//     default:
//       return count;
//   }
// };

// const countStore = createStore(countModifier);

// const onChange = () => {
//   number.innerText = countStore.getState();
//   console.log(countStore.getState());
// };

// countStore.subscribe(onChange);

// const handleAdd = () => {
//   countStore.dispatch({type: ADD});
// };

// const handleMinus = () => {
//   countStore.dispatch({type: MINUS});
// };

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);

// 바닐라JS로 redux for count

// Now vanila JS Redux for Todos

import {createStore} from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addTodo = (text) => {
  return {type: ADD_TODO, text};
};
const deleteTodo = (id) => {
  return {type: DELETE_TODO, id};
};

const reducer = (state = [], action) => {
  // console.log(action);
  // console.log(action.text);
  switch (action.type) {
    case ADD_TODO:
      return [{text: action.text, id: Date.now()}, ...state];
    case DELETE_TODO:
      return state.filter((element) => element.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const dispatchAddTodo = (text) => {
  store.dispatch(addTodo(text));
};

const dispatchdeleteTodo = (event) => {
  const id = parseInt(event.target.parentNode.id);
  console.log(id);

  store.dispatch(deleteTodo(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    li.id = toDo.id;
    li.innerText = toDo.text;
    ul.appendChild(li);
    li.appendChild(btn);
    btn.addEventListener("click", dispatchdeleteTodo);
  });
};
store.subscribe(paintToDos);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddTodo(toDo);
  // createToDo(toDo);
};

form.addEventListener("submit", onSubmit);
