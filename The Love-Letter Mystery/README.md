## The Love-Letter Mystery

James pegou uma carta de amor que seu amigo Harry escreveu para sua namorada. Como é muito brincalhão, James decidiu pregar uma peça em seu amigo e modificou todas as palavras da carta por [palíndromos] ([https://pt.wikipedia.org/wiki/Pal%C3%ADndromo](https://pt.wikipedia.org/wiki/Pal%C3%ADndromo)).

Ao modificar as letras da palavra, ele seguiu duas regras:

_(a)_ Ele só poderia reduzir o valor da letra. Por exemplo, ele poderia trocar de 'd' para 'c', mas não poderia trocar de 'c' para 'd'. _(b)_ Se ele tivesse que modificar repetidamente o valor de uma letra, ele poderia fazê-lo até a letra se tornar 'a'. Uma vez que a letra fosse alterada para 'a', ela não poderia mais ser modificada.

Cada redução no valor de qualquer letra é contabilizada como uma única operação. Encontre o número mínimo de operações que ele realiza para converter uma determinada string em um palíndromo.

**Formato de Entrada** A primeira linha contém um inteiro _T_ (número de casos de teste). Cada linha _T_ seguinte contem uma string.

**Formato de Saída** Uma única linha que contem o número de operações mínimas correspondentes a cada caso de ensaio.

**Restrições** 1 ≤ _T_ ≤ 10
1 ≤ _length de string_ ≤ 10^4^ Todos os caracteres são letras minúsculas do alfabeto inglês.

**Exemplo de Entrada #00**

```
 3
 abc
 abcba
 abcd
```

**Exemplo de Saída # 00**

```
 2
 0
 4
```

**Explicação**

Para o primeiro caso de teste, ab*c* -> ab*b* -> ab*a*. Para o segundo caso de teste, abcba é uma sequência palíndroma. Para o terceiro caso de teste, abc*d* -> abc*c* -> abc*b* -> abc*a* = ab*c*a -> ab*b*a.
