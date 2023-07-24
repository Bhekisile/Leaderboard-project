import './styles.css';
import gameScores from './modules/gameScores.js';
import saveScore from './modules/saveScore.js';
import getScores from './modules/getScores.js';

const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
let gameId;

const myGame = async () => {
  const storedGameId = localStorage.getItem('gameId');
  if (storedGameId) {
    gameId = storedGameId;
  } else {
    const response = await
    fetch(`${apiUrl}games/`, {
      method: 'POST',
      headers: {
        'Content-Type':
        'application/json',
      },
      body:
    JSON.stringify({ name: 'This is My New Game' }),
    });
    const data = await
    response.json();
    gameId = data.result;
    localStorage.setItem('gameId', gameId);
  }
};
myGame();

const refreshBtn = document.getElementById('refresh');
refreshBtn.addEventListener('click', async () => {
  const scores = await getScores(gameId);
  const scoresList = document.getElementById('score-list');
  scoresList.innerHTML = '';
  scores.forEach(({ user, score }) => {
    const li = gameScores(user, score);
    scoresList.appendChild(li);
  });
});

const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', async (event) => {
  event.preventDefault();
  const nameInput = document.getElementById('name');
  const scoreInput = document.getElementById('score');
  const { value: name } = nameInput;
  const { value: score } = scoreInput;
  await saveScore(gameId, name, score);

  nameInput.value = '';
  scoreInput.value = '';
});