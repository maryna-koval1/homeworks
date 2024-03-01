var book = {
    price: 150,
    author: 'Taras Shevchenko',
    nmbOfPages: 234,
    getInfo() {
        let info = "";
        for (let key in this) {
          if (typeof this[key] !== "function") {
            info += `${key}: ${this[key]}\n`;
          }
        }
        return info;
      }
};
console.log(book.getInfo());
book.year = 2018;
console.log(book.getInfo());

console.log('-------- Завдання 2 --------------');

var services = {
    haircut: 60,
    shaving: 80,
    washingHead: 1000,
    price(...keys) {
      let finalPrice = 0;
      for (let key of keys) {
        if (key in this) {
          finalPrice += this[key];
        }
      }
      return finalPrice;
    },
    minPrice(){
        let minValue = Infinity;
        for (let key in this){
            if (key in this){
                if (services[key] < minValue) {
                    minValue = services[key];
                  }
            }
        }
        return minValue; 
    },
    maxPrice(){
        let maxValue = 0;
        for (let key in this){
            if (key in this){
                if (services[key] > maxValue) {
                    maxValue = services[key];
                  }
            }
        }
        return maxValue; 
  }
};
  services.brokenGlass = 200;
  
  console.log('Вартість послуг: ' + services.price('haircut', 'shaving'));
  console.log('Мінімальна ціна на послугу: ' + services.minPrice());
  console.log('Максімальна ціна на послугу: ' + services.maxPrice());

