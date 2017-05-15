function getDate(month) {
  // Get the first Wednesday of the month.
  var result = month.startOf('month');

  // If the first day of the month is after Wednesday we have a
  // problem
  if (result.day() > 3) {
    result.add(1, 'week');
  }

  // Get the first wednesday of the month
  result.day('Wednesday');

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
