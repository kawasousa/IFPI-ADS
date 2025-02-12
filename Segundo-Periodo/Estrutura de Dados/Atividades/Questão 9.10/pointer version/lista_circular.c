#include <stdlib.h>
#include <stdio.h>
#include "lista_circular.h"

Lista criar_no(Item x) {
    Lista n = malloc(sizeof(struct no));      // alocando a memoria
    n->item = x;                              // atribui o valor ao item do nó
    n->prox = n;                              // o nó aponta pra si mesmo
    return n;                                 // retorno do novo nó criado
}

// Implementação da função para empilhar (adicionar ao final da lista circular)
void empilhar(Lista *l, Item x) {             
    Lista novo = criar_no(x);                 // cria um novo nó com um valor x à ser passado pelo usuário
    
    if (*l == NULL) {                          // verificação pra ver se a lista ta vazia
        *l = novo;                          // se tiver vazia o nó passa a ser a lista
    }

    Lista temp = *l;                           // criação de ponteiro temporário pra percorrer a lista até o final
    while (temp->prox != *l) {                 // loop para percorrer a lista
        temp = temp->prox;
    }

    temp->prox = novo;                        // agora o ultimo nó aponta para o novo
    novo->prox = *l;                           // e o novo nó (último) aponta para o primeiro
}

// Implementação da função para desempilhar (remover o primeiro nó)
void desempilhar(Lista *l) {
    if (*l == NULL) {                         // verifica se a lista está vazia
        printf("Lista vazia\n");              // se estiver não tem como retira algo, então retorna uma mensagem avisando
        return;
    }

    if ((*l)->prox == *l) {                   // Se a lista tiver apenas um nó
        free(*l);                             // Libera a memória do nó
        *l = NULL;
        return;                                // Retorna NULL
    }

    Lista temp = *l;                           // Ponteiro temporário para encontrar o último nó
    while (temp->prox != *l) {                 // Percorre até o último nó
        temp = temp->prox;
    }

    Lista removido = *l;                      // Guarda o ponteiro do nó a ser removido
    *l = (*l)->prox;                              // O início da lista agora é o próximo nó
    temp->prox = *l;                           // O último nó aponta para o novo início
    
    free(removido);                           // Libera a memória do nó removido
}

// Implementação da função pra imprimir a lista circular
void imprimir(Lista l) {
    if (l == NULL) {                          // Se a lista estiver vazia
        printf("Lista vazia\n");              // Imprime uma mensagem
        return;
    }
    Lista temp = l;                           // Ponteiro temporário para percorrer a lista
    do {                                      // Loop para percorrer a lista circular
        printf("%d ", temp->item);            // Imprime o item do nó atual
        temp = temp->prox;                    // Move para o próximo nó
    } while (temp != l);                      // Repete até voltar ao início
    printf("\n");                             // quebra de linha
}