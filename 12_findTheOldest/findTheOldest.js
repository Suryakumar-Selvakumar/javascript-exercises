const findTheOldest = function (object) {
  let objArray = [];
  for (const item of object) {
    const currentDate = new Date();
    death = item.yearOfDeath ?? currentDate.getFullYear();
    objArray.push({
      name: item.name,
      age: death - item.yearOfBirth,
    });
  }

  const vals = [];
  for (const element of objArray) {
    vals.push(element.age);
  }

  let maxAge = vals[0];
  for (let i = 0; i < vals.length; i++) {
    if (maxAge < vals[i]) {
      maxAge = vals[i];
    }
  }

  for (const obj of objArray) {
    if (obj.age === maxAge) {
      const oldestPerson = object.find((person) => person.name === obj.name);
      return oldestPerson;
    }
  }
};

// Do not edit below this line
module.exports = findTheOldest;
