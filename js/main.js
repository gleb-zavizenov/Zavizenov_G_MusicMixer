(() => {

  let instruments = document.querySelectorAll(".instrument-icon");
  let dropZones = document.querySelectorAll(".dropzone");
	let playbtn = document.querySelector("#play-btn");
	let audioToPlay = [];
  let isPlaying = false;

	instruments.forEach(instrument => {
		instrument.addEventListener('dragstart', function(e){
			e.dataTransfer.setData("text/plain", this.dataset.ref);
		});
	})

  dropZones.forEach(zone => {
		zone.addEventListener("dragover", function(e) {
			e.preventDefault();
		});
		zone.addEventListener("drop", function(e) {
			// Prevents adding multiple instruments to same dropzone
			e.preventDefault();
			console.log("Dropped something on me!");

			let instrument = e.dataTransfer.getData("text/plain");
			console.log(instrument);

			if (zone.children.length === 0){
				e.target.appendChild(document.querySelector(`img[data-ref="${instrument}"]`));
			} else {
			  console.log("Zone already has an element");
			}
			audioToPlay.push(document.querySelector(`audio[data-ref="${instrument}"]`));
		});

	});

  playbtn.addEventListener('click', function(e){
    if(!isPlaying){
      audioToPlay.forEach(audio => {
        audio.play();
      });
      isPlaying = true;
      // 1. Change image to 'Stop'
    } else {
      isPlaying = false;
      audioToPlay.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
      // 2. Change image to 'play'
    }

  })

})();
