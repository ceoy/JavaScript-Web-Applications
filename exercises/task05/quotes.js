const services = (function () {
    // async / await is possible
    const getQuotes = async () => {
        const success = await fetch("https://www.sws.bfh.ch/~locher/js/services/quote.php");
        if (success.ok) {
            return success.text();
        }
        else {
            throw success.statusText;
        }
    }

    // but this is also valid
    const toMorse = (text) => {
        return fetch(`https://www.sws.bfh.ch/~locher/js/services/morse.php?text=${text}`)
            .then((success) => {
                if (success.ok) {
                    return success.text()
                } else {
                    throw success.statusText
                }
            })
    }

    return {
        toMorse,
        getQuotes
    }
})()