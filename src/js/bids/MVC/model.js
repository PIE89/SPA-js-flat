export async function getBids() {
  const queryString = `https://jsproject.webcademy.ru/bids`;
  try {
    let response = await fetch(queryString);
    let result = await response.json();
    return await result;
  } catch (error) {
    alert(error);
  }
}
