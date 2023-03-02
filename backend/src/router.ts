import express = require('express');
export const router = express.Router();

import { demoController } from "./controllers/demo.controller";


const base = '/api/v1'


router.get(`${base}/demo`, (req, res) => demoController.get(req, res))