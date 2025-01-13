const Node = {
    // ancestry = list of all the parents of a Node node
    getAncestry: function (node) {
        let parents = [];

        while (node = node.parentNode) {
            parents.unshift(node);
        }

        return parents;
    },

    getCommonAncestor: function (nodes) {
        let ancestries = nodes.map(this.getAncestry);

        // sort shortest ancestries first
        ancestries.sort((curr, next) => curr.length - next.length);

        let shortest_ancestry = ancestries.shift();

        let common_ancestor = null;

        loop1: for (let i = 0, il = shortest_ancestry.length; i < il; i++) {
            let candidate = shortest_ancestry[i];

            for (let j = 0, jl = ancestries.length; j < jl; j++) {
                let found = ancestries[j].some((ancestor) => ancestor === candidate);

                if (!found) {
                    break loop1;
                }
            }

            common_ancestor = candidate;
        }

        console.log("Common ancestor:", common_ancestor);

        return common_ancestor;
    },

    getNthChild: function (node) {
        let i = 1;

        while (node = node.previousElementSibling) {
            i++;
        }

        return i;
    },

    querySimilarBetween: function (first, last, ancestor) {
        let root = ancestor || this.getCommonAncestor([first, last]),
            last_ancestry = this.getAncestry(last),
            selector_parts = [],
            selector_part,
            nth_child;

        while (first && first !== root) {
            nth_child = this.getNthChild(first);
            selector_part = first.tagName.toLowerCase() + ':nth-child(' + nth_child + ')';
            selector_parts.unshift(selector_part);
            first = first.parentNode;
        }

        let common_part = selector_parts.shift().split(':')[0];

        let nth_child_first = nth_child;
        let nth_child_last = this.getNthChild(last_ancestry[last_ancestry.indexOf(root) + 1]);

        if (nth_child_first > nth_child_last) {
            [nth_child_first, nth_child_last] = [nth_child_last, nth_child_first];
        }

        let selector = common_part +
            ':nth-child(n+' + nth_child_first + ')' +
            ':nth-child(-n+' + nth_child_last + ')' +
            ' > ' +
            selector_parts.join(' > ');

        console.log("Selector:", selector);

        return root.querySelectorAll(selector);
    }
};
