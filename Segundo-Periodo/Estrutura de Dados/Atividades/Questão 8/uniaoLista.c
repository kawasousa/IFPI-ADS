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
    List new = NULL;

    List temp = *A;
    while (temp != NULL)
    {
        insertItem(temp->item, &new);
        temp = temp->next;
    }

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

void fillList(List *list, int itens_qtd)
{
    int value;
    for (int i = 1; i <= itens_qtd; i++)
    {
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
    char menu[1000] = "--------------------------\n1-> Iniciar Listas\n2-> Mostrar Uniao\n--------------------------\n> ";
    int option = 3;

    while (option != 2)
    {
        printf("%s", menu);
        scanf("%d", &option);
        system("cls");

        if (option == 1)
        {
            int itens;
            int itensB;

            printf("Quantos itens você deseja inserir na lista A?\n > ");
            scanf("%d", &itens);
            system("cls");
            fillList(&listA, itens);

            printf("Quantos itens você deseja inserir na lista B?\n > ");
            scanf("%d", &itensB);
            system("cls");
            fillList(&listB, itensB);
        }
        else if (option == 2)
        {
            break;
        }
        else
        {
            printf("Insira novamente\n");
        }
    }

    List unionList = listUnion(&listA, &listB);

    printf("iniciando...\n");
    printf("Lista A:\n");
    showList(listA);

    printf("\nLista B:\n");
    showList(listB);

    printf("\nLista uniao\n");
    showList(unionList);

    printf("\nFim do programa!");
    return 0;
}