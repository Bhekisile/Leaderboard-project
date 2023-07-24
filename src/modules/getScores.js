const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const getScores = async (gameId) => {
  try {
    const response = await fetch(`${apiUrl}games/${gameId}/scores/`);
    if (!response.ok) {
      throw new Error('Failed to fetch game scores');
    }
    const { result } = await response.json();
    return result;
  } catch (error) {
    return null;
  }
};
export default getScores;