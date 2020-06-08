
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import winston from 'winston';

import envUtil from './util/envUtil';
import loggingUtil from './util/loggingUtil';
import routing from "./appConfig/routing";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

//Load app env settings based on specified env
const targetEnv = process.argv[2];
var appConfig = await envUtil(targetEnv).getEnvAppSettings();

//Load logging config and app logger(s)
var loggingConfig = await loggingUtil().getLoggingSettings();

var transports = [];

if()
var logger = new winston.Logger({
    transports: [
        new winston.transports.File()
    ]
})

routing().registerRoutes(app, appConfig);

//TODO: logging framework inclusion
//TODO: swagger + UI
//TODO: server-side caching using redis (probably going to be most useful for 'hot' items)
//TODO: shared session store using redis for horizontal scaling (when user accounts and login are implemented)

app.listen(appConfig.hostingPort, () =>
    console.log(`App listening on port ${appConfig.hostingPort}`),
);