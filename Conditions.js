let number = 1;

if(number === 1){
    console.log("Monday");
}
else if(number === 2){
    console.log("Tuesday");
}
else if(number === 3){
    console.log("wednessday");
}
else if(number === 4){
    console.log("Thrusday");
}
else if(number === 5){
    console.log("Friday");
}
else if(number === 6){
    console.log("Saturday");
}
else if(number === 7){
    console.log("Sunday");
}
else console.log("invalid number");
switch (number){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednessday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default :
        console.log("invalid day");

}