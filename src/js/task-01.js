const pointOfList = document.querySelectorAll("li.item");
console.log(`Number of categories: ${pointOfList.length}`)

pointOfList.forEach(point => {
    console.log(`Category: ${point.firstElementChild.textContent}`)
    console.log(`Elements: ${point.lastElementChild.children.length}`)
})
