const products = [
    {
      id: 1,
      name: "Чай",
      description: "Гарячий напій, приготований з листя чайного куща",
      photos: [
        "https://miychay.com/upload/iblock/7c6/7c664063ba5e6215cb3567de3330c187.jpg"
      ]
    },
    {
      id: 2,
      name: "Кава",
      description: "Гарячий напій, приготований з зерен кави",
      photos: [
        "https://klopotenko.com/wp-content/uploads/2021/08/koryst-kavy_sitewebukr.jpg?v=1628627235"
      ]
    },
    {
      id: 3,
      name: "Сік",
      description: "Безалкогольний напій, приготований з фруктів або овочів",
      photos: [
        "https://i1.poltava.to/news/260/25987/photo.jpg"
      ]
    }
  ];

const button = document.querySelector("#button");
const input = document.querySelector('#input');

function main(){
    getProductDetails(input.value, LogProduct, console.log);
}

function getProductDetails(productId, succesCallback, errorCallback){
    var resProduct = null;

    for (const product of products) {
        if (product.id == productId) {
            resProduct = product;
            break;
        }
      }

    if(resProduct == null){
        errorCallback(`Could not find product with id ${productId}`);
        return;
    }

    succesCallback(resProduct);
}

function LogProduct(product){
    console.log(`id: ${product.id}\tname: ${product.name}\tdescription: ${product.description}`);
}

button.addEventListener('click', main);