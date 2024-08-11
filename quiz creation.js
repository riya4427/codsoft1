function addQuestion() {
    const container = document.getElementById('questions-container');
    const questionCount = container.children.length + 1;

    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');

    questionDiv.innerHTML = `
        <h3>Question ${questionCount}</h3>
        <input type="text" name="question-${questionCount}" placeholder="Enter question" required>
        <input type="text" name="answer-${questionCount}-1" placeholder="Option 1" required>
        <input type="text" name="answer-${questionCount}-2" placeholder="Option 2" required>
        <input type="text" name="answer-${questionCount}-3" placeholder="Option 3">
        <input type="text" name="answer-${questionCount}-4" placeholder="Option 4">
        <input type="number" name="correct-answer-${questionCount}" min="1" max="4" placeholder="Correct answer (1-4)" required>
    `;

    container.appendChild(questionDiv);
}
