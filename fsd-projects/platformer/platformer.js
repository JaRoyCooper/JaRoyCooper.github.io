$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

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
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(118, 0, 233)",
    ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(420, 615, 60, 20);
    createPlatform(530, 545, 60, 20);
    createPlatform(215, 435, 60, 20);
    createPlatform(650, 435, 60, 20);
    createPlatform(199, 0, 1, 500);
    createPlatform(800, 400, 60, 20);
    createPlatform(950, 400, 60, 20);
    createPlatform(1110, 500, 60, 20);
    createPlatform(625, 275, 60, 20);
    createPlatform(215, 315, 60, 20);
    createPlatform(800, 200, 60, 20);
    createPlatform(925, 150, 60, 20);

    // TODO 3 - Create Collectables
    createCollectable("database", 225, 395, 0);
    createCollectable("database", 1120, 460, 0);
    createCollectable("database", 934, 115, 0);

    // TODO 4 - Create Cannons
    createCannon("left", 380, 1785);
    createCannon("top", 800, 825);
    createCannon("bottom", 845, 650);
    createCannon("top", 1075, 525);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
