#include <stdio.h>


//Numero intero de quatro digitos para base decimal

int GetNumber(char message[]){
    int number;

    printf("%s", message);
    scanf("%d", &number);

    return number;
}



int main(){
    //Entrada
    int number = GetNumber("Digite um numero inteiro de quatro digitos: ");

    //Processamento
    char binaryNumber[] = GetBinaryNumber();

    //Saida
    printf("O numero %d, em forma decimal, e %s", number, binaryNumber);

    return 0;
}