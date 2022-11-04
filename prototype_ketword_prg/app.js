const userPassportDetails = function (
  firstName,
  lastName,
  passportNumber,
  userNationality,
) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.passportNumber = passportNumber;
  this.userNationality = userNationality;
};
userPassportDetails.prototype.dateOfIssue = '13/09/2020';
userPassportDetails.prototype.getInfo = function () {
  console.log(
    `Your Name is ${this.firstName} ${this.lastName}, and your Passport Number is ${this.passportNumber}, and your Nationality is ${this.userNationality}`,
  );
};
let saurabh = new userPassportDetails('Saurabh', 'Desale', 'R565656', 'Indian');
console.log(saurabh);
