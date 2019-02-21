'use strict';


function anyCase(a, b) {
    if (a[0].toLowerCase() > b[0].toLowerCase())
      return 1;
    if (a[0].toLowerCase() < b[0].toLowerCase())
      return -1;
    else
      return 0;
    }
/**
 * Находит анаграммы.
 * @author - Ражев М. А., АПО-22
 * @param {const} title - массив слов
 * @returns {String[][]} - массив анаграмм (в каждой группе более одного слова)
 */

const anagram = arr => {
    try{
        if(arr.constructor !== Array) {
            throw new Error("Input data error: not massive");
        }
        // Объект для группировки по признаку "слова-анаграммы".
        const groups = {};

        // Рассматриваем все исходные слова
        arr.forEach( item => {
            if(typeof item !== 'string') {
                throw new Error("Input data error: not string element");
            }
            // Удалить все пробелы, разбить слово на буквы, сортировать и слить обратно.
            const sorted = item.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
        
            if(groups[sorted]) {
                // В группе sorted уже есть анаграммы.
                groups[sorted].push(item);
            } else {
                groups[sorted] = [item];
            }
        });
    
        const result = [];

        for(let property in groups) {
            // По условию задачи, интересуют группы, где более одной анаграммы.
            if(groups[property].length > 1) {
                result.push(groups[property].sort());
            }
        }
        // Сортировка групп.
        result.sort(anyCase);
        return result;
    } catch(error) {
        return error.message;
    }
}
