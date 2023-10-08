export const getGifts = async( category)=>{
    const url = `http://api.giphy.com/v1/gifs/search?api_key=ukGGFOm5uTAiGpaxD6JW2wFIYC1HE9T6&q=${ category }&limit=20`;
    const res = await fetch(url);
    const { data } = await res.json();
    const gifs = data.map( res => ({
        id: res.id,
        title: res.title,
        url: res.images.downsized_medium.url 

    }) )
    return gifs;
}