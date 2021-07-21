
const apiKey = 'RSnS98lIRy8kdgDH5qUR3kjiSYEtHUk5';

const  httpRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

httpRequest
.then( res => res.json()
.then( ({ data }) => {

    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);

  })
)
.catch( console.warn )