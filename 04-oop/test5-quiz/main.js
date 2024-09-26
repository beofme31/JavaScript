'use strict';

function School(kor, eng) {
  this.kor = kor;
  this.eng = eng;
}
School.prototype.sum = function () {
  return this.kor + this.eng;
}
School.prototype.avg = function () {
  return Math.round(this.sum() / 2);
}

let school1 = new School(100, 85);
console.log("school sum", school1.sum());
console.log("school avg", school1.avg());

function HighSchool(kor, eng) {
  School.apply(this, [kor, eng])
}

HighSchool.prototype = School.prototype;
HighSchool.prototype.grade = function () {
  let myGrade = this.avg();

  if (myGrade >= 90)
    return 'A';
  else if (myGrade >= 80)
    return 'B';
  else if (myGrade >= 70)
    return 'C';
  else if (myGrade >= 60)
    return 'D';
  else
    return 'F';
}

let high1 = new HighSchool(100, 85);
console.log("highschool sum", high1.sum());
console.log("highschool avg", high1.avg());
console.log("highschool grade", high1.grade());