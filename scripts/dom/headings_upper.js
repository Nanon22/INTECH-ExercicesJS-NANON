let headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

headers.forEach(element => {
  element.innerText = element.innerText.toUpperCase()
});