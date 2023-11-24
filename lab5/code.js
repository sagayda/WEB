const api = `https://raw.githubusercontent.com/sagayda/WEB/main/lab5/data.json`;

const dishes = [];

fetch(api)
    .then(res => res.json())
    .then(data => {
        console.log('data >>>> ', data);

        dishes.push(data);
    });

function findOptions(word, data){

/*     return data.filter( s => {

        const regexp = new RegExp(word, 'gi');
        return s.name.match(regexp);
    });
 */
    // Создаем регулярное выражение, которое соответствует строке или ее подстроке
    const regex = new RegExp(word, "gi");

    // Создаем пустой массив для хранения результатов
    const results = [];

    // Перебираем элементы массива
    for (const item of data) {
        // Проверяем, соответствует ли элемент регулярному выражению
        if (regex.test(item.name)) {
        // Добавляем элемент в результаты
        results.push(item);
        }
    }

    // Возвращаем результаты
    return results;
}
