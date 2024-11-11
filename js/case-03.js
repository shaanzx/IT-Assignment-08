const music = document.getElementById("audio-file");
const light_count = 7;
let current_light = 0;
let direction = "RIGHT";
let intervalId = null;

updateLight = () => {
  if (direction === "RIGHT") {
    current_light++;
    $(".light").css("background", "white");
    $(".light").eq(current_light).css("background", "red");
    $(".light")
      .eq(current_light - 1)
      .css("background", "pink");

    if (current_light == light_count - 1) {
      direction = "LEFT";
    }
  } else {
    current_light--;
    $(".light").css("background", "white");
    $(".light").eq(current_light).css("background", "red");
    $(".light")
      .eq(current_light + 1)
      .css("background", "pink");

    if (current_light === 0) {
      direction = "RIGHT";
    }
  }
};

$("#btn-start").on("click", function () {
  intervalId = setInterval(updateLight, 100);
  music.play();
});

$("#btn-end").on("click", function () {
  clearInterval(intervalId);
  music.pause();
});
