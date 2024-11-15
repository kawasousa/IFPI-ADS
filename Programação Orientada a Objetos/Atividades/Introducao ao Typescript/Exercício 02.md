# Exercício 02 - Introdução ao Typescript
## Questão 01
Enunciado: Qual a diferença entre tipagem dinâmica e tipagem estática
Resposta: Tipagem dinâmica envolve não atribuir o tipo da variável no momento da sua declaração, enquanto tipagem estática trata de explicitar o tipo da variável assim que ela é declarada.
Em linguagens como Python, a tipagem é do tipo dinâmica, o que significa que, a uma mesma variável, podem ser atribuídos valores de diferentes tipos.
```python
# Exemplo de tipagem dinâmica
enzo = 69
enzo = "homossexual"
```
Já em linguagens com tipagem estática, como é o caso de C#, o tipo de uma variável deve ser explicitado no momento da declaração.

```csharp
// Exemplo de tipagem estática
int enzoIdade = 19;
string enzoOrientacao = "homossexual"
// O valor "homossexual" não pode ser passado à variável enzoIdade porque "homossexual" é uma string e a variavel é do tipo int
```
