export const baseCategories = 'https://api.thecatapi.com/v1/categories';
export const baseBreeds = "https://api.thecatapi.com/v1/breeds";
export const baseImagesSearch = "https://api.thecatapi.com/v1/images/search?";
export const baseAnimated = ''
export const addressMaker = (amountOfImages, categoryId, animated) => {
    if(animated == true){
return `https://api.thecatapi.com/v1/images/search?limit=${amountOfImages}&category_ids=${categoryId}&mime_types=gif`;
    } else return `https://api.thecatapi.com/v1/images/search?limit=${amountOfImages}&category_ids=${categoryId}&mime_types=jpg,png`;
    
}
