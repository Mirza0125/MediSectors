import moment from 'moment';

export default function formatWhatsAppMessageTime(timestamp) {
  const momentTimestamp = moment(timestamp);
  const currentDate = moment().startOf('day');
  const timeDiff = currentDate.diff(momentTimestamp, 'days');

  if (timeDiff === 0) {
    return momentTimestamp.format('h:mm a'); // Today
  } else if (timeDiff === 1) {
    return 'Yesterday' + momentTimestamp.format(' - h:mm a'); // Yesterday
  } else if (timeDiff < 7) {
    return momentTimestamp.format('dddd') + momentTimestamp.format(' - h:mm a'); // This week
  } else {
    return momentTimestamp.format('DD/MM/YYYY - h:mm a'); // Older than a week
  }
}
