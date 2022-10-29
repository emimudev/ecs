const { formatInTimeZone, toDate } = require('date-fns-tz')
const { formatISO } = require('date-fns')

const TIME_ZONE = 'America/Costa_Rica'

/**
 * @param {Date|number|string} date
 */
function getISOTimezone(date) {
  const dateFormated = formatInTimeZone(date, TIME_ZONE, 'yyyy-MM-dd HH:mm:ssXXX')
  const isoDateFormated = formatISO(toDate(dateFormated))
  return isoDateFormated
}

module.exports = {
  getISOTimezone
}
