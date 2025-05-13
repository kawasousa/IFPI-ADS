#define fmt "%d "
typedef int Item;

typedef struct arv{
    struct arv *esq;
    Item item;
    struct arv *dir;
} *Arv;

/* Cria uma nova árvore */
Arv new_arv(Arv *esq, Item item, Arv *dir);
/* Destroi a arvore */
void destroi(Arv *arv);
/* Adiciona um novo item à arvore de modo binário */
void insere(Item item, Arv *arv);
/* Retorna 0 se o item está na árvore e 1 se estiver */
int busca(Item item, Arv arv);
/* Remove o maior item da árvore e retorna o valor desse item */
Item removeMax(Arv *arv);
/* Devole o número de nós da árvore */
int nos(Arv arv);
/* Devolve o número de nós sem filhos da árvore */
int folhas(Arv arv);