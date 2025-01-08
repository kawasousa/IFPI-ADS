#include <stdio.h>
#include <stdlib.h>
#include "list.h"

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
        printf("\n");
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
        if (hasItem((*A)->item, *B))
        {
            insertItem((*A)->item, &new);
        }

        A = &(*A)->next;
    }

    return new;
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
    printf("Lista A...\n");
    showList(listA);

    printf("Lista B...\n");
    showList(listB);

    printf("Lista interseccao...\n");
    showList(intersectionList);

    printf("\nFim do programa!");
    return 0;
}