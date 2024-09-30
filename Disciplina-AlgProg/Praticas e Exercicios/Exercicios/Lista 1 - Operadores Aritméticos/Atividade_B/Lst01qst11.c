#include <stdio.h>

//Inverso de um número de 3 digitos

int GetNumber(char message[]){
    int number;
    printf("%s", message);
    scanf("%d", &number);

    return number;
}

int main(){
    //Entrada
    int number = GetNumber("Digite um numero de tres digitos: ");

    //Processamento
    int hundred = number / 100;
    int ten = (number - hundred*100) / 10;
    int unity = number - hundred*100 - ten*10;

    int newHundred = unity*100;
    int newTen = ten * 10;
    int newUnity = hundred;

    int invertedNumber = newHundred + newTen + newUnity;

    //Saída
    printf("O inverso do numero %d e %d!", number, invertedNumber);

    return 0;
}