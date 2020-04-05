class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class List {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    push(value) {
        let newNode = new Node(value);
        if (this.isEmpty()) {  //can use 'isEmpty' function
            this.first = this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
    };
    
    pop(){
        if(this.isEmpty()){
            return undefined;
        }
        let currentNode = this.first;
        let previusNode = this.first;

        while(currentNode.next !== null){
            previusNode = currentNode;
            currentNode = currentNode.next;
        }
        previusNode.next = null;
        this.last = previusNode;
        this.size--;
        if(this.size === 0) {
            this.first = null;
            this.last = null;
        }
        return currentNode;
    };

    unshift(value) {
        let newNode = new Node(value);
        if (this.isEmpty()) {
            this.last = newNode;
        }
        newNode.next = this.first;
        this.first = newNode;
        this.size++;
    };

    shift() {
        if (this.isEmpty()) {
            return undefined;
        }
        let deletedNode = this.first;
        this.first = deletedNode.next;
        this.size--;
        if (this.size === 0) {
            this.first = null;
            this.last = null;
        }
        return deletedNode;
    };

    insert(value, position) {
        if (position < 0 || position > this.size) {
            return false;//or false
        }
        if (position === this.size) {
            this.push(value);
            return true;//
        }
        if (position === 0) {
            this.unshift(value);
            return true;
        }
        let newNode = new Node(value);
        let currentNode = this.first;
        let previusNode = this.first;

        for(let i = 1; i <= position; i++){
            previusNode = currentNode;
            currentNode = currentNode.next;
        }
        // console.log(previusNode, '->', currentNode);
        newNode.next = previusNode.next;
        previusNode.next = newNode;
        this.size++;
        return true;
    };

    remove(position) {
        if(position < 0 || position >= this.size) {
            return false;
        }
        if(position === this.size - 1) {
            return this.pop();
        }
        if(position === 0) {
            return this.shift();
        }
        let currentNode = this.first;
        let previusNode = this.first;

        for(let i = 0; i < position; i++){
            previusNode = currentNode;
            currentNode = currentNode.next;
        }
        previusNode.next = currentNode.next;
        this.size--;
        // console.log(previusNode, '->', currentNode,'->' , currentNode.next);
        return currentNode;
    };
};


let newList = new List();

newList.pop()
newList.shift();
newList.shift();
newList.pop();
newList.unshift(78);
newList.push(4555);
newList.insert(4566669,2);
newList.remove(2);
newList.push(4555);
newList.pop();
newList.isEmpty();

console.log(newList);





