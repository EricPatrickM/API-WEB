import { Router } from "express";
import productsController from "../controllers/ProductsController";

const productRouter = Router()
const productController = new productsController();

productRouter.get('/', productController.index)
productRouter.get('/:id',productController.show)
productRouter.post('/', productController.create)
productRouter.put('/:id', productController.update)
productRouter.delete('/:id', productController.delete)

export default productRouter