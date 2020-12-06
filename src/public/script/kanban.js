/* eslint-disable no-undef */
function getTaskId(item) {
    return item._element.childNodes[1].children[0].children[0].id
}
function getColumnName(item) {
    return item.getGrid().getElement().parentNode.parentNode.children[0].innerText
}
let dragContainer = document.querySelector(".drag-container")
let itemContainers = [].slice.call(
    document.querySelectorAll(".board-column-content")
)
let columnGrids = []
let boardGrid
let startItem

let authorizedRole = ["Scrum Master", "Développeur"]
let role = document.querySelector(".dropdown-menu-right > .text-bold > strong").innerText
let authorizedDrag = authorizedRole.includes(role) 

// Init the column grids so we can drag those items around.
itemContainers.forEach(function (container) {
    let grid = new Muuri(container, {
        items: ".board-item",
    
        dragRelease:{
            duration: 300
        },
        dragEnabled: authorizedDrag,
        dragSort: function () {
            return columnGrids
        },
   
        dragAutoScroll: {
            targets: (item) => {
                return [
                    { element: window, priority: 0 },
                    { element: item.getGrid().getElement().parentNode, priority: 1 },
                ]
            },
        },
    })
  
        .on("dragInit", function (item) {
            item.getElement().style.width = item.getWidth() + "px"
            item.getElement().style.height = item.getHeight() + "px"
            startItem = getColumnName(item)
        })
        .on("dragReleaseEnd", function (item) {
            item.getElement().style.width = ""
            item.getElement().style.height = ""
            item.getGrid().refreshItems([item])
            let taskPos = getTaskId(item)
            let state = getColumnName(item)
            let redirection = window.location.pathname + "/" + taskPos + "/updateState/" + state
            if(startItem != state){
                window.location.replace(redirection)
            }
      
        })
        .on("layoutStart", function () {
            boardGrid.refreshItems().layout()
        })   
    columnGrids.push(grid)
})
// Init board grid so we can drag those columns around.
boardGrid = new Muuri(".board", {
    dragEnabled: true,
    dragHandle: ".board-column-header",
})




  
