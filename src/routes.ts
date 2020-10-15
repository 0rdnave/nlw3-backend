import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanahesController from './controllers/OrphanagesCrontroller';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanahesController.index);
routes.get('/orphanages/:id', OrphanahesController.show);
routes.post('/orphanages', upload.array('images'), OrphanahesController.create);

export default routes;