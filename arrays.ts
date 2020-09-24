const carMakers = ['ford', 'toyota', 'chevy']
const dates = [new Date(), new Date()]

const carsByMake: string[][] = [
  ['f150'],
  ['corolla'],
  ['camaro']
]

// Help with inference
const myCar = carMakers[0];
const otherCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);

// Help with functions
carMakers.map((car: string): string => {
  return car.toUpperCase()
})

// Flexible Types
const importantDates: (Date | String)[] = [new Date(), '2030-10-10'];
