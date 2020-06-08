import fs from 'fs';
import path from 'path';

const envUtil = (env) => {
    return {
        getEnvAppSettings: async () => {
            let configRootPath = path.join(__dirname, '..', '..', 'env')
            let defaultConfigStr = await fs.readFile(path.join(configRootPath, 'appsettings.json'));
            let defaultConfig = JSON.parse(defaultConfigStr);

            if(env) {
                //Merge env overrides into default config
                let envConfigStr = await fs.readFile(path.join(configRootPath, 'appsettings.' + env + '.json'));
                let envConfig = JSON.parse(envConfigStr);

                defaultConfig = Object.assign(defaultConfig, envConfig);
            }

            return defaultConfig;
        }
    }
}

export default envUtil;