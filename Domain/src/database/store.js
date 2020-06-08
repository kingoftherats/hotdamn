import mongoose from 'mongoose';

/*
    An individual store schema

    TODO:...
*/
const storeSchema = new mongoose.Schema({
    storeNumber: { type: String, required: true, unique: true },
    zipCode: String,
    storeName: { type: String, required: true },
    countryCode: { type: String, required: true },
    stateCode: String,
    cityName: { type: String, required: true },
    streetName: String,
});

const storeDbModel = (connection) => {
    return connection.model("store", storeSchema);
}

export default storeDbModel;