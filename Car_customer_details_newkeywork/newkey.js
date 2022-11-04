const carUserDetails = function (
  cFullName,
  cEmail,
  cCarModel,
  cInsuranceNumber,
  cCarMilesPoint,
) {
  this.cFullName = cFullName;
  this.cEmail = cEmail;
  this.cCarModel = cCarModel;
  this.cInsuranceNumber = cInsuranceNumber;
  this.cCarMilesPoint = cCarMilesPoint;
  this.GetCarMilesPoint = function () {
    console.log(`Miles Point ${this.CustomerCarMilesPoint}`);
  };
};

let saurabh = new carUserDetails(
  'Saurabh Desale',
  'saurabhdesale1999@gmail.com',
  'Tesla s3',
  43543543,
  23,
);
console.log(saurabh);

let pritesh = new carUserDetails(
  'Pritesh Ganage',
  'priteshganage772@gmail.com',
  'Range Rover evoque',
  5345453455,
  34,
);
console.log(pritesh);
