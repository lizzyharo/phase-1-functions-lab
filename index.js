
const start = 42;

function distanceFromHqInBlocks(blocks){
    return Math.abs(blocks - start);
}

function distanceFromHqInFeet(feet){
    return distanceFromHqInBlocks(feet) * 264;
}

function distanceTravelledInFeet(start, destination){
    return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination){
    let feetTraveled = Math.abs(start - destination) * 264;
    let farePrice;
    if(feetTraveled <= 400){
        farePrice = 0
        return farePrice;
    } else if (400 < feetTraveled && feetTraveled <= 2000){
        farePrice = 2.56
        return farePrice;
    } else if (2000 < feetTraveled && feetTraveled <= 2500){
        farePrice = 25
        return farePrice;
    } else {
        return `cannot travel that far`;
    }

}
