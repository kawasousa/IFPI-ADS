#include <stdio.h>

//km para m

float GetNumber(char message[]){
    float number;

    printf("%s", message);
    scanf("%f", &number);

    return number;
}

int main(){
    //Entrada
    float kilometer = GetNumber("Digite a quantidade de quilometros: ");

    //Processamento
    float meter = kilometer * 1000;

    //Saida
    printf("O equivalente de %.2fkm e %.2fm.", kilometer, meter);

    return 0;
}