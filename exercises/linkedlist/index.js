// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }
    // Insert First Method
    insertFirst(data) {
        // create a new Node, set the next value to this.head pointing the new node to the previous head
        // If there is no head value it will be set to null
        this.head = new Node(data, this.head);
    }
    // Size Method - return number/int of nodes in a LL
    size() {
        let counter = 0;
        // reference the first node in LL
        let node = this.head;
        // if LL has no head, checks if node is true.
        // if no node fails and does not execute
        // if exists, enters while loop
        // found one node, increment counter by 1
        // update position to next node until node returns false(node = null)
        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }
    /// return the first node of the LL (head)
    getFirst() {
        return this.head;
    }

    /// return the last node in the LL
    getLast() {
        if (!this.head){
            return null;
        }
        
        // give reference to the node
        let node = this.head;
        // loops through list and checks if node exists
        while (node) {
            // if next is null we're at end of list
            if (!node.next){
                // if not defined (null/end) return node
                return node;
            }
            // if it is defined, advance while loop and check node.next value 
            node = node.next;
        }
    }

    /// remove nodes from LL
    // breaks connection between nodes/head
    clear() {
        this.head = null;
    }

    // remove only first node of LL
    removeFirst(){
        if(!this.head){
            return;
        }

        this.head = this.head.next;


    }
}



// Example:
// const list = new LinkedList();
// list.head = new Node(10)

module.exports = { Node, LinkedList };
