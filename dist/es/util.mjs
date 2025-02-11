var hello = function hello() {
  var a = {
    name: "chiko",
    age: 12
  };
  var name = a.name,
    age = a.age;
  console.log('a ===>', a, name, age);
};

export { hello };
