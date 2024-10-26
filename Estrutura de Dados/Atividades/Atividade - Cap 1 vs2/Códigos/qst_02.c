#include <stdio.h>
#include <string.h>

int equals(char *n1[20], char *n2[20]){
    if(strlen(*n1) != strlen(*n2)){
        return 0;
    }

    for(int i = 0; i < strlen(*n1); i++){
        if(n1[i] != n2[i]){
            return 0;
        }
    }

    return 1;
}

int main(){
    char nome1[20];
    char nome2[20];

    scanf("%s", nome1);
    scanf("%s", nome2);

    if(equals(nome1, nome2)){
        puts("Sao iguais");
    }
    else{
        puts("Sao diferentes");
    }

    return 0;
}