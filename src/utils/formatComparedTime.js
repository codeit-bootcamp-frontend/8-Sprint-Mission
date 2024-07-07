import compareTime from "./compareTime";

const SEC = 1000;
const MIN = 60 * SEC;
const HOUR = 60 * MIN;
const DAY = 24 * HOUR;

function fitDigits(num) {
    if (num < 10) return `0${num}`;
    else return num;
}

function formatComparedTime(targetTime) {
    const comparedTime = compareTime(targetTime);

    if(comparedTime > 7 * DAY) {
        const date = new Date(targetTime);
        const hour = fitDigits(date.getHours());
        const min = fitDigits(date.getMinutes());
        const dateFormat = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일 ${hour}:${min}`;

        return dateFormat;
    }

    else if(comparedTime > 2 * DAY) return `${comparedTime / DAY}일 전`;

    else if(comparedTime > DAY) return "어제";

    else if(comparedTime > HOUR) return `${comparedTime / HOUR}시간 전`;

    else if(comparedTime > MIN) return `${compareTime / MIN}분 전`;

    else return "방금 전";
}

export default formatComparedTime;