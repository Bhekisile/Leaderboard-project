const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const saveScore = async (gameId, name, score) => {
  try {
    const response = await fetch(`${apiUrl}games/${gameId}/scores/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: name, score }),
    });
    const { result } = await response.json();
    return result;
  } catch (error) {
    return null;
  }
};
// saveScore();

export default saveScore;