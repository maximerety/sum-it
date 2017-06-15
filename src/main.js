const Main = {

    targets: [],

    listener: function(e) {
        if (this.targets.length >= 2) {
            this.targets[0].style.outline = 'none';
            this.targets[1].style.outline = 'none';
            this.targets = [];
        }

        if (!e.target || !e.target.innerText || !e.target.innerText.match(/[0-9]+/)) {
            return;
        }

        this.targets.push(e.target);
        console.log(this.targets);

        e.target.style.outline = '2px solid green';

        if (this.targets.length >= 2) {
            let ancestor = Node.getCommonAncestor(this.targets);

            if (!ancestor) {
                alert('The clicked areas must belong to the same series of data');
                return;
            }

            let sums = [0, 0, 0];

            let cells = Node.querySimilarBetween(this.targets[0], this.targets[1], ancestor); // NodeList !== Array

            console.log("Cells:", cells);

            let dataset = new Dataset();

            Array.prototype.forEach.call(cells, function (cell) {
                let [value, error] = Num.extractFloat(cell.innerText);
                if (error) {
                    alert(error);
                    return; // skip value
                }
                console.log(value);
                dataset.add(value);
            });

            let message = 'Total: '  + Num.format(dataset.sum())  + '  (+' + Num.format(dataset.sum_positive()) + ' / ' + Num.format(dataset.sum_negative()) + ')' + '\n\n' +
                          'Mean: '   + Num.format(dataset.mean()) + '\n' +
                          'Standard deviation: ' + Num.format(dataset.std()) + '\n' +
                          'Variance: ' + Num.format(dataset.variance()) + '\n\n' +
                          'Number of values: '  + Num.format(dataset.size());

            setTimeout(function () {
                alert(message);
            }, 10);
        }
    }
};

// attach to body
document.querySelector('body').addEventListener('click', Main.listener.bind(Main));
