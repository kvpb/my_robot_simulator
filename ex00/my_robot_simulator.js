const directions = ["north", "east", "south", "west"];
function my_robot_simulator(instruction) {
  var movement = Array.from(instruction);
  var bearing = "north";
  var get_bearing;
  var x = 0;
  var y = 0;
  for (var i = 0; i < movement.length; i++) {
    if (movement[i] === "R") {
      get_bearing = (directions.indexOf(bearing) + 1) % 4;
      bearing = directions[get_bearing];
    } else if (movement[i] === "L") {
      get_bearing = (directions.indexOf(bearing) + 3) % 4;
      bearing = directions[get_bearing];
    } else if (movement[i] === "A") {
      switch (bearing) {
        case "north":
          y++;
          break;
        case "east":
          x++;
          break;
        case "south":
          y--;
          break;
        case "west":
          x--;
          break;
        default:
          return x;
      }
    } else {
        return 'Instruction given is invalid';
    }
  }
  if(y != 0) {
      y *= -1;
  }
  return `{x: ${x}, y: ${y}, bearing: '${bearing}'}`;
  

}

