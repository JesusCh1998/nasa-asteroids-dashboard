export const transformAsteroidData = (data) => {

  const objects = data.near_earth_objects;

  const result = Object.keys(objects)
    .sort()
    .map(date => {

      return {
        date: date,
        count: objects[date].length
      };

    });

  return result.sort((a, b) => new Date(a.date) - new Date(b.date));

};