#include <stdio.h>

int main(){
    int a = 3, b = 5;
    
    int *p = &a, *q = &b;

    *p = *p + *q;
    *q = *p - *q;
    *p = *p - *q;

    printf("a: %d, b: %d", a,b);
    return 0;
}