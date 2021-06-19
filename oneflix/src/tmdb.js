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
                items:  await basicFetch(`/discover/tv?with_network=213&languege=pt-BR&api_key=${API_KEY}`) // filtrar para filmes so da netfilx;
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&laguage=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&laguage=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?with_genres=27&laguage=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romanee',
                items: await basicFetch(`/discover/movie?with_genres=10749&laguage=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentarios',
                items: await basicFetch(`/discover/movie?with_genres=99&laguage=pt-BR&api_key=${API_KEY}`)
            },
        ];
    }
}