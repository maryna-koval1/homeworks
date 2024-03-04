var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,14,15];
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }
console.log(shuffleArray(arr));

console.log('----------Завдання 2-----------');

const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey(companyName, company) {
    if (company.name === companyName) {
        return company;
    }
    for (const client of company.clients) {
        if (client.name === companyName) {
            return client;
        }
            if (client.partners && client.partners.length > 0) {
            const subCompany = findValueByKey(companyName, { clients: client.partners });
            if (subCompany) {
                return subCompany;
            }
        }
    }
    return 'null';
}

const result = findValueByKey('Велика Компанія', company);
console.log(result);