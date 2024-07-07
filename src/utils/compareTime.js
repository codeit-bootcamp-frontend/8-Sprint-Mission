function compareTime(targetTime) {
    const target = Date.parse(targetTime);
    const now = Date.now();

    return now - target;
}

export default compareTime;