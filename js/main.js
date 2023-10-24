(() => {
    // variables
    const model = document.querySelector("model-viewer");
    const hotspots = document.querySelectorAll(".Hotspot");
   
    const infoBoxes = [
       { 
         title: "Elegant Design",
         text: "Unique and elegant design, just like Red haired shanks from one piece, When you wear it you will vibe like an emperor of sound",
       },
       {
         title: "Crisp and clear sound",
         text: "Crisp & clear sound necessary as world can be as unexpacted as the sea itself, so as the shanks we have to stay calm and for that we need out fav song or a meditation that u are craving for clear sound makes everything better", 
       },
       {
         title: "LED Lights ",
         text: "Red LED lights, All around, This red light element the for the person this earphones are dedicated to the 4 billion berry bounty man RED HAIRED SHANKS, Join the red hairs today", 
       },
       {
         title: "Comfort Fit ",
         text: "Everyone knows the journey of the life you wake up work leave and sleep we want everyone to listen to their fav songs while they are going through the hassles of the day and for that comfortable earbuds are must they are most comfortable and the lightest earbuds you can find in the entire grand line", 
       },
       
    ];
   
    // functions
    function modelLoaded() {
       hotspots.forEach(hotspot => {
         hotspot.style.display = "block";
       });
    }
    function clickHotspot() {
        const index = Array.from(this.parentElement.children).indexOf(this);
        const selected = document.querySelector(`#${this.slot}`);
         
        // Get the selected info box object
        const selectedInfoBox = infoBoxes[index];
         
        // Created the title and text elements
        const titleElement = document.createElement('h2');
        titleElement.textContent = selectedInfoBox.title;
         
        const textElement = document.createElement('p');
        textElement.textContent = selectedInfoBox.text;
         
        // Cleared the existing content
        while (selected.firstChild) {
           selected.removeChild(selected.firstChild);
        }
         
        // Appended the title and text elements
        selected.appendChild(titleElement);
        selected.appendChild(textElement);
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
        hotspot.addEventListener("click", clickHotspot);
     });
    })();