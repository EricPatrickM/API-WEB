import { Request, Response } from "express";
import createProductService from "../services/createProductService";
import deleteProductService from "../services/deleteProductService";
import listProductService from "../services/listProductService";
import showProductservice from "../services/showProductService";
import updateProductService from "../services/updateProductService";

export default class productsController{
    public async index(request: Request, response:Response):Promise <Response>{
        const listProducts = new listProductService();
        const products = await listProducts.execute();
        return response.json(products) 
    }

    public async show(request: Request, response:Response):Promise <Response>{
        const {id}=request.params;
        const showProduct = new showProductservice();
        const products = await showProduct.execute({id});
        return response.json(products) 
    }

    public async create(request: Request, response:Response):Promise <Response>{
        const {name, price, quantity} = request.body;
        const createProduct = new createProductService();
        const products = await createProduct.execute({name, price, quantity});
        return response.json(products) 
    }

    public async update(request: Request, response:Response):Promise <Response>{
        const {id}=request.params;
        const {name, price, quantity} = request.body;
        const updateProduct = new updateProductService();
        const products = await updateProduct.execute({id, name, price, quantity});
        return response.json(products) 
    }

    public async delete(request: Request, response:Response):Promise <Response>{
        const {id}=request.params;
        const deleteProduct = new deleteProductService();
        await deleteProduct.execute({id});
        return response.json();
    }
}