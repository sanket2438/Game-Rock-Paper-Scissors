const gameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".user_result img"),
    cpuResult = document.querySelector(".cpu_result img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image");

// Loop through each option image element 
optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        // Add "active" class to the clicked option and remove it from others
        optionImages.forEach(img => img.classList.remove("active"));
        image.classList.add("active");

        // Set initial "Wait..." state and apply shake effect by adding .start
        userResult.src = cpuResult.src = "images/rock.png"; // Reset images to rock
        result.textContent = "Wait...";  // Display waiting message

        gameContainer.classList.add("start"); // Add shake class to container
        console.log("Added .start class to container");  // Debugging log

        // Set a delay to remove the shake effect and show results
        setTimeout(() => {
            gameContainer.classList.remove("start"); // Remove shake class after delay
            console.log("Removed .start class from container");  // Debugging log

            // Get the image source of the clicked option
            let imageSrc = e.target.querySelector("img").src;
            userResult.src = imageSrc;  // Set user image to clicked option

            // Generate a random CPU choice
            let randomNumber = Math.floor(Math.random() * 3);
            let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
            cpuResult.src = cpuImages[randomNumber];

            // Determine the outcome
            let cpuValue = ["R", "P", "S"][randomNumber];
            let userValue = ["R", "P", "S"][index];
            let outcomes = {
                RR: "Draw",
                RP: "Cpu",
                RS: "User",
                PP: "Draw",
                PR: "User",
                PS: "Cpu",
                SS: "Draw",
                SR: "Cpu",
                SP: "User",
            };

            // Display the result
            let outcomeValue = outcomes[userValue + cpuValue];
            result.textContent = userValue === cpuValue ? "Match Draw" : `${outcomeValue} Won!`;

        }, 2500); // Delay for the shake animation
    });
});
