#include <stdio.h>
#include "lista_circular.h"

int main() {
    Lista l = NULL;

    empilhar(&l, 10);
    empilhar(&l, 20);
    empilhar(&l, 30);

    imprimir(l);

    desempilhar(&l);

    imprimir(l);
    
    return 0;
}