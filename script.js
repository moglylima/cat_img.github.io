const BASE_URL = "https://api.thecatapi.com/v1/images/search"

const catchBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');

const getCats = async () => {

    try{
        const data = await fetch(BASE_URL);
    const json = await data.json();
    let url = json[0].url;
    return url;
    } catch (e){
        console.log(e.message);
    }    
};

const loadImg = async () => {
    catImg.src = await getCats();
}

catchBtn.addEventListener('click', loadImg);

loadImg();