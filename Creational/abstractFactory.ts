/*
    Abstract Factory Pattern


    Example:
 */

abstract class Shoes {}

class NikeShoes extends Shoes {}

class AdidasShoes extends Shoes {}

abstract class TShirt {}

class NikeTShirt extends TShirt {}

class AdidasTShirt extends TShirt {}

abstract class ProductFactory {
    abstract createShoes() : Shoes;
    abstract createTShirt() : TShirt;
}

class NikeFactory extends ProductFactory {
    createShoes(): Shoes {
        // Here you can put all Nike logic
        return new NikeShoes();
    }

    createTShirt(): TShirt {
        // Here you can put all Nike logic
        return new NikeTShirt();
    }
}

class AdidasFactory extends ProductFactory {
    createShoes(): Shoes {
        // Here you can put all Adidas logic
        return new AdidasShoes();
    }

    createTShirt(): TShirt {
        // Here you can put all Adidas logic
        return new AdidasTShirt();
    }
}

function getFactory(brand: 'Nike' | 'Adidas'): ProductFactory {
    if (brand === 'Nike') {
        return new NikeFactory();
    } else {
        return new AdidasFactory();
    }
}

const brand: 'Nike' | 'Adidas' = 'Nike'; // This could come from user input or config
const productFactory: ProductFactory = getFactory(brand);

//Client Code
const shoes = productFactory.createShoes();
const tShirt = productFactory.createTShirt();
// ✅ Now you have your objects without know anything about their concrete implementation
