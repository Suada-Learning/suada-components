import moment from 'moment';
export var ConvertSecondsToReadableFormat = function (duration) {
    var durationObject = moment.duration(duration, 'seconds');
    var hours = durationObject.hours();
    var remainingMinutes = durationObject.minutes();
    if (hours > 0) {
        return "".concat(hours, "h ").concat(remainingMinutes, " min");
    }
    else {
        return "".concat(remainingMinutes, " min");
    }
};
export var FormatSecondsToTimeString = function (time) {
    if (isNaN(time)) {
        return '00:00';
    }
    var timeInMilliseconds = time * 1000;
    var timeObject = moment.utc(timeInMilliseconds);
    if (timeObject.hours()) {
        return timeObject.format('HH:mm:ss');
    }
    else {
        return timeObject.format('mm:ss');
    }
};
export var postTimeFormatter = function (postCreateTimestamp) {
    if (!postCreateTimestamp) {
        return 'Invalid date'; // Handle falsy timestamp
    }
    var dateTime = moment(postCreateTimestamp);
    var currDateTime = moment();
    var time = dateTime.format('h:mm a');
    var dateDiff = currDateTime.diff(moment(postCreateTimestamp).format('YYYY-MM-DD'), 'days');
    if (dateDiff === 0) {
        return "Today at ".concat(time);
    }
    else if (dateDiff === 1) {
        return "Yesterday at ".concat(time);
    }
    else {
        return dateTime.format('MMM DD, YYYY [at] h:mm a');
    }
};
export var commentTimeFormatter = function (commentTimestamp, includeAgo) {
    if (includeAgo === void 0) { includeAgo = false; }
    if (!commentTimestamp)
        return 'Invalid date';
    var now = moment().valueOf();
    var differenceInSeconds = (now - commentTimestamp) / 1000;
    if (differenceInSeconds < 1)
        return 'Just now';
    var timeUnits = [
        { unit: 'year', limit: 31536000 },
        { unit: 'week', limit: 604800 },
        { unit: 'day', limit: 86400 },
        { unit: 'hour', limit: 3600 },
        { unit: 'minute', limit: 60 },
        { unit: 'second', limit: 1 },
    ];
    var unit = timeUnits.find(function (u) { return differenceInSeconds >= u.limit; });
    if (!unit)
        return 'Invalid date';
    var unitDifference = Math.floor(differenceInSeconds / unit.limit);
    var agoText = includeAgo ? ' ago' : '';
    return "".concat(unitDifference).concat(unit.unit.charAt(0)).concat(agoText);
};
export var convertTimestampToDateShortFormat = function (timestamp) {
    return moment(timestamp).format('DD.MM.YY');
};
//# sourceMappingURL=timeConversion.js.map