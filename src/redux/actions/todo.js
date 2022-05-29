export const fetchTodos = () => (dispatch) => {
   fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then((res) => {
         return res.json();
      })
      .then((data) => {
         dispatch(setTodo(data));
      });
};

export const fetchPostTodos = (value) => async (dispatch) => {
   const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({
         id: Math.random(),
         title: value,
         completed: false,
      }),
   });

   const data = await res.json();
   dispatch(addTodo(data.title));
};

export const fetchDeleteTodos = (id) => async (dispatch) => {
   await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE',
      headers: {
         'Content-Type': 'application/json',
      },
   });
   dispatch(removeTodo(id));
};

export const fetchOnCheckedTodos = (id, completed) => async (dispatch) => {
   await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'PATCH',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed }),
   });
   dispatch(checkedTodo(id));
};

export const setTodo = (todo) => ({
   type: 'TODO',
   payload: todo,
});

export const addTodo = (value) => ({
   type: 'ADD_TODO',
   payload: { id: Math.random(), title: value, completed: false },
});

export const removeTodo = (id) => ({
   type: 'REMOVE_TODO',
   payload: id,
});

export const checkedTodo = (id) => ({
   type: 'CHECKED_TODO',
   payload: id,
});

export const setValue = (value) => ({
   type: 'VALUE_TODO',
   payload: value,
});
