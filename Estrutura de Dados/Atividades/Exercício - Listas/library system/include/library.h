#ifndef LIBRARY_H
#define LIBRARY_H

#include "book.h"

#define MAX_BOOKS 100
#define fmt "%s\n"

typedef struct Library {
    Book first_book;
    int num_books; 
    int max_books;
} Library;

Library newLibrary();
void AddBook(Library *library, Book book);
void ShowBooks(Library library);

#endif