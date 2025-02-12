#include "library.h"
#include <stdlib.h>
#include <stdio.h>

Library newLibrary() {
    Library library;
    library.max_books = MAX_BOOKS;
    library.num_books = 0;

    return library;
}

void AddBook(Library *library, Book book){
    if(library->num_books == library->max_books) return;

    Book last_book = library->first_book;
    while(last_book->next != NULL){
        last_book = last_book->next;
    }

    last_book->next = book;
    library->num_books++;
}

void ShowBooks(Library library){
    if(library.num_books == 0){
        puts("Lista vazia!");
    }

    Book book = library.first_book;
    while(book != NULL){
        printf(fmt, book->title);
        book = book->next;
    }
}
