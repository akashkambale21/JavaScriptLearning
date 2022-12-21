var month = function (monthnumber) {
    switch (monthnumber) {
        case 1:
            console.log(`${monthnumber} this month is January`);
            break;
        case 2:
            console.log(`${monthnumber} this month is February`);
            break;
        case 3:
            console.log(`${monthnumber} this month is March`);
            break;
        case 4:
            console.log(`${monthnumber} this month is April`);
            break;
        case 5:
            console.log(`${monthnumber} this month is May`);
            break;
        case 6:
            console.log(`${monthnumber} this month is June`);
            break;
        case 7:
            console.log(`${monthnumber} this month is Julay`);
            break;
        case 8:
            console.log(`${monthnumber} this month is August`);
            break;
        case 9:
            console.log(`${monthnumber} this month is September`);
            break;
        case 10:
            console.log(`${monthnumber} this month is Octomber`);
            break;
        case 11:
            console.log(`${monthnumber} this month is November`);
            break;
        case 12:
            console.log(`${monthnumber} this month is December`);
            break;
       


        default: 
        console.log(`${monthnumber} Invalid month please enter a valid month `);
    
            break;
    }
}
month(2)
month(5)
month(12)
month(15)
month(100)