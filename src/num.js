const Num = {
    extractFloat: function (text) {
        let match, snum;

        text = text.replace(/−/g, '-'); // normalize HTML &minus; sign
        text = text.replace(/[^0-9,.-]+/g, ''); // strip chars

        // matches: "3,100,210.10" / "-3.100.210,10" / "3,100,210"
        if (match = text.match(/^-?(\d{1,3}(?:([,.])\d{3}(?:\2\d{3})*)?)((?!\2)[,.]\d+)?$/)) {
            snum = match[1].replace(/[,.]/g, '') + (match[3] ? match[3].replace(",", ".") : '');

            // matches: "-3100210.10", "9", "3.14"
        } else if (match = text.match(/^-?\d+([,.]\d+)?$/)) {
            snum = text.replace(",", ".");

        } else {
            return [null, "Ambiguous or badly formatted number: " + text];
        }

        return [parseFloat(snum), null];
    },

    roundTwo: function (val) {
        return Math.round(val * 100) / 100;
    },

    format: function (val) {
        return (new Intl.NumberFormat()).format(this.roundTwo(val));
    }
};
