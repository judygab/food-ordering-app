// require the necessary libraries
const { faker } = require('@faker-js/faker');
const MongoClient = require("mongodb").MongoClient;
const _ = require("lodash");


async function main() {
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // // Make the appropriate DB calls
        const productsCollection = client.db("food-ordering").collection("products");
        const categoriesCollection = client.db("food-ordering").collection("categories");
        // The drop() command destroys all data from a collection.
        // Make sure you run it against proper database and collection.
        productsCollection.drop();

        let categories = ['breakfast', 'lunch', 'dinner', 'drinks'].map((category) => { return { name: category } });
        await categoriesCollection.insertMany(categories);

        let imageUrls = [
            'https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/1_mfgcb5.png',
            'https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/2_afbbos.png',
            'https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/3_iawvqb.png',
        ]

        let products = [];
        for (let i = 0; i < 10; i += 1) {
            let newProduct = {
            name: faker.commerce.productName(),
            adjective: faker.commerce.productAdjective(),
            description: faker.commerce.productDescription(),
            price: faker.commerce.price(),
            category: _.sample(categories),
            imageUrl: _.sample(imageUrls)
            };
            products.push(newProduct);
        }
        await  productsCollection.insertMany(products);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main();
