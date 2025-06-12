export class Node {
    public item: number;
    public left: Node | null;
    public right: Node | null;

    constructor(item?: number, left?: Node | null, right?: Node | null) {
        this.item = item === undefined ? 0 : item;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}