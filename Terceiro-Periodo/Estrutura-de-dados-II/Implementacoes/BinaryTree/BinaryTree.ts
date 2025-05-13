import { Node, NodeInterface } from "./Node";

export interface BinaryTreeInterface<T> {
    root: NodeInterface<T> | null;

    insert(value: T): void;
    find(value: T): NodeInterface<T> | null;
    preOrderTraversal(root?: NodeInterface<T> | null): T[];
    inOrderTraversal(root?: NodeInterface<T> | null): T[];
    postOrderTraversal(root?: NodeInterface<T> | null): T[];
};

class BinaryTree<T> implements BinaryTreeInterface<T> {
    root: NodeInterface<T> | null = null;

    public insert(value: T): void {
        if (!this.root) {
            this.root = new Node(value);
        }
        else {
            this.recursiveInsert(value, this.root);
        }
    }

    private recursiveInsert(value: T, node: Node<T>) {
        if (value < node.value) {
            if (node.left) {
                this.recursiveInsert(value, node.left);
            }
            else {
                node.left = new Node(value);
            }
        }
        else {
            if (node.right) {
                this.recursiveInsert(value, node.right);
            }
            else {
                node.right = new Node(value);
            }
        }
    }

    public find(value: T): NodeInterface<T> | null {
        return this.recursiveFind(value, this.root);
    }

    private recursiveFind(value: T, node: NodeInterface<T> | null): NodeInterface<T> | null {
        if (!node) return null;
        if (value === node.value) return node;

        if (value < node.value) return this.recursiveFind(value, node.left);

        return this.recursiveFind(value, node.right);
    }

    public preOrderTraversal(root?: NodeInterface<T> | null | undefined): T[] {
        throw new Error("Method not implemented.");
    }

    public inOrderTraversal(root?: NodeInterface<T> | null | undefined): T[] {
        throw new Error("Method not implemented.");
    }

    public postOrderTraversal(root?: NodeInterface<T> | null | undefined): T[] {
        throw new Error("Method not implemented.");
    }
}