function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  } else if (!(date instanceof Date) || date.toString() == 'Invalid Date') {
    throw 'Invalid Date';
  } else {
    return ['winter', 'spring', 'summer', 'autumn'][Math.floor((a.getMonth() + 1) % 12 / 3)];
  }
}