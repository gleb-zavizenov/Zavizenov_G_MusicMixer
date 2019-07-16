(() => {

  let instruments = document.querySelectorAll(".instrument-icon");
  let dropZones = document.querySelectorAll(".drop-zone");

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
			playAudio(instrument);
		});

	});



	// instrumentSelector.forEach(instrument => instrument.addEventListener("click", resetPuzzlePieces));

	function playAudio(audio){
		const audioTrack = document.querySelector(`audio[data-ref="${audio}"]`);
		console.log(audioTrack);
		audioTrack.play();
	}


	// function resetVariants() {
	// 	// removes the instrument variants to display new ones
	// 	iconDisplay.innerHTML = "";
	// 	displayVariants(this.dataset.instrumentref);
	// 	var images = document.getElementsByClassName("instrumentVariant");
  //   			while(images.length > 4){
  //       		images[4].parentNode.removeChild(images[4]);
  //       	}
	// }

	// Event Handling below this

	// instruments.forEach(instrument => instrument.addEventListener("click", resetVariants));

})();
