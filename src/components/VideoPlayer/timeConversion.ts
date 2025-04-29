import moment from 'moment'

export const ConvertSecondsToReadableFormat = (duration: number): string => {
  const durationObject = moment.duration(duration, 'seconds')
  const hours = durationObject.hours()
  const remainingMinutes = durationObject.minutes()

  if (hours > 0) {
    return `${hours}h ${remainingMinutes} min`
  } else {
    return `${remainingMinutes} min`
  }
}

export const FormatSecondsToTimeString = (time: number): string => {
  if (isNaN(time)) {
    return '00:00'
  }

  const timeInMilliseconds = time * 1000
  const timeObject = moment.utc(timeInMilliseconds)

  if (timeObject.hours()) {
    return timeObject.format('HH:mm:ss')
  } else {
    return timeObject.format('mm:ss')
  }
}

export const postTimeFormatter = (postCreateTimestamp: number): string => {
  if (!postCreateTimestamp) {
    return 'Invalid date' // Handle falsy timestamp
  }

  const dateTime = moment(postCreateTimestamp)
  const currDateTime = moment()
  const time = dateTime.format('h:mm a')
  const dateDiff = currDateTime.diff(moment(postCreateTimestamp).format('YYYY-MM-DD'), 'days')

  if (dateDiff === 0) {
    return `Today at ${time}`
  } else if (dateDiff === 1) {
    return `Yesterday at ${time}`
  } else {
    return dateTime.format('MMM DD, YYYY [at] h:mm a')
  }
}

export const commentTimeFormatter = (commentTimestamp: number, includeAgo = false): string => {
  if (!commentTimestamp) return 'Invalid date'

  const now = moment().valueOf()
  const differenceInSeconds = (now - commentTimestamp) / 1000

  if (differenceInSeconds < 1) return 'Just now'

  const timeUnits = [
    { unit: 'year', limit: 31536000 },
    { unit: 'week', limit: 604800 },
    { unit: 'day', limit: 86400 },
    { unit: 'hour', limit: 3600 },
    { unit: 'minute', limit: 60 },
    { unit: 'second', limit: 1 },
  ]

  const unit = timeUnits.find(u => differenceInSeconds >= u.limit)
  if (!unit) return 'Invalid date'

  const unitDifference = Math.floor(differenceInSeconds / unit.limit)
  const agoText = includeAgo ? ' ago' : ''

  return `${unitDifference}${unit.unit.charAt(0)}${agoText}`
}

export const convertTimestampToDateShortFormat = (timestamp: number): string =>
  moment(timestamp).format('DD.MM.YY')
