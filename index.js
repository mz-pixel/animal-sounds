var len = document.querySelectorAll("button").length;
for (var i = 0; i < len; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var text = this.innerHTML;
    buttonAni(text);
    if (text === "a") {
      var audio = new Audio("sounds/antelope.mp3");
      audio.play();
    } else if (text === "b") {
      var audio = new Audio("sounds/bat.mp3");
      audio.play();
    } else if (text === "c") {
      var audio = new Audio("sounds/cat.mp3");
      audio.play();
    } else if (text === "d") {
      var audio = new Audio("sounds/dog.mp3");
      audio.play();
    } else if (text === "e") {
      var audio = new Audio("sounds/elephant.mp3");
      audio.play();
    } else if (text === "f") {
      var audio = new Audio("sounds/falcon.mp3");
      audio.play();
    } else if (text === "g") {
      var audio = new Audio("sounds/dinosaur.mp3");
      audio.play();
    } else if (text === "h") {
      var audio = new Audio("sounds/horse.mp3");
      audio.play();
    } else if (text === "i") {
      var audio = new Audio("sounds/duck.mp3");
      audio.play();
    } else if (text === "j") {
      var audio = new Audio("sounds/lion.mp3");
      audio.play();
    } else if (text === "k") {
      var audio = new Audio("sounds/komodo-dragon.mp3");
      audio.play();
    } else if (text === "l") {
      var audio = new Audio("sounds/Leopard.mp3");
      audio.play();
    } else if (text === "m") {
      var audio = new Audio("sounds/moose.mp3");
      audio.play();
    } else if (text === "n") {
      var audio = new Audio("sounds/frog.mp3");
      audio.play();
    } else if (text === "o") {
      var audio = new Audio("sounds/owl.mp3");
      audio.play();
    } else if (text === "p") {
      var audio = new Audio("sounds/penguin.mp3");
      audio.play();
    } else if (text === "q") {
      var audio = new Audio("sounds/whale.mp3");
      audio.play();
    } else if (text === "r") {
      var audio = new Audio("sounds/rooster.mp3");
      audio.play();
    } else if (text === "t") {
      var audio = new Audio("sounds/tiger.mp3");
      audio.play();
    } else if (text === "s") {
      var audio = new Audio("sounds/sheep.mp3");
      audio.play();
    } else if (text === "u") {
      var audio = new Audio("sounds/panda.mp3");
      audio.play();
    } else if (text === "v") {
      var audio = new Audio("sounds/hyena.mp3");
      audio.play();
    } else if (text === "w") {
      var audio = new Audio("sounds/wolf.mp3");
      audio.play();
    } else if (text === "x") {
      var audio = new Audio("sounds/swan.mp3");
      audio.play();
    } else if (text === "y") {
      var audio = new Audio("sounds/yak.mp3");
      audio.play();
    } else if (text === "z") {
      var audio = new Audio("sounds/zebra.mp3");
      audio.play();
    } else {
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
    }
  });
}

document.addEventListener("keydown", function (event) {
  var text = event.key;
  buttonAni(text);
  if (text === "a") {
    var audio = new Audio("sounds/antelope.mp3");
    audio.play();
  } else if (text === "b") {
    var audio = new Audio("sounds/bat.mp3");
    audio.play();
  } else if (text === "c") {
    var audio = new Audio("sounds/cat.mp3");
    audio.play();
  } else if (text === "d") {
    var audio = new Audio("sounds/dog.mp3");
    audio.play();
  } else if (text === "e") {
    var audio = new Audio("sounds/elephant.mp3");
    audio.play();
  } else if (text === "f") {
    var audio = new Audio("sounds/falcon.mp3");
    audio.play();
  } else if (text === "g") {
    var audio = new Audio("sounds/dinosaur.mp3");
    audio.play();
  } else if (text === "h") {
    var audio = new Audio("sounds/horse.mp3");
    audio.play();
  } else if (text === "i") {
    var audio = new Audio("sounds/duck.mp3");
    audio.play();
  } else if (text === "j") {
    var audio = new Audio("sounds/lion.mp3");
    audio.play();
  } else if (text === "k") {
    var audio = new Audio("sounds/komodo-dragon.mp3");
    audio.play();
  } else if (text === "l") {
    var audio = new Audio("sounds/Leopard.mp3");
    audio.play();
  } else if (text === "m") {
    var audio = new Audio("sounds/moose.mp3");
    audio.play();
  } else if (text === "n") {
    var audio = new Audio("sounds/frog.mp3");
    audio.play();
  } else if (text === "o") {
    var audio = new Audio("sounds/owl.mp3");
    audio.play();
  } else if (text === "p") {
    var audio = new Audio("sounds/penguin.mp3");
    audio.play();
  } else if (text === "q") {
    var audio = new Audio("sounds/whale.mp3");
    audio.play();
  } else if (text === "r") {
    var audio = new Audio("sounds/rooster.mp3");
    audio.play();
  } else if (text === "t") {
    var audio = new Audio("sounds/tiger.mp3");
    audio.play();
  } else if (text === "s") {
    var audio = new Audio("sounds/sheep.mp3");
    audio.play();
  } else if (text === "u") {
    var audio = new Audio("sounds/panda.mp3");
    audio.play();
  } else if (text === "v") {
    var audio = new Audio("sounds/hyena.mp3");
    audio.play();
  } else if (text === "w") {
    var audio = new Audio("sounds/wolf.mp3");
    audio.play();
  } else if (text === "x") {
    var audio = new Audio("sounds/swan.mp3");
    audio.play();
  } else if (text === "y") {
    var audio = new Audio("sounds/yak.mp3");
    audio.play();
  } else if (text === "z") {
    var audio = new Audio("sounds/zebra.mp3");
    audio.play();
  } else {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  }
});

function buttonAni(currentKey) {
  var element = document.querySelector("." + currentKey);
  element.classList.toggle("pressed");
  setTimeout(function () {
    element.classList.toggle("pressed");
  }, 100);
}
