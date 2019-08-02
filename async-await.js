const fetch = require("node-fetch");

async function fetchAvatarUrl(userId) {
  const res = await fetch(`https://catappapi.herokuapp.com/users/${userId}`);
  const data = await res.json();
  res;
  data;
  return data.imageUrl;

  // return fetch(`https://catappapi.herokuapp.com/users/${userId}`).then(res =>
  //   res.json()
  // ).then(data=>data.imageUrl)
}

const result = fetchAvatarUrl(123);
result;

// .............

async function fetchCatAvatars(userId) {
  const res = await fetch(`https://catappapi.herokuapp.com/users/${userId}`);
  const user = await res.json();

  return await Promise.all(
    user.cats.map(async function(catId) {
      const res = await fetch(`https://catappapi.herokuapp.com/cats/${catId}`);
      const catData = await res.json();
      return catData.imageUrl;
    })
  );

  // const catImageUrls = []
  // for (const catId of user.cats) {
  //   const res = await fetch(
  //     `https://catappapi.herokuapp.com/cats/${catId}`
  //   );
  //   const catData = await res.json();
  //   catImageUrls.push(catData.imageUrl);
  // }

  // return catImageUrls

  // ............

  /* return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
    .then(res => res.json())
    .then(user => {
      const promises =  user.cats.map(catId => 
          fetch(`https://catappapi.herokuapp.com/cats/${catId}`)
          .then(res => res.json())
          .then(catData => catData.imageUrl)
          );
          return Promise.all(promises)
        }); */
}

const result2 = fetchCatAvatars(123);
result2;
