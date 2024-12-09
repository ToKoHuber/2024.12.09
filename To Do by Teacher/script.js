const containerItems = [
  {
    title: "To do",
    count: 5,
    color: "white",
  },
  {
    title: "In progress",
    count: 5,
    color: "white",
  },
  {
    title: "Done",
    count: 5,
    color: "green",
  },
  {
    title: "Blocked",
    count: 5,
    color: "red",
  },
];

function addTaskList(title, color, count) {
  const taskContainer2 = document.querySelector("#taskContainer");
  const todoList = document.createElement("div");
  todoList.setAttribute("class", "todoList");
  const titleDiv = document.createElement("div");
  titleDiv.setAttribute("class", "title");
  todoList.appendChild(titleDiv);
  const h2 = document.createElement("h2");
  h2.innerText = title;
  const cirlce = document.createElement("div");
  cirlce.setAttribute("class", "circle");
  cirlce.style.backgroundColor = color;
  titleDiv.appendChild(cirlce);
  titleDiv.appendChild(h2);
  taskContainer2.appendChild(todoList);
}

addTaskList(
  containerItems[0].title,
  containerItems[0].color,
  containerItems[0].count
);
