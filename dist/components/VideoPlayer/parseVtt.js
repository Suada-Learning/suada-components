export function parseVTT(content) {
    var lines = content.split(/\r?\n/);
    var entries = [];
    for (var i = 0; i < lines.length; i++) {
        if (lines[i].includes('-->')) {
            var times = lines[i].split(' --> ');
            if (times.length === 2) {
                var start = hmsToSeconds(times[0]);
                var end = hmsToSeconds(times[1]);
                var text = '';
                i++;
                while (i < lines.length && lines[i].trim() !== '') {
                    text += lines[i] + ' ';
                    i++;
                }
                entries.push({
                    start: start,
                    end: end,
                    text: text.trim(),
                });
            }
        }
    }
    function hmsToSeconds(str) {
        var p = str.split(':');
        var s = 0, m = 1;
        while (p.length > 0) {
            s += m * parseFloat(p.pop() || '0');
            m *= 60;
        }
        return s;
    }
    return entries;
}
//# sourceMappingURL=parseVtt.js.map