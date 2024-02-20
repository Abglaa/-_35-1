const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const deleteModal = document.getElementById('deleteModal');
const editModal = document.getElementById('editModal');
const confirmDeleteButton = document.querySelector('.confirm-delete-btn');
const confirmEditButton = document.querySelector('.confirm-edit-btn');
const cancelButton = document.querySelectorAll('.cancel-btn');
const editInput = document.getElementById('editInput');
let currentTask;

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const task = document.createElement('div');
        task.classList.add('task');
        task.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="delete-btn">Удалить</button>
            <button class="edit-btn">Редактировать</button>
        `;
        taskList.appendChild(task);
        taskInput.value = '';
    }
}

function deleteTask() {
    currentTask.remove();
    deleteModal.style.display = 'none';
}

function editTask() {
    const newText = editInput.value;
    currentTask.querySelector('.task-text').textContent = newText;
    editModal.style.display = 'none';
}

addTaskBtn.addEventListener('click', addTask);

taskList.addEventListener('click', event => {
    if (event.target.classList.contains('delete-btn')) {
        deleteModal.style.display = 'block';
        currentTask = event.target.closest('.task');
    }
});

taskList.addEventListener('click', event => {
    if (event.target.classList.contains('edit-btn')) {
        editModal.style.display = 'block';
        currentTask = event.target.closest('.task');
        const taskText = currentTask.querySelector('.task-text').textContent;
        editInput.value = taskText;
    }
});

confirmDeleteButton.addEventListener('click', deleteTask);

confirmEditButton.addEventListener('click', editTask);

cancelButton.forEach(button => {
    button.addEventListener('click', () => {
        deleteModal.style.display = 'none';
        editModal.style.display = 'none';
    });
});
