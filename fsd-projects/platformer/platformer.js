$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);
  document.body.style.overflow = "hidden";

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "red"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // Character object
    let character = {
      x: 50,
      y: 50,
      width: 20,
      height: 40,
      isDead: false,
    };

    // Ground object
    let ground = {
      x: 0,
      y: 300,
      width: 400,
      height: 50,
    };

    // Collision detection function
    function checkCollision(rect1, rect2) {
      return (
        rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y
      );
    }

    // Game loop
    function gameLoop() {
      if (!character.isDead) {
        // Character movement logic here
        // Example: character.y += 1; // Simple falling

        // Check for collision
        if (checkCollision(character, ground)) {
          character.isDead = true;
          console.log("Character died!");
          // Stop character movement, etc.
        }
      }

      // Drawing logic for character and ground here
      // ...

      requestAnimationFrame(gameLoop);
    }

    gameLoop();

    //
    document.body.style.backgroundImage =
      "url('https://t3.ftcdn.net/jpg/05/49/87/48/360_F_549874832_odaIb0fUsf27oYS6qXj392f5673mRSW5.jpg')";
    // TODO 1 - Enable the Grid
    //toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(500, 555, 130, 30, "lavender"); // top wall
    createPlatform(500, 450, 120, 30, "lavender"); // bottom wall
    createPlatform(100, 450, 120, 530, "lavender"); // left wall
    createPlatform(250, 720, 50, 1000, "lavender"); // right wall
    createPlatform(485, 720, 50, 1000, "lavender");
    createPlatform(0, 605, 20, 10, "lavender");
    createPlatform(0, 490, 20, 10, "lavender");
    createPlatform(650, 720, 50, 40, "lavender");
    createPlatform(800, 600, 50, 10, "lavender");
    createPlatform(400, 350, 50, 10, "lavender");
    createPlatform(1100, 450, 120, 1000, "lavender");
    createPlatform(1100, 400, 120, 1000, "lavender");
    createPlatform(1100, 0, 120, 270, "lavender");
    createPlatform(500, 250, 400, 10, "lavender");
    createPlatform(1000, 400, 100, 10, "lavender");
    createPlatform(1350, 290, 50, 10, "lavendner");
    createPlatform(1220, 170, 80, 10, "lavender");
    createPlatform(1220, 700, 200, 200, "green");
    createPlatform(0, 700, 100, 100, "green");
    createPlatform(1290,570,50,10,"lavender");
    createPlatform(1220, 470, 50, 10, "lavender");
    

    // TODO 3 - Create Collectables

    createCollectable("database", 250, 170, 0.5, 0.7);
    createCollectable("database", 550, 170, 0.5, 0.7);
    createCollectable("database", 820, 550, 1.2, 0.9);
    createCollectable("database", 1220, 110, 0.5, 0.5);
    createCollectable("database", 1300, 650, 0.5, 0.5);

    // TODO 4 - Create Cannons
    createCannon("left", 290, 1800, 40, 30);
    createCannon("bottom", 400, 1100, 10, 50);
    createCannon("left", 150, 1200, 40);
createCannon("left",710,100,100,60)
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
