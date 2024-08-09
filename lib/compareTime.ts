function compareTime(targetTime: string) {
    const target = Date.parse(targetTime);
    const now = Date.now();

    return now - target;
}

export default compareTime;