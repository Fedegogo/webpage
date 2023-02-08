const formElement = document.getElementById('input');

formElement.addEventListener('submit', event => {
  event.preventDefault();
  let getinput = document.getElementById('getInput').value;
  const data = {
    value: getinput
  };
  fetch('http://localhost:3000/hello', {
    method: 'Post',
    body: JSON.stringify(data)
  })
    .then(x => x.json())
    .then(console.log);
});

fetch('http://localhost:3000/hello')
  .then(x => x.json())
  .then(console.log);
