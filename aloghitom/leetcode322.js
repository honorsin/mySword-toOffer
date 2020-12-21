var coinChange = function (coins, amount) {
    function dp(n) {
        if (amount === 0) {
            return 0
        }
        if (amount < 0) {
            return -1
        }
        let res = Infinity
        for (let coin of coins) {
            let subProblem = dp(n - coin)
            if (subProblem === -1) {
                continue
            }
            res = Math.min(res, 1 + subProblem)
        }
        res == Infinity ? -1 : res
    }
    return dp(amount)

};

var coinChange = function (coins, amount) {
    //数组大小为amount+1 ， 初始值也为amount+1
    let dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }

    return dp[amount] === amount + 1 ? -1 : dp[amount];
}