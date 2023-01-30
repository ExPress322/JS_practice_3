const button = document.querySelector(".btn");
const image = document.querySelector(".img");
const url = "http://aws.random.cat/meow";

async function fetchHandler() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    ext = data.file.split('.').pop();
    if (document.getElementById('gif_only').checked) {
        if (ext === 'jpg' || ext === 'png' || ext === 'jpeg') {
            fetchHandler();
            return
            } 
    }

    // console.log(data.file) // DEBUG
    // console.log(ext) // DEBUG

    image.src = data.file;
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", () => {
  let isLoaded = image.complete;
  if (isLoaded) {
    fetchHandler();
  }
});
// копирование ссылок с вставкой с запросом
// const params = new Proxy(new URLSearchParams(window.location.search), {
//     get: (searchParams, prop) => searchParams.get(prop),
//   });
// let value = params.img;


// if (value) {
//     console.log(value)
//     image.src = value;
// }
