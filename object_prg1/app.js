let user = {
  firstName: 'Saurabh ',
  lastName: 'Desale',
  role: 'Admin',
  loginCount: 32,
  facebookSignedIn: true,
  courseList: [],
  buyCourse: function (courseName) {
    this.courseList.push(courseName);
  },
  getCourseCount: function () {
    return `${this.courseList.length} course `;
  },
  getInfo: function () {
    return `${this.firstName} ${this.lastName} who's role is ${
      this.role
    } has a total login count of ${
      this.loginCount
    } and has a enrolled in count of ${this.getCourseCount()} `;
  },
};
user.buyCourse('React Js');
user.buyCourse('Angular course');
console.log(user.getInfo());



