export const getHazardousStats = (data) => {

  const neo = data.near_earth_objects;

  let hazardous = 0;
  let nonHazardous = 0;

  Object.values(neo).forEach((asteroidsPerDay) => {

    asteroidsPerDay.forEach((asteroid) => {

      if (asteroid.is_potentially_hazardous_asteroid) {
        hazardous++;
      } else {
        nonHazardous++;
      }

    });

  });

  return [
    { name: "Peligrosos", value: hazardous },
    { name: "No Peligrosos", value: nonHazardous }
  ];
};