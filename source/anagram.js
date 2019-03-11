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

    const groups = arr.reduce((accumulator, currentValue) => {
        const sorted = currentValue.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
        if (!accumulator[sorted]) {
            accumulator[sorted] = [];
        }
        accumulator[sorted].push(currentValue);
        return accumulator;
    }, {});

    return Object.keys(groups).reduce((accumulator, currentValue) => {
        if (groups[currentValue].length > 1) {
            accumulator.push(groups[currentValue].sort())
        }
        return accumulator;
    }, []).sort(anyCase);
}