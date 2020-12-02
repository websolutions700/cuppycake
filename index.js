window.onload = ()=> {
	var audio = document.querySelector('audio')
	window.onclick = ()=> {
		if (audio.paused) {
			audio.play();
			showlyrics();
		}
	}

	function showlyrics() {
		let lyrics = [
			'',
			'You\'re my honeybunch, sugar plum',
			'pumpy-umpy-umpkin',
			'You\'re my sweetie pie',
			'You\'re my cuppycake, gumdrop',
			'snoogums-boogums',
			'You\'re the apple of my eye',
			'And I love you so and I want you to know',
			'That I\'ll always be right here',
			'And I love to sing sweet songs to you',
			'Because you are so dear',
			''
		]

		let prev = document.querySelector('p.prev')
		let current = document.querySelector('p.current')
		let next = document.querySelector('p.next')

		prev.innerText = lyrics[0]
		current.innerText = lyrics[1]
		next.innerText = lyrics[2]

		setTimeout(()=> {
			prev.innerText = lyrics[1]
			current.innerText = lyrics[2]
			next.innerText = lyrics[3]
		}, 5600)

		setTimeout(()=> {
			prev.innerText = lyrics[2]
			current.innerText = lyrics[3]
			next.innerText = lyrics[4]
		}, 7700)

		setTimeout(()=> {
			prev.innerText = lyrics[3]
			current.innerText = lyrics[4]
			next.innerText = lyrics[5]
		}, 10000)

		setTimeout(()=> {
			prev.innerText = lyrics[4]
			current.innerText = lyrics[5]
			next.innerText = lyrics[6]
		}, 13800)

		setTimeout(()=> {
			prev.innerText = lyrics[5]
			current.innerText = lyrics[6]
			next.innerText = lyrics[7]
		}, 14800)

		setTimeout(()=> {
			prev.innerText = lyrics[6]
			current.innerText = lyrics[7]
			next.innerText = lyrics[8]
		}, 18700)

		setTimeout(()=> {
			prev.innerText = lyrics[7]
			current.innerText = lyrics[8]
			next.innerText = lyrics[9]
		}, 23000)

		setTimeout(()=> {
			prev.innerText = lyrics[8]
			current.innerText = lyrics[9]
			next.innerText = lyrics[10]
		}, 26000)

		setTimeout(()=> {
			prev.innerText = lyrics[9]
			current.innerText = lyrics[10]
			next.innerText = lyrics[11]
		}, 30700)


	}

}