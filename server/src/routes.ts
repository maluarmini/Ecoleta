import express from 'express';
import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";
import multer from 'multer';
import multerConfig from './config/multer';

const routes = express.Router();
const upload = multer(multerConfig);


// Instanciando as classes controllers
const pointsController = new PointsController();
const itemsController = new ItemsController();




routes.get('/items', itemsController.index);

routes.get('/points', pointsController.index);

routes.get('/points/:id', pointsController.show);



routes.post('/points',upload.single('image'), pointsController.create);


export default routes;