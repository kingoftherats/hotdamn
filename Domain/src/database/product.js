import mongoose from 'mongoose';

import priceChange from './priceChange';

/*
    An individual product schema

    itemId - the globally unique product id
    TODO:...
*/
const productSchema = new mongoose.Schema({
    itemId: { type: String, required: true, unique: true },
    itemType: String,
    availabilityType: String,
    partNumber: String,
    webUrl: String,
    canonicalUrl: String,
    itemAvailability: {
        availableOnlineStore: Boolean,
        availableInStore: Boolean,
        discontinuedItem: Boolean
    },
    priceChangeList: [{

    }]
});

const productDbModel = mongoose.model("product", productSchema);

export default productDbModel;