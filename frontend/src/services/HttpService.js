import axios from 'axios';

const createHttpService = () => {
    const methods = ['get', 'put', 'delete', 'post'];
    const HttpService = {};

    methods.forEach((method) => {
        HttpService[method] = (...args) => axios[methods](...args);
    })
};

const HttpService = createHttpService();


export {
    HttpService
}
