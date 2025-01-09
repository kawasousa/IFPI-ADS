#ifndef BOOK_H
#define BOOK_H

typedef struct Book {
    int ID;

    char title[100];
    char author[100];
    int year;

    struct Book *next;
} *Book;

Book newBook(int ID, char title[100], char author[100], int year);

#endif