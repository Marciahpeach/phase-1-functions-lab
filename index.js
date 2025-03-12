// // Code your solution in this file!
function distanceFromHqInBlocks(block) {
  const hqLocation = 42; // Assume HQ is at block 42
  return Math.abs(block - hqLocation); // Calculate absolute distance
}

console.log(distanceFromHqInBlocks(43));
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(34)); 

function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

console.log(distanceFromHqInFeet(43));
console.log(distanceFromHqInFeet(50));

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}

console.log(distanceTravelledInFeet(43, 48)); 
console.log(distanceTravelledInFeet(50, 42)); 

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

if (distance <= 400) {
  return 0; // Free for first 400 feet
} else if (distance > 400 && distance <= 2000) {
  return (distance - 400) * 0.02; // 2 cents per foot after 400 feet
} else if (distance > 2000 && distance <= 2500) {
  return 25; // Flat fare for 2000-2500 feet
} else {
  return "cannot travel that far"; 
}
}

console.log(calculatesFarePrice(43, 44)); 
console.log(calculatesFarePrice(43, 48)); 
console.log(calculatesFarePrice(50, 42));
console.log(calculatesFarePrice(30, 60)); 

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

if (distance <= 400) {
  return 0; // Free for first 400 feet
} else if (distance > 400 && distance <= 2000) {
  return (distance - 400) * 0.02; // 2 cents per foot after 400 feet
} else if (distance > 2000 && distance <= 2500) {
  return 25; // Flat fare for 2000-2500 feet
} else {
  return "cannot travel that far"; // Over 2500 feet
}
}

console.log(calculatesFarePrice(43, 44)); 
console.log(calculatesFarePrice(43, 48));
console.log(calculatesFarePrice(50, 42)); 
console.log(calculatesFarePrice(30, 60)); 