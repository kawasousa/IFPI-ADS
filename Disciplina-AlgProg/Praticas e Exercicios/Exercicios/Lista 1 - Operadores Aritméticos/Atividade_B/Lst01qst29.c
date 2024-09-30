#include <stdio.h>

//total de meses para anos e meses

int GetNumber(char message[]){
    int number;

    printf("%s", message);
    scanf("%d", &number);

    return number;
}

int main(){
    //Entrada
    int totalMonths = GetNumber("Digite o total de meses: ");

    //Processamento
    int years = totalMonths / 24;
    int months = totalMonths - years*24;

    //Saída
    printf("%d meses equivalem a %d anos e %d meses.", totalMonths, years, months);

    return 0;
}