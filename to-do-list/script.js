const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const taskText = input.value.trim();
  if (taskText !== '') {
    addTask(taskText);
    input.value = '';
    input.focus();
  }
});

function addTask(text) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span class="task-text">${text}</span>
    <div class="actions">
      <button class="done-btn">✔</button>
      <button class="edit-btn">✏</button>
      <button class="delete-btn">🗑</button>
    </div>
  `;

  // Botões
  const doneBtn = li.querySelector('.done-btn');
  const editBtn = li.querySelector('.edit-btn');
  const deleteBtn = li.querySelector('.delete-btn');
  const taskTextEl = li.querySelector('.task-text');

  doneBtn.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  editBtn.addEventListener('click', () => {
    const newText = prompt('Editar tarefa:', taskTextEl.textContent);
    if (newText !== null && newText.trim() !== '') {
      taskTextEl.textContent = newText.trim();
    }
  });

  deleteBtn.addEventListener('click', () => {
    if (confirm('Deseja realmente excluir esta tarefa?')) {
      li.remove();
    }
  });

  list.appendChild(li);
}
