/*
    🛠️ Creational Design Pattern.
    Provides a way to creat objects while HIDING the creation logic.
    You call a method, and it returns an object tailored to your request.

    Example: Ecommerce like Amazon needs to handle different types of products
 */

enum ProductType {
    Shoes = 'Shoes',
    Jeans = 'Jeans',
    Socks = 'Socks',
}

class Product{
    id: number;
    name: string;
    price: number;
}
class Shoes extends Product {}
class Jeans extends Product {}
class Socks extends Product {}

class ProductFactory {
    public createProduct(type: ProductType) {
        if(type === ProductType.Shoes){
            console.log("👟 You have created a pairs of shoes!")
            return new Shoes();
        }

        if (type === ProductType.Jeans){
            console.log("👖 You have created a pairs of jeans!")
            return new Jeans();
        }

        if (type === ProductType.Socks){
            console.log("🧦 You have created a pairs of socks!")
            return new Socks();
        }

        throw new Error("Unknown type");
    }
}

// 👉🏼 How to use it
const productFactory = new ProductFactory();
const shoes = productFactory.createProduct(ProductType.Shoes);
// 🎯 Now you have your shoes without know anything about their creation



