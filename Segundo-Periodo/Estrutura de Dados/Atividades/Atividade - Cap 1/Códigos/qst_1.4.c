#include <stdio.h>

typedef struct {
    char valor[10];
} str;

int main(){
    str x = {"um"};
    str y = {"dois"};

    puts(x.valor);
    x = y;
    puts(x.valor);

    return 0;
}

