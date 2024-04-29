let statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2
};

for (let elem in statistics) {
  if (elem.startsWith('r') || (typeof statistics[elem] === 'number' && statistics[elem] % 2 !== 0)) {
    console.log(statistics[elem])
  }
}
