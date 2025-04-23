window.addEventListener("load", solve);

function solve() {
  let firstName = document.querySelector("input#first-name")
  let lastName = document.querySelector("input#last-name")
  let age = document.querySelector("input#age")
  let storyTitle = document.querySelector("input#story-title")
  let genre = document.querySelector("select#genre")

  let yourStory = document.querySelector("textarea#story")

  let publishBtn = document.querySelector("input#form-btn")
  let previewSection = document.querySelector("ul#preview-list")

  publishBtn.addEventListener("click", publish)


  function publish(ev) {
    if (!firstName.value || !lastName.value || !age.value || !storyTitle.value || !genre.value || !yourStory.value) {
      return
    }

    let li = document.createElement("li")
    li.classList = "story-info"

    li.innerHTML = `<article>
      <h4>Name: ${firstName.value} ${lastName.value}</h4>
      <p>Age: ${age.value}</p>
      <p>Title: ${storyTitle.value}</p>
      <p>Genre: ${genre.value}</p>
      <p>${yourStory.value}</p>
    </article>
    <button class="save-btn">Save Story</button>
    <button class="edit-btn">Edit Story</button>
    <button class="delete-btn">Delete Story</button>`

    previewSection.appendChild(li)

    firstName.value = ""
    lastName.value = ""
    age.value = ""
    storyTitle.value = ""
    genre.value = ""
    yourStory.value = ""

    // let saveBtn = document.querySelectorAll("button.save-btn")

  

    let saveBtn = document.querySelector("button.save-btn")
    saveBtn.addEventListener("click", save)


    // let editBtn = document.querySelectorAll("button.edit-btn")
    let editBtn = document.querySelector("button.edit-btn")
    editBtn.addEventListener("click", edit)

    // let deleteBtn = document.querySelectorAll("button.delete-btn")
    let deleteBtn = document.querySelector("button.delete-btn")
    deleteBtn.addEventListener("click", deleteStory)


    
    saveBtn.disabled = false
    editBtn.disabled = false
    deleteBtn.disabled = false
    publishBtn.disabled = true


    // publishBtn.removeEventListener("click", publish)
  }



  function save(ev) {
    let main = document.querySelector("div#main")


    for (const x of Array.from(main.children)) {
      x.remove()
    }

    let h1 = document.createElement("h1")
    h1.textContent = "YOUR SCARY STORY IS SAVED!"
    main.appendChild(h1)



  }
  function edit(ev) {
    let first = ev.target.parentElement.children[0].children[0].textContent.replace("Name: ", "").split(" ")[0]
    let second = ev.target.parentElement.children[0].children[0].textContent.replace("Name: ", "").split(" ")[1]
    let years = ev.target.parentElement.children[0].children[1].textContent.replace("Age: ", "")
    let title = ev.target.parentElement.children[0].children[2].textContent.replace("Title: ", "")
    let genreT = ev.target.parentElement.children[0].children[3].textContent.replace("Genre: ", "")
    let textA = ev.target.parentElement.children[0].children[4].textContent


    firstName.value = first
    lastName.value = second
    age.value = years
    storyTitle.value = title
    genre.value = genreT
    yourStory.value = textA
    ev.target.parentElement.remove()
    publishBtn.disabled = false
  }

  function deleteStory(ev) {
    ev.target.parentElement.remove()
    publishBtn.disabled = false
  }

}