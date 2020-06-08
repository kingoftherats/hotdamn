import storeController from '../controllers/storeController'

const routing = () => {
    return {
        registerRoutes: (expressApp, appConfig) => {
            //Add application controllers
            storeController(expressApp, appConfig);

            //Catch-all route
            expressApp.get('*', function(req, res) {
                res.send('Sorry, this is an invalid URL.');
            });
        }
    }
}

export default routing;