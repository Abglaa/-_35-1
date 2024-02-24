const toggleButtons = document.querySelectorAll('.toggleButton');
toggleButtons.forEach(button => {
    button.textContent = 'Показать ответ';
    const answer = button.nextElementSibling;
    answer.style.display = 'none';

    button.addEventListener('click', () => {
        if (answer.style.display === 'block' || answer.style.display === '') {
            answer.style.display = 'none';
            button.textContent = 'Показать ответ';
        } else {
            answer.style.display = 'block';
            button.textContent = 'Скрыть ответ';
        }
    });
});
