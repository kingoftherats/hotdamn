import storeDbModel from '../database/store';

const storeRepo = (connection) => {
    return {
        addStore = async (storeRepoModel) => {
            let dbModel = storeDbModel(connection);

            //Check if doc already exists
            let store = await dbModel.find({ storeNumber: storeRepoModel.storeNumber }).exec();

            if(store)
                throw new Error("The target store already exists.");

            //Save new store
            let store = dbModel(storeRepoModel);
            await store.save();
        },

        getStore = async (id) => {
            let dbModel = storeDbModel(connection);
            return await dbModel.find({ storeNumber: storeRepoModel.storeNumber }).exec();
        },

        getStoresNearZipCode = async () => {
            /*TODO: finding adjacent zip codes might be more of a general purpose utility that can be located outside of this
            it may also be wise to move something that's not pure CRUD into a "modules" library with extended functionality */
        },

        removeStore = async (storeNumber) => {
            let dbModel = storeDbModel(connection);

            let store = await dbModel.find({ storeNumber: storeRepoModel.storeNumber }).exec();

            if(store)
                await store.remove();
        },

        updateStore = async (storeRepoModel) => {
            let dbModel = storeDbModel(connection);

            //Check if doc exists
            let store = await dbModel.find({ storeNumber: storeRepoModel.storeNumber }).exec();

            if(!store)
                throw new Error("The target store does not exist.");

            //Save update store values
            let store = Object.assign(store, storeRepoModel);
            await store.save();
        }
    };
};

export default storeRepo;