import { Node } from "./Node";


export class Morris{
    public static inOrder(root: Node | null): number[] {
        const result: number[] = [];
        let current = root;
    
        while (current !== null) {
            if (current.left === null) {
                // 1. Se não há subárvore esquerda, visita o nó e vai para a direita.,3
                result.push(current.item);
                current = current.right;
            } else {
                // Encontra o predecessor na subárvore esquerda.
                let predecessor = current.left;
                while (predecessor.right !== null && predecessor.right !== current) {
                    predecessor = predecessor.right;
                }
    
                if (predecessor.right === null) {
                    // 2a. Cria o "fio" do predecessor para o nó atual e vai para a esquerda.
                    predecessor.right = current;
                    current = current.left;
                } else {
                    // 2b. O fio já existe. Visita o nó, remove o fio e vai para a direita.
                    predecessor.right = null; // Remove o fio
                    result.push(current.item);
                    current = current.right;
                }
            }
        }
    
        return result;
    }
}