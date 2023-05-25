const ProductModel = require('../../schema/ProductSchema');

const productResolvers = {
    Query:{
        getProductList: async(parent, args) =>{
            const products = await ProductModel.find();
            return products;
        },
        getProduct: async(parent, args) =>{
            const product = await ProductModel.findOne({_id:args.id});
            return product;
        }
    },
    Mutation : {
        updateProduct: async(parent,args) =>{
            const {category,productName,price,colors} = args;
            const product = await ProductModel.findOneAndUpdate({_id:args.id},{
                $set:{category,productName,price,colors}
            },{returnOriginal:false});
             
            return product;
        },
        addProduct:async(parent,args) =>{
            const {category,productName,price,colors} = args;
            const product = new ProductModel({
                category,productName,price,colors
            });
            const result = await product.save();
             
            return result;
        },

        deleteProduct :async (parent,args) =>{
            const deletedProduct = await ProductModel.findOneAndDelete({_id:args.id});
            return deletedProduct;
        }
    }
}

module.exports = productResolvers;

