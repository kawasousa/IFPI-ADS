#include <stdio.h>

//Comprimento da circunferencia

float GetNumber(char message[]){
    float number;

    printf("%s", message);
    scanf("%f", &number);

    return number;
}

int main(){
    //Entrada
    float radius = GetNumber("Digite o valor do raio da circunferencia (em cm): ");

    //Processamento
    float pi = 3.1415;
    float lenght = 2 * pi * radius;

    //Saida
    printf("O comprimento da sua circunferencia e de %.2f", lenght);

    return 0;
}