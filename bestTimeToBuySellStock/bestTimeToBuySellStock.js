class Solution {
    bruteForce(prices) {
        let bestProfit = 0;
        for (let buy = 0; buy < prices.length; buy++) {
            for (let sell = buy + 1; sell < prices.length; sell++) {
                bestProfit = Math.max(bestProfit, prices[sell] - prices[buy]);
            }
        }
        return bestProfit;
    }

    onePass(prices) {
        let minimumPrice = Infinity;
        let bestProfit = 0;
        for (const price of prices) {
            minimumPrice = Math.min(minimumPrice, price);
            bestProfit = Math.max(bestProfit, price - minimumPrice);
        }
        return bestProfit;
    }
}

module.exports = new Solution();
