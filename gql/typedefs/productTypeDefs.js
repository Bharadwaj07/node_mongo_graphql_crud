const {gql} = require('apollo-server');

const productTypeDefs =  gql `
    type Product {
        _id: ID
        category: String,
        productName: String,
        price: Int,
        colors: [String]
    }

    type Query {
         getProductList: [Product],
         getProduct(id: ID): Product
    }

    type Mutation {
        updateProduct(id:ID, category:String,productName:String,price:Int,colors:[String]): Product,
        addProduct(category:String,productName:String,price:Int,colors:[String]): Product,
        deleteProduct(id:ID): Product
    }
`

module.exports = productTypeDefs;