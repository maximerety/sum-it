class Dataset {
    constructor (values) {
        this.values = values || [];
    }
    add (value) {
        this.values.push(value);
        return this;
    }
    size () {
        return this.values.length;
    }
    sum () {
        return this.values.reduce((x, y) => x + y, 0);
    }
    sum_positive () {
        return this.values.filter(x => x >= 0).reduce((x, y) => x + y, 0);
    }
    sum_negative () {
        return this.values.filter(x => x < 0).reduce((x, y) => x + y, 0);
    }
    mean () {
        return this.sum() / this.size();
    }
    variance () {
        // V(X) = E[(X-E[X])^2] = E[X^2] - E[X]^2
        return new Dataset(this.values.map(x => Math.pow(x, 2))).mean() - Math.pow(this.mean(), 2)
    }
    // standard deviation
    std () {
        return Math.sqrt(this.variance());
    }
}
