#include <stdio.h>
#include <math.h>

//volume da esfera

float GetNumber(char message[]){
    float number;

    printf("%s", message);
    scanf("%f", &number);

    return number;
}

int main(){
    //Entrada
    float radius = GetNumber("Digite o valor do raio da esfera (em cm): ");

    //Processamento
    float pi = 3.14;
    float volume = 4 * pi * pow(radius, 3);

    //Saida
    printf("O volume da circunferencia e de %.2fcm.", volume);

    return 0;
}