export function calculateMetrics(apiData) {

  const objects = apiData.near_earth_objects;

  let total = 0;
  let hazardous = 0;

  Object.keys(objects).forEach(date => {

    const asteroids = objects[date];

    total += asteroids.length;

    asteroids.forEach(ast => {
      if (ast.is_potentially_hazardous_asteroid) {
        hazardous++;
      }
    });

  });

  return {
    total: total,
    hazardous: hazardous,
    safe: total - hazardous
  };

}