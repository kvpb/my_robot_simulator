/**
 * Copyright (c) 2021
 *
 * https://upskill.us.qwasar.io/projects/my_robot_simulator
 *
 * @summary A robot simulator.
 * @author bertin_k <local-part@domain>
 *
 * Created 
 * Last modified 
 */

function f(string) { //f(input) {
    //var instructions = { 'A': 'advance', 'L': 'turn left', 'R': 'turn right' };
    //var instruction = '';
    //var movements = string;
    var movement = '';
    //var directions = [ 'north', 'west', 'south', 'east' ];
    var direction = 0; // 0: North; 1: West; 2: South; 3: East;
    var x = 0;
    var y = 0;
    var i = 0;
    var n = string.length;

    for ( i = 0; i < n; i++ ) {
        movement = string[i];

        if ( movement == 'L' ) { //if ( instruction == 'turn left' ) {
            direction = ( 4 + direction - 1 ) % 4;
        } else if ( movement == 'R' ) { //if ( instruction == 'turn right' ) {
            direction = ( direction + 1 ) % 4;
        } else {
            if ( direction == 0 ) {
                y += 1;
            } else if ( direction == 1 ) {
                x -= 1;
            } else if ( direction == 2 ) {
                y -= 1;
            }
            else { //else if ( direction == 3 ) {
                x += 1;
            }
        }
    }
    return "{x: +x+, y: +y+, bearing: '+direction+'}"; // This return value is provided as an example. The actual one shall be an array-like object containing the three previous variables.
};