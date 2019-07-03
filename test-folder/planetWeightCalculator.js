function calculateWeight(earthWeight, planet) {
  if(planet === 'Mercury'){return earthWeight * 0.378}
  if(planet === 'Venus'){return earthWeight * 0.907}
  if(planet === 'Mars'){return earthWeight * 0.377}
  if(planet === 'Jupiter'){return earthWeight * 2.36}
  if(planet === 'Saturn'){return earthWeight * 0.916}
  else{
    return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
  }
}


console.log(calculateWeight(100, 'Jupiter'))
