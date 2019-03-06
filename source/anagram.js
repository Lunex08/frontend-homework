'use strict';

function anyCase(a, b) {
    return String(a).localeCompare(b);
}

/**
 * Находит анаграммы.
 * @author - Ражев М. А., АПО-22
 * @param {const} title - массив слов
 * @returns {String[][]} - массив анаграмм (в каждой группе более одного слова)
 */

const anagram = arr => {
    if(!Array.isArray(arr)) {
        console.error("Input data error: not massive")
        return;
    }

    const groups = {};
    arr.forEach( item => {
        const sorted = item.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
        
        if (!groups[sorted]) {
            groups[sorted] = []
        }

        groups[sorted].push(item)
    });

    const result = [];
    Object.keys(groups).filter(key => groups[key].length > 1).forEach((key) => result.push(groups[key].sort()));
    
    return result.sort(anyCase);
}