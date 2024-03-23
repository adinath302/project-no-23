const numberset = "123456789";
const upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerset = "abcdefghijklmnopqrstuvwxyz";
const symbolsset = "~!@#$%^&*()_+/"

const getrandomdata = (dataset) =>{
    return dataset[Math.floor(Math.random()*dataset.length)] 
}
