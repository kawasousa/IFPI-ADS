#ifndef LISTA_CIRCULAR_H   // Verifica se LISTA_CIRCULAR_H já foi definida
#define LISTA_CIRCULAR_H   // Define LISTA_CIRCULAR_H para evitar múltiplas inclusões

typedef int Item;                    // Define o tipo Item como int

// Estrutura do nó da lista encadeada circular
typedef struct no {
    Item item;                       // Valor armazenado no nó
    struct no *prox;                 // Ponteiro para o próximo nó na lista
} *Lista;                            // Define 'Lista' como um ponteiro para struct no

// Declarações das funções
Lista criar_no(Item x);              // Função para criar um novo nó
Lista empilhar(Lista l, Item x);     // Função para adicionar um nó ao final da lista
Lista desempilhar(Lista l);          // Função para remover o primeiro nó da lista
void imprimir(Lista l);              // Função para imprimir os elementos da lista

#endif                               // Fim da condicional de inclusão