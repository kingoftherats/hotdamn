import fs from 'fs';
import path from 'path';

const loggingUtil = () => {
    return {
        getLoggingSettings: async () => {
            let configRootPath = path.join(__dirname, '..', 'appConfig')
            let configStr = await fs.readFile(path.join(configRootPath, 'loggingConfig.json'));
            let config = JSON.parse(configStr);

            return config;
        }
    }
}

export default loggingUtil;