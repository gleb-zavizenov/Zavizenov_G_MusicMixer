(() => {
	//this is a self invoking anonymous function
	// also called a lamba, if you're into nerd speak
	console.log("working");

	const instruments = ["grand piano", "mike","guitar"," cd","shana"];
  let instrumentsSelector = document.querySelectorAll(".container img");
  let dropZones = document.querySelectorAll(".drop-zone");

  //Functions will start from here

  dropZones.forEach(zone => {
		zone.addEventListener("dragover", function(e) {
		e.preventDefault();
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


	function resetVariants() {
		// removes the instrument variants to display new ones
		iconDisplay.innerHTML = "";
		displayVariants(this.dataset.instrumentref);
		var images = document.getElementsByClassName("instrumentVariant");
    			while(images.length > 4){
        		images[4].parentNode.removeChild(images[4]);
        	}
	}

	// Event Handling below this

	instrumentSelector.forEach(instrument => instrument.addEventListener("click", resetVariants));

	displayVariants(0);

})();
