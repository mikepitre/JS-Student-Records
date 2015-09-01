var message = '';
var student;
var search;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
};


while (true) {
  search = prompt("Enter a student's name to search for their info. You can also type 'quit' to exit the search.");
  if (search.toLowerCase() === 'quit') {
    break;
  }
}


for (var i = 0; i < students.length; i++) {
  student = students[i]
  message += '<h2>Student: ' + student.name + '</h2>';
  message += '<p>Track: ' + student.track + '</p>';
  message += '<p>Achievements: ' + student.achievements + '</p>';
  message += '<p>Points: ' + student.points + '</p>';
};
