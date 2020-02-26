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
    removeFirst() {
        // check if list is empty, if so return
        if(!this.head){
            return;
        }
        // works even if only one node, because next will = null
        this.head = this.head.next;
    }

    removeLast() {
        // if list is empty return
        if(!this.head){
            return;
        }

        // if length is 1, remove head
        if(!this.head.next){
            this.head = null;
            return;
        }

        let prev = this.head;
        let node = this.head.next;
        while(node.next){
            // update the value of prev to node
            prev = node;
            // update the reference to node to look at next node
            node = node.next;
        }
        // when traversal completes, redfine the second to last node to point to null and remove last node
        prev.next = null;

    }

    // inserts data at end of list argument data
    insertLast(data) {
        const tail = this.getLast();
        if(tail) {
            // There are some existing nodes in our chain
            tail.next = new Node(data);
        } else {
            // if LL is empty
            // add newly created node as head
            this.head = new Node(data);
        }
    }

    // Returns the node at the provided index
    getAt(index){
        // edge case if empty list
        // edge case if only one element
        // check size vs desired index to see if it is out of bounds
        
        // this is redundant because if node = null, while will not execute
        if(!this.head) {
            return null;
        }

        let counter = 0;
        let node = this.head;
        
        while(node){
            if(counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    }

    // remove node at given index
    removeAt(index) {
        // take prev node and assign to next.next to skip/remove given index
        // edge cases - 
        // LL is empty
        if(!this.head){
            return;
        }
        // remove from list of size 1
        if (index === 0) {
            // removes first element by pointing head to null
            this.head = this.head.next;
            return;
        }

        const prev = this.getAt(index - 1);
        // if index is out of bounds, or does not exist/null, return
        if(!prev || !prev.next) {
            return;
        }
        // update current next to the next node's next.
        prev.next = prev.next.next;
    }

    insertAt(data, index) {
        // insert a new node with data at index 0 when list empty
        if(!this.head){
            this.head = new Node(data);
            return;
        }
        // insert a new node at index 0 with elements inside
        // creates a new node with the next property of the current head by passing in current this.head
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        // insert a new node at a middle index
        const prev = this.getAt(index - 1) || this.getLast();
        // prev.next is current prev to index - 1
        const node = new Node(data, prev.next);
        // repair the next value of prev to new node
        prev.next = node;

        // insert a new node with data at last index (if out of bounds, add to end of list)
        // if we use || or if the index is out of bounds it will call this.getLast and add the new node to end of list
    }

    forEach() {
        // iterate through list
        // do funciton on each node in list
    }


}



// Example:
// const list = new LinkedList();
// list.head = new Node(10)

module.exports = { Node, LinkedList };
