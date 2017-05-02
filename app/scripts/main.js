function getDate(month) {
  var result = month.endOf('month');
  while (result.day() !== 1) {
    result.subtract(1, 'day');
  }

  return result;
}

function nextMeeting() {
  /*var result = getDate(moment());
  var dur = result.diff(moment);

  if (dur < 0) {
    result = getDate(moment().add(1, 'month'));
  }

  var meeting = result.subtract(5.5, 'hours');
  meeting.add(1, 'second');*/

  var meeting = moment('2017-05-11 18:00:00');

  $('.next').text(meeting.format('dddd, MMMM Do YYYY, h:mm:ss a'));

  $('.countdown').downCount({
    date: meeting.add(4, 'hours').format(),
    offset: 0
  });
}

document.addEventListener('DOMContentLoaded', function() {
  nextMeeting();
});
