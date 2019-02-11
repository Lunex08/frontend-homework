'use strict';

/* 
 * Группировка слов по анаграммам.
 * Алгоритм: сортировать буквы слова, вставить в словарь пару
 * "отсортированные буквы слова - исходное слово". Сортировать 
 * анаграммы внутри групп и сделать сортировку групп.
*/

function anagram(arr) {
    // Объект для группировки по признаку "слова-анаграммы".
    var groups = {};

    // Рассматриваем все исходные слова
    for (var i = 0; i < arr.length; i++) {
      // Разбить слово на буквы, отсортировать и слить обратно
      var sorted = arr[i].toLowerCase().trim().split('').sort().join(''); // (*)
      // Удаляем все пробелы. 
      sorted = sorted.replace(/\s+/g, '');
      if(groups[sorted] !== undefined) {
          // В группе sorted уже есть анаграммы.
          groups[sorted].push(arr[i]);
      } else 
          groups[sorted] =  [ arr[i] ];
    }

    const result = [];

    for(var property in groups) {
        // По условию задачи, интересуют группы, где более одной анаграммы.
        if(groups[property].length > 1)
            result.push(groups[property].slice().sort());
    }
    // Сортировка групп.
    result.sort();
      
    return result;
}