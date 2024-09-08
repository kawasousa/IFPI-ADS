#include <stdio.h>

//Media ponderada

float GetFloat(char message[]){
    float number;

    printf("%s", message);
    scanf("%f", &number);

    return number;
}

int GetInt(char message[]){
    int number;

    printf("%s", message);
    scanf("%d", &number);

    return number;
}

int main(){
    //Entrada
    float score1 = GetFloat("Digite a primera nota: ");
    int weight1 = GetInt("Digite o peso da primeria nota: ");

    float score2 = GetFloat("Digite a segunda nota: ");
    int weight2 = GetInt("Digite o peso da segunda nota: ");

    float score3 = GetFloat("Digite a terceira nota: ");
    int weight3 = GetInt("Digite o peso da terceira nota: ");


    //Processamento
    float average = (score1*weight1 + score2*weight2 + score3*weight3) /  (weight1 + weight2 + weight3);

    //Saída
    printf("A media final do aluno foi de %.2f pontos!", average);

    return 0;
}