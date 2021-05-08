
// Create reducer
const reducer = Redux.combineReducers({
  todos: (state = [], action) => {
    const newState = Object.assign([], state);
    if (action.type == "add") {
      newState.push(action.item);
    }
    return newState;
  }
});

// Create Store
const store = Redux.createStore(reducer);

// Render to html
const render = () => {
  // Render to content element
  const content = document.getElementById("content");
  content.innerHTML = "";
  // Get state and loop redux
  const state = store.getState();
  state.todos.forEach((todo) => {
    const e = document.createElement("div");
    e.innerHTML = todo;
    content.appendChild(e);
  });
}

document.getElementById("submit-todo").onclick = () => {
  store.dispatch({
    type: "add",
    item: document.getElementById("todo").value
  });
  render();
};
