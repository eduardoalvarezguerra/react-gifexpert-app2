    export const getGifs = async (category) => {


        // de momento ponemos la url completa y hardcodeada
        //const url = 'https://api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=10&api_key=0OP57vsrM6fx8yAaCBjwuh8lTQ62TrNS';
        // la url definitiva, sin hardcodear:
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=0OP57vsrM6fx8yAaCBjwuh8lTQ62TrNS`;
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return ({
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            })
        })

        return(gifs);
    }