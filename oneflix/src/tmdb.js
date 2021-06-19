const API_KEY = 'b0c28b5e0714d5b296e6bbebf5199710';
const API_BASE = 'https://api.themoviedb.org/3';

/*
- origianis da netflix
-receomendados (trending)
- em alta (top rated)
- ação
- comedia
- terror
- romance
- documentarios
*/
 
const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}
export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: []
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: []
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: []
            },
            {
                slug: 'action',
                title: 'Ação',
                items: []
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: []
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: []
            },
            {
                slug: 'romance',
                title: 'Romanee',
                items: []
            },
            {
                slug: 'documentary',
                title: 'Documentarios',
                items: []
            },
        ];
    }
}