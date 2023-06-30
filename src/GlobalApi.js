// export const api = 'a91c2d82782745c6913e62796b27eb85';
export const api = 'f8843634da4b4fa1b9c7bfbd1a216f6e';
export const url = 'https://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=' + api;

export const extractYearFromDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    return year;}

export const openUrl = (url) => {
        window.open(url, "_blank");
      };
 
