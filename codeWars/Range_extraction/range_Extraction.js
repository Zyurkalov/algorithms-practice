function solution(list) {
    if (!list.length) return "";

    list.sort((a, b) => a - b);
    let ranges = [];
    let rangeStart = list[0];

    for (let i = 1; i <= list.length; i++) {
        if (list[i] !== list[i - 1] + 1) {
            ranges.push(
                rangeStart === list[i - 1]
                    ? rangeStart.toString()
                    : `${rangeStart}-${list[i - 1]}`
            );
            rangeStart = list[i];
        }
    }

    return ranges.join(",");
}
