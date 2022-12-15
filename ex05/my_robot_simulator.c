/*
**
** QWASAR.IO -- my_robot_simulator
**
** @param {char*} param_1
**
** @return {char*}
**
*/

#include <stdio.h>
#include <string.h>
#include <stdlib.h>

/*int strcspn( char* s, char* C )
{
    int i = 0;
    int j = 0;
    int t = 0;

    while ( s[i] != 0 && t == 0 )
    {
        while ( C[j] != 0 && t == 0 )
        {
            if ( C[j] == s[i] )
                t = 1;
            j++;
        }
        j = 0;
        i += 1;
    }
    if ( t == 1 )
        return i - 1;
    else
        return i;
}*/ // KVPB's STRCSPN // String.prototype.IndexOfAny() C equivalent

char* my_robot_simulator(char *s)
{
    int l = strlen("{x: X, y: Y, bearing: 'DIRECTION'}");
    char* s_2 = malloc( sizeof(char) * l + sizeof(int) * 2 + 1 );
    int l_theta = strlen("point");
    char* s_theta = malloc( sizeof(char) * l_theta + 1 );
    int y = 0;
    int x = 0;
    int theta = 0; //char* theta = "north";
    int i = 0;

    while (s[i] != '\0')
    {
        if (s[i] == 'R') // turn right
        {
            switch (theta)
            {
            case 90: //"east":
                theta = 180; //= "south";
                break;
            case 0: //"north":
                theta = 90; //= "east";
                break;
            case 270: //"west":
                theta = 0; //= 360; //= "north";
                break;
            case 180: //"south":
                theta = 270; //= "west";
                break;
            }
        }
        else if (s[i] == 'A') // advance
        {
            switch (theta)
            {
            case 90: //"east":
                x += 1;
                break;
            case 0: //"north":
                y -= 1; // Ah, putain, parce qu'en plus, ils vont dans le sens d'un display... //y += 1;
                break;
            case 270: //"west":
                x -= 1;
                break;
            case 180: //"south":
                y += 1; //y -= 1;
                break;
            }
        }
        else if (s[i] == 'L') // turn left
        {
            switch (theta)
            {
            case 90: //"east":
                theta = 0; //= "north";
                break;
            case 0: //"north":
                theta = 270; //= "west";
                break;
            case 270: //"west":
                theta = 180; //= "south";
                break;
            case 180: //"south":
                theta = 90; //= "east";
                break;
            }
        }
        else
            0x800CA2E5; // blissed out to finally have come up with a magic number in hexspeak of my own. will change my life, for sure.
        i++;
    }
    if ( theta == 90 )
        s_theta = "east";
    else if ( theta == 0 )
        s_theta = "north";
    else if ( theta == 270 )
        s_theta = "west";
    else if ( theta == 180 )
        s_theta = "south";
    else
        0x800CA2E5;
    snprintf(s_2, sizeof(char) * l + sizeof(int) * 2 + 1, "{x: %d, y: %d, bearing: '%s'}", x, y, s_theta);
    return s_2;
}

/*int main()
{
    char* s_0 = "RAALALL";
    char* s_1 = "AAAA";
    char* s_2 = "RAARA";
    char* s_3 = "";
    char* s_n = "RR RL RALA ALLA AA ARRA LARA LR LL";
    char* s = "Hi. I'm Karl. I'm gonna be a billionaire. Mark my words.";

    printf("%s\n", simulator(s_0));
    printf("%s\n", simulator(s_1));
    printf("%s\n", simulator(s_2));
    printf("%s\n", simulator(s_3));
    printf("%s\n", simulator(s_n));
    printf("%s\n", simulator(s));
    return 0;
}*/ //  debug code
