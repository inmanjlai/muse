// const fetch = require("fetch");


// this needs to go in the readme
window.addEventListener("DOMContentLoaded", (e) => {
    const img = document.querySelectorAll(".tag-image");
    const tagIds = document.querySelectorAll(".tag-id")
    img.forEach((deleteButton, index) => {
        deleteButton.addEventListener("click", async(e) => {
            let tagId = tagIds[index]
            console.log(tagId.value)
            
            // Then we want to remove it from the DOM
            console.log("we got here")
            let tagDiv = tagId.parentElement;
            tagDiv.remove();
            
            // Sending a fetch request to the endpoint of /tags/:id/delete
                // this will remove it from the database
            await fetch(`/tags/${tagId.value}/delete`, { method: "POST" });

        })
    })
})