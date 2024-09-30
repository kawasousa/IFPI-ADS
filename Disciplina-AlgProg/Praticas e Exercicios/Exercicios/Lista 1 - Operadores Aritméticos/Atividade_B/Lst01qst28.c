#include <stdio.h>

//total de horas para semanas, dias e horas

int GetNumber(char message[]){
    int number;

    printf("%s", message);
    scanf("%d", &number);

    return number;
}

int main(){
    //Entrada
    int totalHours = GetNumber("Digite o numero total de horas: ");

    //Processamento
    int weeks = totalHours / 168;
    int days = (totalHours - weeks*168) / 24;
    int hours = totalHours - weeks*168 - days*24;

    //Saida
    printf("%d equivalem a %d semanas, %d dias e %d horas.", totalHours, weeks, days, hours);

    return 0;
}