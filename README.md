[![Build status](https://ci.appveyor.com/api/projects/status/hspr1laf5ksbaum6?svg=true)](https://ci.appveyor.com/project/zuev720/ra-7-1)


[GitHub-pages](https://zuev720.github.io/ra-7.1/)


Форматирование даты публикации
===

Есть страница, содержащая список видеозаписей. 
У каждого блока есть дата публикации. 

![Relative Time](https://github.com/netology-code/ra16-homeworks/raw/master/hoc/time/assets/time.png)

В данный момент выводится просто текущее значение (Пример `2017-09-01 14:15:10`). 
Было вынесено решение изменять представление даты следующим образом в зависимости от его значения:
`12 минут назад` если прошло меньше часа, `5 часов назад` если прошло больше часа, `X дней назад` если больше суток.
