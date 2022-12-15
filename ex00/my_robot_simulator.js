/**
 * Copyright (c) 2021
 *
 * https://upskill.us.qwasar.io/projects/my_robot_simulator
 *
 * @summary A robot simulator.
 * @author onoja_a <local-part@domain>
 * @author bertin_k <local-part@domain>
 *
 * Created 
 * Last modified 
 */

const directions = ["north", "east", "south", "west"];

function my_robot_simulator(instructions)
{
	var movements = Array.from(instructions);
	var bearing = 'north';
	var get_bearing;
	var x = 0;
	var y = 0;
	var i = 0;
	var n = movements.length;

	for ( i = 0; i < n; i++ )
	{
		if (movements[ i ] == 'L')
		{
			get_bearing = ( directions.indexOf(bearing) + 3 ) % 4;
			bearing = directions[get_bearing];
		}
		else if (movements[ i ] == 'R')
		{
			get_bearing = ( directions.indexOf(bearing) + 1 ) % 4;
			bearing = directions[get_bearing];
		}
		else if (movements[ i ] == 'A')
		{
			switch (bearing)
			{
				case 'north':
					y++;
					break;
				case 'west':
					x--;
					break;
				case 'south':
					y--;
					break;
				case 'east':
					x++;
					break;
				default:
					return x;
			}
		}
		else
		{
			return 'Error: Invalid instruction.';
		}
	}
	if ( y != 0 )
	{
			y *= -1;
	}

	return `{x: ${x}, y: ${y}, bearing: '${bearing}'}`;
}
