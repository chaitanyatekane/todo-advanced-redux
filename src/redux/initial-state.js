// string into JSON object
export const initialState = JSON.parse(
  window.localStorage.getItem("my-todos")
) || {
  todos: [
    {
      id: 0,
      title: "Buy milk",
      current: true,
      completed: false,
      important: false,
      ongoing: false,
    },
    {
      id: 1,
      title: "Clean my room",
      current: false,
      completed: true,
      important: false,
      ongoing: false,
    },
    {
      id: 2,
      title: "Get medicines",
      current: true,
      completed: false,
      important: true,
      ongoing: false,
    },
    {
      id: 3,
      title: "Car service",
      current: false,
      completed: false,
      important: true,
      ongoing: true,
    },
    {
      id: 4,
      title: "Prepare for meeting",
      completed: true,
      important: false,
      ongoing: false,
    },
  ],
};
