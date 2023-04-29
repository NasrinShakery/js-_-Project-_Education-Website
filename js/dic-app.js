const txtBox = document.querySelector(".txtBox");
const description = document.querySelector(".description");
const meaning = document.querySelector('#meaning');
const volume = document.querySelector("#volume");
const phonetic = document.querySelector("#phonetic");
const clearInputElem = document.querySelector('.fa-times')
let audio;

function search(word){
  fetchApi(word);
  searchInput.value = word;
}

function fetchApi(word){
  description.innerHTML = `<span style="color:green;"> " ${word} " </span> در حال جستجو برای`;
  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  fetch(url)
    .then(response => response.json())
    .then(result => data(result, word))
    // .then(data => console.log(data[0].phonetic))
    .catch(() =>{
      description.innerHTML = `Can't find the meaning of <span style="color:red;">"${word}"</span>. Please, try to search for another word.`;
  });
}

txtBox.addEventListener("keyup", e =>{
  let word = e.target.value.replace(/\s+/g, ' ');
  if(e.key == "Enter" && word){
      fetchApi(word);
  }else if(e.target.value === ""){
    description.innerHTML = ""
  }
});

function data(result, word){
  clearDicBox();
  if(result.title){
    description.innerHTML = `معنی  لغت  <span style="color:red;">"${word}"</span>  پیدا نشد.لطفا لغت دیگری را امتحان کنید`;
  }else{
      meaning.innerHTML = result[0].meanings[0].definitions[0].definition;
      if(result[0].phonetic){
        phonetic.innerHTML = result[0].phonetic;
      }
      audio = new Audio(result[0].phonetics[0].audio);
      volume.style.display = "inline"
  }
}

volume.addEventListener("click", ()=>{
  volume.style.color = "#c77dff";
  audio.play();
  setTimeout(() =>{
      volume.style.color = "#9d4edd";
  }, 800);
});

function clearDicBox(){
  description.innerHTML = ''
  meaning.innerHTML = ''
  phonetic.innerHTML = ''
  volume.style.display='none'
}

clearInputElem.addEventListener('click', ()=>{
  txtBox.value = ''
  clearDicBox();
});