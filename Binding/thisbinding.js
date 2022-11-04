const saurabh = {
  firstName: 'Saurabh',
  lastName: 'Desale',
  role: 'Admin',
  courseCount: 3,
  getInfo: function () {
    console.log(`
    First Name: ${this.firstName}
    Last Name: ${this.lastName}
    His role is ${this.role}
    and he is studying  ${this.courseCount} courses
    `);
  },
};

const sammy = {
  firstName: 'Sammy',
  lastName: 'Joe',
  role: 'Sub-Admin',
  courseCount: 4,
};

saurabh.getInfo.bind(sammy)();
