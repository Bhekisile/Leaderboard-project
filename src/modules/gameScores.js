const gameScores = (name, score) => {
  const li = document.createElement('li');
  li.textContent = `${name}: ${score}`;
  return li;
};
gameScores();

export default gameScores;