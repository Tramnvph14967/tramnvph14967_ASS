import { ProductType } from "../pages/types/product";
import { isAuthenticate } from "../utils/localstorage";
import instance from "./instance";

const { token, user} = isAuthenticate();

export const list = () => {
    const url = `/products`;
    return instance.get(url);
}
export const remove = (id: number) => {
    const url = `/product/${id}`;
    return instance.delete(url);
}
export const add = (product: ProductType) => {
    // const url = `/products/${user._id}`;
    const url = `/products`;
    // return instance.post(url,product);
    return instance.post(url, product, {
        // headers: {
        //     "Authorization": `Bearer ${token}`
        // }
    });
}
export const read = (id: number) => {
    const url = `/product/${id}`;
    return instance.get(url);
}
export const update = (product: ProductType) => {
    const url = `/product/${product._id}`;
    return instance.put(url, product);
}
export const searchNamePro = (keyword : any) =>{
    const url=`/products?name=${keyword}`;
    return instance.get(url)
};