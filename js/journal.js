function Journal(title, body) {
  this.title = title;
  this.body = body;
}

Journal.prototype.wordCount = function() {
  var bodyArray = this.body.split(" ");
  return bodyArray.length;
}

exports.journalModule = Journal;
