"use·strict";

const findBestEmployee = function(employees) {
  const employee = { ...employees };
  let maxProductive = 0;
  let nameEmployee = "";

  for (const ind of Object.keys(employee))
    if (maxProductive <= employee[ind]) {
      maxProductive = employee[ind];
      nameEmployee = ind;
    }
  return nameEmployee;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
);

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
);

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
);
