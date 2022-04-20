
// peticion de la fetch api
export const peticion =async(query)=>{

    const consultar = query;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=QvXCySBL3z0GXmbKj56sigMAELvunojE&q=${consultar}&limit=10`;
    //const Api_key ='QvXCySBL3z0GXmbKj56sigMAELvunojE';
    const response = await fetch(url);
    const {data} = await response.json();
        
    // defino los elementos que solo necesito del API
    const gifs = data.map(img =>{
        return{
            id: img.id,
            url: img.images.downsized.url,
            titulo: img.title
        }
    });

    return gifs;
}