"use·strict";

const countProps = function(obj) {
  const keys = Object.keys(obj).length;

  return keys;
};

console.log(countProps({}));

console.log(countProps({ name: "Mango", age: 2 }));

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
