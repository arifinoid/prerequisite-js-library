import loadImg from "./loadImg";

let addImg = src => {
  let imgElement = document.createElement("img");
  imgElement.src = src;
  document.body.appendChild(imgElement);
};

Promise.all([
  loadImg("images/cat1.jpg"),
  loadImg("images/cat2.jpg"),
  loadImg("images/cat3.jpg")
])
  .then(images => {
    images.forEach(img => addImg(img.src));
  })
  .catch(err => console.log(err));
