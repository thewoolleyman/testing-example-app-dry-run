export const generateMessageOnServer = async (message) => {
  try {
    const response = await fetch(`/.netlify/functions/authentication?name=${message}`, {
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const data = await response.json();
    return data.message;
  } catch (err) {
    return err.message;
  }
};
