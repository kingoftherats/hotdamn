import mongoose from 'mongoose';

import storeRepo from '../../../Domain/repository/storeRepo';

import errorObject from '../models/shared/error';

const storeController = (expressApp, appConfig) => {

    expressApp.get('/store/:storeNumber', (req, res) => {
        let dbConnection = null;
        try {
            dbConnection = await mongoose.createConnection(appConfig.connections.main.connectionString);
            const storeRepoObj = storeRepo(dbConnection);
            let storeModel = await storeRepoObj.getStore(req.params.storeNumber);
            res.json(storeModel);
        }
        catch(err)
        {
            //TODO: log to file
            res.status(500);
            res.json(errorObject(''));
        }
        finally {
            if(dbConnection)
                dbConnection.close();
        }
    });
}

export default storeController;