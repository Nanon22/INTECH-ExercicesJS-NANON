let div = document.querySelector('#myDiv');

let headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

let last = null

headers.forEach(element => {
  if(element.nodeName === 'H1') {
    last = insertElement(element, div)
  } else if (element.nodeName === 'H2') {
    last = insertElement(element, last.closest('.H1'));
  } else if (element.nodeName === 'H3') {
    last = insertElement(element, last.closest('.H2'));
  } else if (element.nodeName === 'H4') {
    last = insertElement(element, last.closest('.H3'));
  } else if (element.nodeName === 'H5') {
    last = insertElement(element, last.closest('.H4'));
  } else if (element.nodeName === 'H6') {
    last = insertElement(element, last.closest('.H5'));
  }
});

function insertElement(element, parent) {
  if(parent.children[0] && parent.children[0].nodeName === 'ol') {
    parent.children[0].insertAdjacentHTML('beforeend', '<li class="'+ element.nodeName + '">' + element.innerText + '</li>')
  } else {
    parent.insertAdjacentElement('beforeend', document.createElement('ol'));
    parent.children[0].insertAdjacentHTML('beforeend', '<li class="'+ element.nodeName + '">' + element.innerText + '</li>')
  }
  return parent.children[0].lastChild
}