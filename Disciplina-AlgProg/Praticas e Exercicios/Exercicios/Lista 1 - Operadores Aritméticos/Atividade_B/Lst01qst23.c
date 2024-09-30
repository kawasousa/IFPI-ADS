#include <stdio.h>

//kg para g

float GetNumber(char message[]){
    float number;

    printf("%s", message);
    scanf("%f", &number);

    return number;
}

int main(){
    //Entrada
    float kilogram = GetNumber("Digite o valor em quilograma: ");

    //Processamento
    float gram = kilogram * 1000;

    //Saida
    printf("O equivalente de %.1f quilogramas e %.1f gramas.", kilogram, gram);

    return 0;
}