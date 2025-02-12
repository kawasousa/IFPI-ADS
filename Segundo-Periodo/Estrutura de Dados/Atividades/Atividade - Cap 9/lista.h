#define fmt "%d" // Formato de exibiçõ dos itens.
typedef int Item; // Tipo dos itens da lista.
typedef struct no { // Estrutura de nós da lista.
    Item item;
    struct no *prox;
} *Lista; // Tipo de ponteiro para lista.

Lista no(Item x, Lista p){
    Lista n = (Lista)malloc(sizeof(struct no));

    n->item = x;
    n->prox = p;

    return n;
}

void exibe(Lista l){
    while(l != NULL){
        print(fmt, l->item);
        l = l->prox;
    }
}

void anexa(Lista *A, Lista B){
    if(B == NULL){
        return;
    }

    while(*A != NULL){
        
    }
}