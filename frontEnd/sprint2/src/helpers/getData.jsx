export const getData = async (url) => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    //console.log(data);
    return await data;
    
  } catch (error) {
    console.log(error);
  }
};
