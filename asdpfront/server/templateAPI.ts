// templateAPI.ts

// endpoint это константа в данном случае, она будет динамичной пока можешь просто ее прописывать одинаково,
// а я потом ей значнение дам
const ENDPOINT = ""

const URLS = {
    baseurl : (ENDPOINT + 'тут уже пишешь конечный результат'),
}

export const getChtotoTam = (id) => {
    const url = `${URLS.baseurl}`;
    return axios.get(`${URLS.baseurl}/${id}`);
}