/**
 * Get stock recommendation (0 to 100) based on social media
 * @param symbol : Stock symbol
 * @param social : Social media
 * @param date : Selected day
 * @returns count, price and percentage
 */
    export function getStockChances(symbol, social, date) {
        var count = socialMediaCountGenerator(symbol, social);
        var price = stockPriceGenerator(symbol, social, date);
        return {
            count: count,
            price: price,
            percentage: recommendationAlgorithm(price, count)
        };
    }

/**
 * Generates a stock share price for a given day
 * @param symbol
 * @param date
 * @returns number : price
 */
    export function stockPriceGenerator(symbol, date) {
        return Math.round((Math.random() * 100)*100)/100;
    }

/**
 * Generates a social media count based on stock symbol and given social media
 * @param symbol
 * @param social
 * @returns number : count
 */
    export function socialMediaCountGenerator(symbol, social) {
        return Math.round((Math.random() * 100)*1)/1;
    }

/**
 * Calculates a 0 to 100 recommendation value based on a count of social media posts happens
 * @param price
 * @param count
 * @returns recommendation (0 to 100)
 */
    export function recommendationAlgorithm(price, count) {
        // Where the magic happens!
        // This is where algorithm that outputs a 0 to 100 recommendation
        // based on a count of social media posts happens
        if(price > 100 && count > 100)
        {
            return 100;
        }
        if(price > 75 && count > 75)
        {
            return 75;
        }
        if(price > 50 && count > 50)
        {
            return 50;
        }
        if(price > 25 && count > 25)
        {
            return 25;
        }
        else
        {
            return 0;
        }
    }
