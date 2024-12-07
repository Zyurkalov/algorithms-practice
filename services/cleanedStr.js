const cleanedStr = (str) => str.replace(/[^а-яёa-zA-Z]/g, '').toLowerCase(); 

export default cleanedStr