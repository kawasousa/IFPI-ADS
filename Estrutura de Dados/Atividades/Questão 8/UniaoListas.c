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

int hasNoItem(Item item, List list)
{
    while (list != NULL && list->item < item)
    {
        list = list->next;
    }

    return (list == NULL || list->item != item);
}

/* Question */

List listUnion(List *A, List *B)
{
    List new = *A;

    while (*B != NULL)
    {
        if (hasNoItem((*B)->item, new))
        {
            insertItem((*B)->item, &new);
        }

        B = &(*B)->next;
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

    List unionList = listUnion(&listA, &listB);

    printf("iniciando...\n");
    printf("Lista A...\n");
    showList(listA);

    printf("Lista B...\n");
    showList(listB);

    printf("Lista uniao...\n");
    showList(unionList);

    printf("\nFim do programa!");
    return 0;
}