var Journal = require('./../js/journal.js').journalModule
var journals = []

$(document).ready(function() {
  $('#entry-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var entry = new Journal(title, body);
    journals.push(entry);
    $('#entries').prepend('<h3>' + entry.title + '</h3> <br>' + '<p>' + entry.body+ '</p>' + "<button type='submit' id='+ (journals.length - 1) +'>Word count</button>");
  });

  $('#wordycount').submit(function(event) {
    event.preventDefault();
    $('#entries').prepend(journals[0].wordCount());
  });
});
