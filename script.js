document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // Event: Button click
    addButton.addEventListener('click', addTask);
  
    // Event: Press Enter key
    taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  
    function addTask() {
      const taskText = taskInput.value.trim();
  
      if (taskText === '') {
        alert('Please enter a task.');
        return;
      }
  
      // Create <li> element
      const li = document.createElement('li');
  
      // Create text node for task (NOT textContent or it’ll remove the button)
      const taskNode = document.createTextNode(taskText);
      li.appendChild(taskNode);
  
      // Create Remove Button
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.className = 'remove-btn';
  
      // Onclick: remove the entire li
      removeBtn.onclick = function() {
        taskList.removeChild(li);
      };
  
      // Append remove button to <li>
      li.appendChild(removeBtn);
  
      // Append <li> to <ul>
      taskList.appendChild(li);
  
      // Clear input field
      taskInput.value = '';
    }
  });
  