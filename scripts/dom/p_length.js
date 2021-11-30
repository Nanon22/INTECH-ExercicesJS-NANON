let paragraph = document.querySelectorAll('p');

paragraph.forEach(element => {
  element.insertAdjacentHTML('afterbegin', '<p>' + element.innerText.length + '</p>')
});