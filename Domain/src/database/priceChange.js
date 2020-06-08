import mongoose from 'mongoose';

/*
    An individual price change schema

    TODO:...
*/
const priceChangeSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    storeNumber: String,
    previousPriceUsd: Number,
    newPriceUsd: { type: Number, required: true },
    countryCode: { type: String, required: true },
    stateCode: String,
    cityName: { type: String, required: true },
    streetName: String,
    changeDate: { type: Date, required: true }
});

const priceChangeDbModel = mongoose.model("priceChange", priceChangeSchema);

export default priceChangeDbModel;