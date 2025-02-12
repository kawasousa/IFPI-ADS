#include "book.h"
#include <string.h>
#include <stdlib.h>

Book newBook(int ID, char title[100], char author[100], int year){
    Book book = malloc(sizeof(Book));

    book->ID = ID;
    strcpy(book->title, title);
    strcpy(book->author, author);
    book->year = year;

    return book;
}