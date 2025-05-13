#include <stdio.h>
#include "arvore.h"

Arv new_arv(Arv *esq, Item item, Arv *dir){
    Arv n = malloc(sizeof(struct arv));

    n->esq = esq;
    n->item = item;
    n->dir = dir;
    return n;
}

void destroi(Arv *arv){
    if (*arv == NULL) return;

    destroi(&(*arv)->esq);
    destroi(&(*arv)->dir);
    free(*arv);
    *arv = NULL;
}

void insere(Item item, Arv *arv){
    if (*arv == NULL) *arv = new_arv(NULL, item, NULL);
    else if (item <= &(*arv)->item) insere(item, &(*arv)->esq);
    else insere(item, &(*arv)->dir);
}

int busca(Item item, Arv arv){
    if (arv == NULL) return 0;

    if (item == arv->item) return 1;
    else if (item <= arv->item) return busca(item, arv->esq);
    else return busca(item, arv->dir);
}

Item removeMax(Arv *arv){
    if (arv == NULL) abort();

    while (&(*arv)->dir != NULL) arv = &(*arv)->dir;

    Arv nArv = *arv;
    Item nItem = nArv->item;
    
    *arv = nArv->esq;

    free(nArv);
    return nItem;
}

int nos(Arv arv){
    if (arv == NULL) return 0;
    int quantidade = 1;
    
    quantidade += nos(arv->esq);
    quantidade += nos(arv->dir);

    return quantidade;
}

int folhas(Arv arv){
    int quantidade = 1;
    
    if (arv->esq != NULL) quantidade = folhas(arv->esq);
    if (quantidade > 1){
        if (arv->dir != NULL) quantidade = folhas(arv->dir);
    }

    return quantidade;
}

/*

1


*/