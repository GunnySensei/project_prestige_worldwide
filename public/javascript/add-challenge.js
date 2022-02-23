async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="challenge-title"]').value;
  const code_url = document.querySelector('input[name="code-url"]').value;

  const response = await fetch(`/api/codes`, {
    method: "POST",
    body: JSON.stringify({
      title,
      code_url,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/coding-challenges");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-challenge-form")
  .addEventListener("submit", newFormHandler);
