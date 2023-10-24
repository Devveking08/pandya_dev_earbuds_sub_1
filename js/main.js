(() => {
    // variables
    const model = document.querySelector("model-viewer");
    const hotspots = document.querySelectorAll(".Hotspot");
   
    const infoBoxes = [
       { 
         title: "Elegant Design",
         text: "Unique and elegant design, just like Red haired shanks from one piece, When you wear it you will vibe like an emperor of sound",
         image: "images/red-line.png",
       },
       {
         title: "Crisp and clear sound",
         text: "Crisp & clear sound necessary as world can be as unexpacted as the sea itself, so as the shanks we have to stay calm and for that we need out fav song or a meditation that u are craving for clear sound makes everything better", 
         image: "images/red-line.png",
       },
       {
         title: "LED Lights ",
         text: "Red LED lights, All around, This red light element the for the person this earphones are dedicated to the 4 billion berry bounty man RED HAIRED SHANKS, Join the red hairs today", 
         image: "images/red-line.png",
       },
       {
         title: "Comfort Fit ",
         text: "Everyone knows the journey of the life you wake up work leave and sleep we want everyone to listen to their fav songs while they are going through the hassles of the day and for that comfortable earbuds are must they are most comfortable and the lightest earbuds you can find in the entire grand line", 
         image: "images/red-line.png",
       },
       
    ];
   
    // functions
    function modelLoaded() {
       hotspots.forEach(hotspot => {
         hotspot.style.display = "block";
       });
    }
function loadInfo() {
 infoBoxes.forEach((infoBox, index) => {
    let selected = document.querySelector(`#hotspot-${index + 1}`);
    if (selected) {
       // Cleared the existing content
           while (selected.firstChild) {
            selected.removeChild(selected.firstChild);
         }
      let title = document.createElement('h2');
      title.textContent = infoBox.title;
      selected.appendChild(title);

      let text = document.createElement('p');
      text.textContent = infoBox.text;
      selected.appendChild(text);

      let image = document.createElement('img');
      image.src = infoBox.image;
      image.alt = infoBox.title;
      selected.appendChild(image);

      console.log(selected);
      console.log(infoBox.title);
      console.log(infoBox.text);
      console.log(infoBox.img);
    }
 });
}

    function showInfo() {
        const selected = document.querySelector(`#${this.slot}`);
        if (selected) {
          gsap.to(selected, 1, { autoAlpha: 1 });
        }
     }
    
     // Function to hide information box
     function hideInfo() {
        const selected = document.querySelector(`#${this.slot}`);
        if (selected) {
          gsap.to(selected, 1, { autoAlpha: 0 });
        }
     }
    
     // Event Listener
     model.addEventListener("load", modelLoaded);
    
     hotspots.forEach(function (hotspot) {
        hotspot.addEventListener("mouseover", showInfo);
        hotspot.addEventListener("mouseout", hideInfo);
        hotspot.addEventListener("click", loadInfo);
     });
    })();