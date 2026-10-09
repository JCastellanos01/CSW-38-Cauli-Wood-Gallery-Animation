
const images = document.getElementsByClassName("spin");

//function for pausing image spin when hovering and starting the spin
//when not hovering
function pauseAndRestartLogic() {
    for (let i = 0; i < images.length; i++) {
        let state = images[i];
        state.addEventListener("mouseenter", function() {
            state.style.animationPlayState = "paused";
        });

        state.addEventListener("mouseleave", function() {
            state.style.animationPlayState = "running";
        });
    }
}
pauseAndRestartLogic();