function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const taskText = taskInput.value.trim();
  
    if (taskText !== "") {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <span>${taskText}</span>
        <button onclick="removeTask(this)">Remove</button>
      `;
      taskList.appendChild(listItem);
      taskInput.value = "";
    }
  }
  
  function removeTask(button) {
    const listItem = button.parentElement;
    listItem.remove();
  }
  