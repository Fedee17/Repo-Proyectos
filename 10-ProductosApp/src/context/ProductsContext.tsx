import React, { createContext, useEffect, useState } from "react";
import cafeApi from "../api/cafeApi";
import { Producto, ProductsResponse } from '../interfaces/appInterfaces';
import { ProductsStackParams } from "../navigator/ProductsNavigator";

type ProductsContextProps = {
    products: Producto[];
    loadProducts: () => Promise<void>;
    addProducts: ( categoryId: string, productName: string ) => Promise<void>;
    updateProducts: ( categoryId: string, productName: string, productId: string ) => Promise<void>;
    deleteProducts: ( id: string ) => Promise<void>;
    loadProductById: ( id: string ) => Promise<void>;
    uploadImage: ( data: any, id: string ) => Promise<void>;

}


 export const ProductsContext = createContext( {} as ProductsContextProps );


 export const ProductsProvider = ({ children }: any) => {

    const [products, setProducts] = useState<Producto[]>([]);

    useEffect(() => {
        loadProducts();
    }, [])

    const loadProducts = async() => {
        const resp = await cafeApi.get<ProductsResponse>('productos?limite=50');
        // setProducts([ ...products, ...resp.data.productos ]) 
        setProducts([ ...resp.data.productos ])  
    }

    const addProducts = async( categoryId: string, productName: string ) => {

    }

    const updateProducts = async( categoryId: string, productName: string, productId: string ) => {

    }

    const deleteProducts = async( id: string ) => {

    }

    const loadProductById = async( id: string ):Promise<Producto> => {
        const resp = await cafeApi.get<Producto>(`productos/${ id }`);
        return resp.data;
    }

    const uploadImage = async( data: any, id: string ) => {

    }

    return (
        <ProductsContext.Provider value={{
            products,
            loadProducts,
            addProducts,
            updateProducts,
            deleteProducts,
            loadProductById,
            uploadImage
        }}>
            { children }
        </ProductsContext.Provider>
    )
 }