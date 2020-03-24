function foo() {

  // private method
  const getName = function() {
    return this.name;
  }
  // private method
  const getAge = function() {
    return this.age;
  }
  // public method
  const getPerson = function() {
    return this.getName() + ',' + this.getAge();
  }

  return {
    getPerson
  };
}