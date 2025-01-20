#include <stdio.h>

//ºC para ºF

float GetNumber(char message[]){
    float number;

    printf("%s", message);
    scanf("%f", &number);

    return number;
}

int main(){
    //Entrada
    float temperatureInC = GetNumber("Digite a temperatura em graus Celcius: ");

    //Processamento
    float tempeatureInF = (9 * temperatureInC + 160) / 5;

    //Saida
    printf("O equivalente de %.1f graus Celcius e %.1f graus Fahrenheit.", temperatureInC, tempeatureInF);

    return 0;
}