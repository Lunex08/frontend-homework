'use strict';

/**
 * Находит анаграммы.
 * @author - Ражев М. А., АПО-22
 * @param {const} title - массив слов
 * @returns {String[][]} - массив анаграмм (в каждой группе более одного слова)
 */

const anagram = arr => {
    // Объект для группировки по признаку "слова-анаграммы".
    let groups = {};

    // Рассматриваем все исходные слова
    arr.forEach( item => {
      // Разбить слово на буквы, отсортировать и слить обратно
      let sorted = item.toLowerCase().split('').sort().join(''); // (*)
      // Удаляем все пробелы.
      sorted = sorted.replace(/\s+/g, '');
      if(groups[sorted]) {
          // В группе sorted уже есть анаграммы.
          groups[sorted].push(item);
      } else {
          groups[sorted] =  [item];
        }
    });

    const result = [];

    for(let property in groups) {
        // По условию задачи, интересуют группы, где более одной анаграммы.
        if(groups[property].length > 1) {
            result.push(groups[property].slice().sort());
        }
    }
    // Сортировка групп.
    result.sort();

    return result;
}
