import './styles.css';

const form = document.querySelector('form');
const scoreList = document.getElementById('score-list');

const scores = JSON.parse(localStorage.getItem('scores')) || [];

function Score(name, score) {
  this.name = name;
  this.score = score;
}

const displayScores = () => {
  scoreList.innerHTML = '';
  scores.forEach((recentScore) => {
    const newScore = document.createElement('li');
    newScore.classList.add('newScore');
    newScore.innerHTML = `<p>${recentScore.name} ${recentScore.score}`;
    scoreList.appendChild(newScore);
  });
};
displayScores();

const addScore = (name, score) => {
  const newScore = new Score(name, score);
  scores.push(newScore);
  localStorage.setItem('scores', JSON.stringify(scores));
  displayScores();
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nameInput = document.getElementById('name');
  const scoreInput = document.getElementById('score');
  const name = nameInput.value;
  const score = scoreInput.value;
  if (name.trim() !== '' && score.trim() !== '') {
    addScore(name, score);
  }
  nameInput.value = '';
  scoreInput.value = '';
});