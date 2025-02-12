#include <stdio.h>
#include "book.h"
#include "library.h"

int main(){
    puts("inicio da aplicacao!");

    Library library = newLibrary();
    ShowBooks(library);
    Book book_kawas = newBook(0, "Livro teste", "kawas", 1984);
    Book book_enzo = newBook(0, "enzo gay", "enzo", 1984);


    printf("livros antes de adicionar: %d\n", library.num_books);
    AddBook(&library, book_kawas);
    printf("livros depois de adicionar: %d\n", &library.num_books);

    puts("primeiro livro: ");
    printf("%s\n", library.first_book->title);

    puts("\nfim da aplicacao!");

    return 0;
}