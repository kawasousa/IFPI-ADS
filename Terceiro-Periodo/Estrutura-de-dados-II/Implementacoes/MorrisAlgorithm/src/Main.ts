import { Morris } from "./Morris";
import { Node } from "./Node";

const root = new Node(4);
root.left = new Node(2, new Node(1), new Node(3));
root.right = new Node(5);

const orderedResult = Morris.inOrder(root);

console.log("Resultado do Percurso em Ordem (Morris):", orderedResult);