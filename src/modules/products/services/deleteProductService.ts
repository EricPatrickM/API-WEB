import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/Product";
import ProductRepository from "../typeorm/repositories/ProductRepository";

interface IRequest{
    id:string;
}

export default class deleteProductService{
    public async execute({id}:IRequest):Promise<void>{
        const productRepository = getCustomRepository(ProductRepository);

        const product = await productRepository.findOne(id);
        if(!product){
            throw new AppError('Product not found.')
        }
        await productRepository.remove(product);
    }
}