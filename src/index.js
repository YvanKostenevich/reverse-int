module.exports = function reverse(n) {

    if (n < 0) {
        let positiveN = n * -1;
        return Number(positiveN.toString().split('').reverse().join('').toString());
    } else {
        return Number(n.toString().split('').reverse().join('').toString());
    }
};
