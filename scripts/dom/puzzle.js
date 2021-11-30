const rotate = ['rotate(0deg)', 'rotate(90deg)', 'rotate(180deg)', 'rotate(270deg)']

			function sleep(ms) {
				return new Promise(resolve => setTimeout(resolve, ms));
			}

      function divideImg()  {
        let size = parseInt(document.querySelector('#cells-quantity').value);
        let container = document.querySelector('#imgContainer');
				let navTitle = document.querySelector('title');

				if(navTitle.innerText === "Gagné !") {
					let title = document.querySelector('#title');
					title.innerText = 'Rotate Puzzle';
					navTitle.innerText = 'Rotate Puzzle';
				}
				
        let dimension = (500 / size) - 2;
				
				container.innerHTML = '';
        for(let i = 0; i < size; i++) {
          for(let j = 0; j < size; j++) {
            let newDiv = document.createElement('div');

            let spanX = dimension * j; 
            let spanY = dimension * i;
            
            newDiv.style.minHeight = dimension + 'px';
            newDiv.style.minWidth = dimension + 'px';
            newDiv.style.backgroundImage = "url('../assets/moon.png')";
						newDiv.style.backgroundSize= '500px 500px'
            newDiv.style.backgroundPositionX = -spanX + 'px';
            newDiv.style.backgroundPositionY = -spanY + 'px';
						newDiv.style.border = '1px yellow solid';
						newDiv.style.transform = rotate[getRandomInt(1, rotate.length)]

						newDiv.addEventListener("click", rotateOnClick);
						
            container.insertAdjacentElement('beforeend', newDiv)
          }
        }
      }

			function rotateOnClick(event) {
				
				event.target.style.transform = event.target.style.transform ? rotate[(rotate.findIndex(x => x === event.target.style.transform) + 1) % rotate.length] : 'rotate(90deg)';

				if(checkPuzzle()) {
					let title = document.querySelector('#title');
					let navTitle = document.querySelector('title');
					title.innerText = 'Gagné !';
					navTitle.innerText = 'Gagné !';
				}
				
			}

			function resetImage() {

				let container = document.querySelector('#imgContainer');
				let gen = resetImageGenerator(container.childNodes[0]);
				setInterval(() => { if(gen.next().done) { clearInterval } }, 150);
					
			}

			function* resetImageGenerator(element) {
				while (element.style.transform !== 'rotate(0deg)' && element != null) {
					yield element;
					element.dispatchEvent(new Event('click'));
					if(element.style.transform === 'rotate(0deg)') {
						element = element.nextSibling
					}
				}
			}

			function checkPuzzle() {
				let container = document.querySelector('#imgContainer');
				for(let i = 0; i < container.childNodes.length; i++) {
					if(container.childNodes[i].style.transform !== 'rotate(0deg)') {
						return false;
					}
				}
				return true;
			}

			function getRandomInt(min, max) {
				min = Math.ceil(min);
				max = Math.floor(max);
				return Math.floor(Math.random() * (max - min)) + min;
			}