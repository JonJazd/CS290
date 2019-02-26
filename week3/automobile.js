function Automobile( year, make, model, type ){
    this.year = year; //integer (ex. 2001, 1995)
    this.make = make; //string (ex. Honda, Ford)
    this.model = model; //string (ex. Accord, Focus)
    this.type = type; //string (ex. Pickup, SUV)
}

var automobiles = [ 
    new Automobile(1995, "Honda", "Accord", "Sedan"),
    new Automobile(1990, "Ford", "F-150", "Pickup"),
    new Automobile(2000, "GMC", "Tahoe", "SUV"),
    new Automobile(2010, "Toyota", "Tacoma", "Pickup"),
    new Automobile(2005, "Lotus", "Elise", "Roadster"),
    new Automobile(2008, "Subaru", "Outback", "Wagon")
    ];

/*This function sorts arrays using an arbitrary comparator. You pass it a comparator and an array of objects appropriate for that comparator and it will return a new array which is sorted with the largest object in index 0 and the smallest in the last index*/
function sortArr( comparator, array ){
    for (var b= 0;b<5;b++){
        for (var a = 0; a<5;a++){
            if (!comparator(array[a],array[a+1])){
                var swapCar = array[a];
                array[a] = array[a+1];
                array[a+1] = swapCar;
            }
        }
    }
    for (var c=0;c<6;c++){
        console.log(array[c].year + " " + array[c].make + " " + array[c].model + "\n");
    }
}

/*A comparator takes two arguments and uses some algorithm to compare them. If the first argument is larger or greater than the 2nd it returns true, otherwise it returns false. Here is an example that works on integers*/
function exComparator( int1, int2){
    if (int1 > int2){
        return true;
    } else {
        return false;
    }
}

/*For all comparators if cars are 'tied' according to the comparison rules then the order of those 'tied' cars is not specified and either can come first*/

/*This compares two automobiles based on their year. Newer cars are "greater" than older cars.*/
function yearComparator( auto1, auto2){
    if (auto1.year> auto2.year){
        return true;
    } else {
        return false;
    }
}

/*This compares two automobiles based on their make. It should be case insensitive and makes which are alphabetically earlier in the alphabet are "greater" than ones that come later.*/
function makeComparator( auto1, auto2){
    if (auto1.make==="Ford" || auto1.make==="ford"){
        return true;
    } else if (auto1.make==="Toyota" || auto1.make==="toyota"){
        return false;
    } else if (auto2.make==="Ford" || auto2.make==="ford"){
        return false;
    } else if (auto2.make==="Toyota" || auto2.make==="toyota"){
        return true;
    } else if (auto1.make==="GMC" || auto1.make==="gmc"){
        return true;
    } else if (auto2.make==="GMC" || auto2.make==="gmc"){
        return false;
    } else if (auto2.make==="Subaru" || auto2.make==="subaru"){
        return true;
    } else if (auto1.make==="Subaru" || auto2.make==="subaru"){
        return false;
    } else if (auto1.make==="Honda" || auto1.make==="honda"){
        return true;
    } else if (auto2.make==="Honda" || auto2.make==="honda"){
        return false;
    } else if (auto1.make==="Lotus" || auto1.make==="lotus"){
        return false;
    } else if (auto2.make ==="Lotus" || auto2.make==="lotus"){
        return true;
    } else {
        return true;
    }
}

/*This compares two automobiles based on their type. The ordering from "greatest" to "least" is as follows: roadster, pickup, suv, wagon, (types not otherwise listed). It should be case insensitive. If two cars are of equal type then the newest one by model year should be considered "greater".*/
function typeComparator( auto1, auto2){
    //roadster, pickup, suv, wagon
    if (auto1.type==="roadster" || auto1.type==="Roadster"){
        return true;
    } else if (auto2.type==="roadster" || auto2.type==="Roadster"){
        return false;
    } else if (auto1.type==="sedan" || auto1.type==="Sedan"){
        return false;
    } else if (auto2.type==="sedan" || auto2.type==="Sedan"){
        return true;
    } else if (auto1.type==="pickup" || auto1.type==="Pickup"){
        return true;
    } else if (auto2.type==="pickup" || auto2.type==="Pickup"){
        return false;
    } else if (auto1.type==="wagon" || auto1.type==="Wagon"){
        return false;
    } else if (auto2.type==="wagon" || auto2.type==="Wagon"){
        return true;
    } else if (auto1.type==="suv" || auto1.type==="SUV"){
        return true;
    } else if (auto2.type==="suv" || auto2.type==="SUV"){
        return false;
    } else {
        return false;
    }
}

/*Your program should output the following to the console.log, including the opening and closing 5 stars. All values in parenthesis should be replaced with appropriate values. Each line is a seperate call to console.log.*/
console.log("*****");
console.log("The cars sorted by year are:\n");
sortArr(yearComparator,automobiles);
console.log("The cars sorted by make are:\n");
sortArr(makeComparator,automobiles);
console.log("The cars sorted by type are:\n");
sortArr(typeComparator,automobiles);
console.log("*****");
