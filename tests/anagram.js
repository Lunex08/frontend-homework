'use strict';

QUnit.module('Тестируем функцию anagram', function () {
	QUnit.test('Слова', function (assert) {
		const input = [
			'кот', 'внимание', 'пила', 'барокко', 
			'стоп', 'ток', 'кошка',
			'липа', 'коробка', 'пост', 'Вениамин'
		];

		const output = [
			[ 'барокко', 'коробка' ],
			[ 'Вениамин', 'внимание'],
			[ 'кот', 'ток' ],
			[ 'липа', 'пила' ],
			[ 'пост', 'стоп' ]
		];

		assert.deepEqual(anagram(input), output);
	});
        
	QUnit.test('Фразы', function (assert) {
		const input = [
			'I learned words', 'Eleven plus Two',
			'Built to stay free', 'Older and Wiser', 
						'Statue of Liberty', 'Twelve plus one'
		];

		const output = [
						[ 'Built to stay free', 'Statue of Liberty'],
						[ 'Eleven plus Two', 'Twelve plus one' ],
						[ 'I learned words', 'Older and Wiser']
		];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Ошибка входных данных: передаем не массив', function (assert) {
		const input = 'кот';

		assert.deepEqual(anagram(input), undefined);
	});
});
