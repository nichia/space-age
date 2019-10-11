const SECONDS_IN_EARTH_YEAR = 31557600;

const PLANET_FACTORS = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
};

function roundTo2DP(n) {
  // rounds a number to two decimal places
  return Math.round(n * 100) / 100;
}

export const age = (planet, seconds) => {
  // calculate age on Earth
  const ageOnEarth = seconds / SECONDS_IN_EARTH_YEAR;

  // then divide by the given factor for each planet
  return roundTo2DP(ageOnEarth / PLANET_FACTORS[planet]);
};
