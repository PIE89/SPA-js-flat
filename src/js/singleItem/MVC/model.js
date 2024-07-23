export async function getData(id) {
  try {
    const response = await fetch(`https://jsproject.webcademy.ru/items/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    alert(error);
  }
}

export async function submitForm(data) {
  const url = `https://jsproject.webcademy.ru/bidnew`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  return result;

}
