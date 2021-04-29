const cors = require('cors');

import express from 'express';
import * as bodyParser from 'body-parser';
import { Router } from './Router';

const app = express();

async function initRouter(app: express.Application,context:any)
{
  const router  = new Router(context);

  app.use(cors());
  app.use(bodyParser.urlencoded({ extended:false }));
  app.use(bodyParser.json());
  app.use(router.getExpressRouter());
}

export default async function init()
{
  try
  {
    await initRouter(app,{});
    return app;
  }
  catch(e)
  {
    console.error('Error in initAppStartup:',e);
    throw new Error(e);
  }
}
