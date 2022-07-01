const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategorySchema = new Schema(
    {
        name: { type: String, required: true },
    },
)


const ProductSchema = new Schema(
    {
        name: { type: String, required: true },
        adjective: { type: String, required: false },
        description: { type: String, required: false },
        price: { type: Number, required: true },
        category: CategorySchema,
    },
)

module.exports = mongoose.model('Product', ProductSchema)