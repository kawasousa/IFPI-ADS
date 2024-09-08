#include <stdio.h>

// Numero inteiro de segundos totais para horas, minutos e segundos

int GetNumber(char message[]){
    int number;

    printf("%s", message);
    scanf("%d", &number);

    return number; 
}

int main(){
    //Entrada
    int totalSeconds = GetNumber("Digite o numero total de segundos: ");

    //Processamento
    int hours = totalSeconds / 3600;
    int minutes = (totalSeconds - (hours * 3600)) / 60;
    int seconds = totalSeconds - (hours*3600) - (minutes*60);
    
    //Saida
    printf("%d segundos equivalem a %d horas, %d minutos e %d segundos.", totalSeconds, hours, minutes, seconds);

    return 0;
}