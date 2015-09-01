'use strict';

var message = '';
var student;
var search;
var foundStudents = [];
var flag = true;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function getStudentReport(student) {
  var report = '<h2>Student: ' + student.name + '</h2>';
  report += '<p>Track: ' + student.track + '</p>';
  report += '<p>Achievements: ' + student.achievements + '</p>';
  report += '<p>Points: ' + student.points + '</p>';
  return report;
}

while (flag) {
  search = prompt('Enter a student name to search for their info. You can also type quit to exit the search.');

  if (search === null || search.toLowerCase() === 'quit') {
    break;
  }

  for (var i = 0; i < students.length; i++) {
    student = students[i];
    if (student.name.toLowerCase() === search.toLowerCase()) {
      foundStudents.push(student);
    }
  }
  flag = false;
}

for (var i = 0; i < foundStudents.length; i++) {
  if (foundStudents.length === 0){
    message = 'This student does not exist.';
  } else {
    message += getStudentReport(foundStudents[i]);
  }
}

print(message);

