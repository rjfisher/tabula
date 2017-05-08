function getDate(month) {
  // Get the first Thursday of the month.
  var result = month.startOf('month').day('Thursday');
  // Add a week to get the second Thursday of the month.
  result.add(1, 'week');
  // Add 18.5 hours to set the date
  result.add(18, 'hours');

  return result;
}

function nextMeeting() {
  // Get the next meeting date
  var meeting = getDate(moment());

  // If meeting has passed this month then look for next month's meeting
  if(meeting.isBefore(moment())) {
    var nextMonth = moment().add(1, 'month');
    meeting = getDate(nextMonth);
  }

  // Show the pretty date in the text
  $('.next').text(meeting.format('dddd, MMMM Do YYYY, h:mm:ss a'));

  $('.countdown').downCount({
    date: meeting,
    offset: -4
  });
}

document.addEventListener('DOMContentLoaded', function() {
  nextMeeting();
});
