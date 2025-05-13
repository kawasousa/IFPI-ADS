export interface NodeInterface<T>{
    value: T;
    left: NodeInterface<T> | null;
    right: NodeInterface<T> | null;
}

export class Node<T> implements NodeInterface<T>{
    public value: T;
    public left: Node<T> | null;
    public right: Node<T> | null;

    constructor(value: T){
        this.value = value;
        this.left = null;
        this.right = null;
    };
}