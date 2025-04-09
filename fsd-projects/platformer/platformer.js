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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(100,                                         610, 1300, 15, "blue"); 
    createPlatform(0, 480, 1300, 15, "blue");
    createPlatform(100, 350, 1300, 15, "blue");
    createPlatform(0, 210, 1300, 15, "blue");
    


    // TODO 3 - Create Collectables
    createCollectable("database", 1330, 530, 0, 0);
    createCollectable("database", 1330, 680, 0, 0);
    createCollectable("database", 100, 450, 0, 0);
    createCollectable("database", 1330, 300, 0, 0);
    // TODO 4 - Create Cannons
    createCannon("top", 200, 1000);
    createCannon("top", 350, 900);
    createCannon("top", 500, 1000);
    createCannon("top", 650, 900);
    createCannon("top", 770, 1000);
    createCannon("top", 900, 900);
    createCannon("top", 1020, 1000);
    createCannon("top", 1150, 900);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
