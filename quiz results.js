document.addEventListener('DOMContentLoaded', function () {
    // Example function to show results
    const resultsContainer = document.getElementById('results-container');
    // Fetch quiz results and show
    fetchQuizResults().then(results => {
        resultsContainer.innerHTML = `
            <h2>Your Score: ${results.score}</h2>
            <h3>Correct Answers:</h3>
            <ul>
                ${results.correctAnswers.map(answer => `<li>${answer}</li>`).join('')}
            </ul>
        `;
    });
});
