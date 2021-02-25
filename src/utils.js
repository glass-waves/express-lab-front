import request from 'superagent';
const URL = 'https://floating-bayou-37638.herokuapp.com';


export const getAllModules = async () =>  {
    const { body } = await request.get(`${URL}/modules`);
    return body;
}

export const getCategories = async () => {
    const { body } = await request.get(`${URL}/categories`);
    return body;
}

export const getModuleById = async (id) => {
    const { body } = await request.get(`${URL}/modules/single/${id}`);
    return body;
}

export const getModulesSortedBy = async (sortBy) => {
    const { body } = await request.get(`${URL}/sorted/${sortBy}`);
    return body;
}

export const getModulesInStock = async () => {
    const { body } = await request.get(`${URL}/instock`);
    return body;
}
export const insertNewModule = async (newModule) => {
    const { body } = await request.post(`${URL}/modules`).send(newModule);
    return body;
}
export const deleteModule = async (id) => {
    const { body } = await request.delete(`${URL}/single/${id}`);
    return body;
}

export const getModulesByCategory = async (category) => {
    const { body } = await request.get(`${URL}/category/${category}`);
    return body;
}
export const findCategoryById = async (id) => {
    const categories =  await getCategories();
    const correctCategory = categories.find(category => category.id === id)
    return correctCategory.category_name;
}
