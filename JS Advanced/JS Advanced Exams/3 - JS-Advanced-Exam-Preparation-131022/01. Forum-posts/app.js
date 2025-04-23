window.addEventListener("load", solve);

function solve() {

    let titleField = document.querySelector("input#post-title")
    let postField = document.querySelector("input#post-category")
    let contentField = document.querySelector("textarea#post-content")

    let publishBtn = document.querySelector("button#publish-btn")


    let uploadPosts = document.querySelector("ul#published-list")
    let reviewList = document.querySelector("ul#review-list")

    let clearBtn = document.querySelector("button#clear-btn")
    clearBtn.addEventListener("click", clear)

    publishBtn.addEventListener("click", publish)

    function publish(ev) {
        if (!titleField.value || !postField.value || !contentField.value) {
            return
        }

        let li = document.createElement("li")
        li.className = "rpost"



        li.innerHTML = `<article>
                <h4>${titleField.value}</h4>

                <p>Category: ${postField.value}</p>

                <p>Content: ${contentField.value}</p>
            </article>
            <button class="action-btn edit">Edit</button>
            <button class="action-btn approve">Approve</button>`

        titleField.value = ""
        postField.value = ""
        contentField.value = ""

         reviewList.appendChild(li)


        let approveBtn = document.querySelectorAll("button.action-btn.approve")
        let editBtn = document.querySelectorAll("button.action-btn.edit")


      for (const x of approveBtn) {
        x.addEventListener("click", approve)
      }
      for (const v of editBtn) {
        v.addEventListener("click", edit)
      }


  
    }

    function approve(ev) {
        let li = document.createElement("li")
        li.className = "rpost"
        li.appendChild(ev.target.parentElement.children[0])
        uploadPosts.appendChild(li)
        // uploadPosts.appendChild(ev.target.parentElement.children[0])
        // console.log(ev.target.parentElement.children[0]);
        ev.target.parentElement.remove()

    }

    function edit(ev) {
        let title = ev.target.parentElement.children[0].children[0].textContent
        let post = ev.target.parentElement.children[0].children[1].textContent.replace("Category: ", "")
        let content = ev.target.parentElement.children[0].children[2].textContent.replace("Content: ", "")

        titleField.value = title
        postField.value = post
        contentField.value = content

        ev.target.parentElement.remove()


    }
    function clear(ev) {



        for (const x of document.querySelectorAll("ul#published-list>li")) {
            x.remove()
        }
    }

}


