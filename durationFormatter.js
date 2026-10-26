// Duration Formatter
// Given an integer number of seconds, 
// return a string representing the same duration in the format "H:MM:SS", where "H" is the number of hours, "MM" is the number of minutes, and "SS" is the number of seconds. Return the time using the following rules:

// Seconds: Should always be two digits.
// Minutes: Should omit leading zeros when they aren't needed. Use "0" if the duration is less than one minute.
// Hours: Should be included only if they're greater than zero.


function formatDuration(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    // Seconds always have two digits
    const secsStr = String(secs).padStart(2, '0');

    if (hours > 0) {
        // If there are hours, minutes must be two digits (e.g., "1:05:30")
        const minsStr = String(minutes).padStart(2, '0');
        return `${hours}:${minsStr}:${secsStr}`;
    } else {
        // If no hours, minutes omit leading zeros (e.g., "5:30" or "0:45")
        return `${minutes}:${secsStr}`;
    }
}
