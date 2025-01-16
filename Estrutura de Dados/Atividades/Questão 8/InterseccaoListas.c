#include <stdio.h>
#include <stdlib.h>
#include "list.h"
#include <string.h>

/* Functions */

List newNode(Item item, List list)
{
    List new = malloc(sizeof(struct Node));

    new->item = item;
    new->next = list;

    return new;
}

void insertItem(Item item, List *list)
{
    while (*list != NULL && (*list)->item < item)
    {
        list = &(*list)->next;
    }

    *list = newNode(item, *list);
}

void showList(List list)
{
    while (list != NULL)
    {
        printf(fmt, list->item);
        printf(" ");
        list = list->next;
    }
}

int hasItem(Item item, List list)
{
    while (list != NULL && list->item < item)
    {
        list = list->next;
    }

    return (list != NULL && list->item == item);
}

/* Question */

List intersection(List *A, List *B)
{
    List new = NULL;  

    while (*A != NULL)
    {
        if (hasItem((*A)->item, *B)){
        insertItem((*A)->item, &new); 

        }
        A = &(*A)->next;
    }
    return new;
}

void fillList(List *list, int itens_qtd){
    int value;
    for (int i = 1; i <= itens_qtd; i++){
        printf("Insira o item %d: ", i);
        scanf("%d", &value);
        insertItem(value, list);

    }

}

/* MAIN */

int main()
{
    List listA = NULL;
    List listB = NULL;

    insertItem(3, &listA);
    insertItem(2, &listA);
    insertItem(6, &listA);

    insertItem(6, &listB);
    insertItem(2, &listB);
    insertItem(1, &listB);

    List intersectionList = intersection(&listA, &listB);

    printf("iniciando...\n");
    printf("Lista A:\n");
    showList(listA);

    printf("\nLista B:\n");
    showList(listB);

    printf("\nLista interseccao...\n");
    showList(intersectionList);

    printf("\nFim do programa!");
    return 0;
}