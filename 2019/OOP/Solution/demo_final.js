

class Branch {
    constructor() {

    }
}

class LivingBranch extends Branch {
    constructor() {
        super();
        this.leafs = [ ];
    }
}

class Stub extends Branch {
    constructor() {
        super();
    }
}

class Trunk {
    constructor() {
        this.branches = [ ];
    }
}

class Tree {
    constructor() {
        this.trunk = new Trunk();
    }
}

const tree1 = new Tree();
tree1.trunk.branches.push(new Branch());

console.log(tree1.trunk.branches);
