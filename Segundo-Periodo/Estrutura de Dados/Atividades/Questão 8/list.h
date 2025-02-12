#ifndef LIST_H
#define LIST_H

/* Definitions */

#define fmt "%d"

typedef int Item;

typedef struct Node
{
    Item item;
    struct Node *next;
} *List;

/* Functions */

List newNode(Item item, List list);
void showList(List list);
void insertItem(Item item, List *list);

#endif