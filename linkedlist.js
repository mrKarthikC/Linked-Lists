function LinkedList() {
    this.head = null;
    this.tail = null;    
}

function Node(prev, value, next) {

    this.prev = prev;
    this.value = value;
    this.next = next;

}

// Add to Head

LinkedList.prototype.addToHead = function(value) {

    let newNode = new Node(null, value, this.head);

    if(this.head){
        this.head.prev = newNode;
    }
    else{
        this.tail = newNode;
    }

    this.head = newNode;

};

// Add to Tail

LinkedList.prototype.addToTail = function(value) {

    let newNode = new Node(this.tail, value, null);

    if(this.tail){
        this.tail.next = newNode;
    }
    else{
        this.head = newNode;
    }

    this.tail = newNode;

};

// Remove head
LinkedList.prototype.removeHead = function(){

    if(!this.head){
        return null;
    }

    let val = this.head.value;

    this.head = this.head.next;

    if(this.head){
        this.head.prev = null;
    }
    else {
        this.tail = null;
    }

    return val;

};

//Remove tail
LinkedList.prototype.removeTail = function(){

    if(!this.tail){
        return null;
    }

    let val = this.tail.value;

    this.tail = this.tail.prev;

    if(this.tail){
        this.tail.next = null;
    }
    else {
        this.head = null;
    }

    return val;

};


// Traversing

LinkedList.prototype.traverse = function(){

    let currentNode = this.head;
    if(currentNode === null){
        console.log('this is an empty linked list');
        return;
    }
    console.log('head node value is ' + currentNode.value);

    while(currentNode.next){
        currentNode = currentNode.next;
        if(currentNode === this.tail)
            console.log('tail node value is ' + currentNode.value);
        else
            console.log('next node value is ' + currentNode.value);
    }

};

// Traversing

LinkedList.prototype.traverse = function(){

    let currentNode = this.head;
    if(currentNode === null){
        console.log('this is an empty linked list');
        return;
    }
    console.log('head node value is ' + currentNode.value);

    while(currentNode.next){
        currentNode = currentNode.next;
        if(currentNode === this.tail)
            console.log('tail node value is ' + currentNode.value);
        else
            console.log('next node value is ' + currentNode.value);
    }

};

// Searching

LinkedList.prototype.search = function(value){

    let currentNode = this.head;
    if(currentNode === null){
        return false; // if head node is null, linked list is empty, return false.
    }
    else if(currentNode.value === value){
        return true;  // if value exist in head node, return true.
    }

    // iterate through remaining nodes and return true if n is there in any of the nodes.
    while(currentNode.next){
        currentNode = currentNode.next;
        if(currentNode.value === value){
            return true;
        }
    }

    return false;  // return false if n is not found anywhere. 
};

ll = new LinkedList();

ll.addToHead(5);

ll.addToHead(6);

ll.addToTail(4);

ll.addToTail(3);

ll.removeHead();

ll.removeTail();

console.log(ll);
