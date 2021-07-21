// const getImgPromis = () => new Promise((res) => res('https://google.com'))

// getImgPromis().then(console.log)

// Mismo resultado , dos formas de hacer una llamada a una API

// Controlamos el error con un try-catch

const getImg = async () => {

    try {
        
        const apiKey = 'RSnS98lIRy8kdgDH5qUR3kjiSYEtHUk5';
        
        const  response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
    
        const { data } = await response.json();
        
        const { url } = data.images.original;
    
        const img = document.createElement('img');
    
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.error(error)
    }

}

getImg()



