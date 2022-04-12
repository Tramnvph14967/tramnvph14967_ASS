import instance from './instance';

type User = {
    _id?: Number,
    surname: string,
    name: string,
    email: string,
    password: string | number,
    address: string
}
export const signup = (user: User) => {
    const url = `/signup`;
    return instance.post(url, user);
}
export const signin = (user: User) => {
    const url = `/signin`;
    return instance.post(url, user);
}
export const listuser = () => {
    const url = `/users`;
    return instance.get(url);
}
export const removeuser = (id: number) => {
    const url = `/users/${id}`;
    return instance.delete(url);
}
export const updateuser = (user: User) => {
    const url = `/users/${user._id}`;
    return instance.put(url, user);
}