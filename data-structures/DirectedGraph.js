class DirectedNode {
    constructor(data, neighbors) {
        this.data = data
        this.neighbors = neighbors
        this.visited = false
    }

    addNeighbors(neighbors) {
        neighbors.forEach(node => this.neighbors.push(node))
    } 
}

module.exports = {
    DirectedNode
}