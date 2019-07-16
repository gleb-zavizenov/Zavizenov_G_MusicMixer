(() => {
	//this is a self invoking anonymous function
	// also called a lamba, if you're into nerd speak
	console.log("working");

	const instruments = ["piano", "mike","guitar"," maracas","drum"," electric-guitar","trumpet","violin","rock-voice","blue-voice"];
          instrumentsSelector = document.querySelectorAll(".container img");
          audioTrack = document.querySelector('.audio')
          let dropZones = document.querySelector(".drop-zone");


     //Functions will start from here
    
   // function draggable() {
   // 	dropzone.querySelectorAll('img').forEach(img => {
   // 		img.addEventListener("dragstart", function(e) {
   // 			e.dataTransfer.setData("text/plain", this.id);
   // 		});
   // 	});
   // }
   dropzone.forEach(zone => {
		zone.addEventListener("dragover", function(e) {
			e.preventDefault();
		});

		zone.addEventListener("drop", function(e) {
			// Prevents adding multiple instruments to same dropzone
			if (!zone.innerHTML) {
			let instrument = e.dataTransfer.getData("text/plain");
			e.target.appendChild(document.querySelector(`#${instruments}`));
			playAudio(instrument);
		}
		else {
			return;
		}
		});
	});

	
	function playAudio(audio){
		const audioTrack = document.querySelector(`[data-ref="${audio}"]`);
		console.log(audioTrack);
		audioTrack.play();
	}

	function pauseAudio(audio){
		const audioTrack = document.querySelector(`[data-ref="${audio}"]`);
		console.log(audioTrack);
		audioTrack.pause();

	}


	// function resetVariants() {
	// 	// removes the instrument variants to display new ones
	// 	iconDisplay.innerHTML = "";
	// 	displayVariants(this.dataset.instrumentref);
	// 	var images = document.getElementsByClassName("instrumentVariant");
 //    			while(images.length > 3){
 //        		images[3].parentNode.removeChild(images[3]);
 //        	}
	// }

	// Event Handling below this

	// instrumentSelector.forEach(instrument => instrument.addEventListener("click", resetVariants));

	// displayVariants(0);

})();

