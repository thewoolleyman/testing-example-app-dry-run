export const sayHello = async () => {
  try {
    const response = await fetch('/.netlify/functions/authentication', {
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
