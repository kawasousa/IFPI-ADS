#include <stdio.h>

//Area do retangulo

float GetNumber(char message[]){
    float number;

    printf("%s", message);
    scanf("%f", &number);

    return number;
}

int main(){
    //Entrada
    float base = GetNumber("Digite o valor da base do triangulo (em cm): ");
    float height = GetNumber("Digite o valor da altura do triâgulo (em cm): ");

    //Processamento
    float area = base * height;

    //Saida
    printf("A area do seu triangulo e de %.2fcm!", area);

    return 0;
}