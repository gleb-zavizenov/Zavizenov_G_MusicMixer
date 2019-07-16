(() => {
	//this is a self invoking anonymous function
	// also called a lamba, if you're into nerd speak
	console.log("working");

  let instruments = document.querySelectorAll(".instrument-icon");
  let dropZones = document.querySelectorAll(".drop-zone");

  dropZones.forEach(zone => {
		zone.addEventListener("dragover", function(e) {
			e.preventDefault();
			console.log("Element is over me!")
		});
		zone.addEventListener("drop", function(e) {
		// Prevents adding multiple instruments to same dropzone
			if (!zone.innerHTML) {
				let instrument = e.dataTransfer.getData("text/plain");
				e.target.appendChild(document.querySelector(`#${instruments}`));
				playAudio(instrument);
			} else {
				return;
			}
		});

	});



	// instrumentSelector.forEach(instrument => instrument.addEventListener("click", resetPuzzlePieces));

	function playAudio(audio){
		const audioTrack = document.querySelector(`[data-ref="${audio}"]`);
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
