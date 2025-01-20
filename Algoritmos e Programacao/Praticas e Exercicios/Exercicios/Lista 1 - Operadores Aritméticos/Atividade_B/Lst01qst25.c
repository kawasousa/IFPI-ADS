#include <stdio.h>

//numero inteiro de metros em quilometros e metros

int GetNumber(char message[]){
    int number;

    printf("%s", message);
    scanf("%d", &number);

    return number;
}

int main(){
    //Entrada
    int totalMeters = GetNumber("Digite a quantidade total de metros: ");

    //Processamento
    int kilometers = totalMeters / 1000;
    int meters = totalMeters - (kilometers*1000);

    //Saida
    printf("%d metros equivalem a %d quilometros e %d metros.", totalMeters, kilometers, meters);

    return 0;
}