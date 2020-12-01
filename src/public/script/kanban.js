function getTaskId(item) {
  return item._element.childNodes[1].children[0].children[0].children[0].id
}
function getColumnName(item) {
  return item.getGrid().getElement().parentNode.parentNode.children[0].innerText
}
var dragContainer = document.querySelector(".drag-container");
var itemContainers = [].slice.call(
  document.querySelectorAll(".board-column-content")
);
var columnGrids = []
var boardGrid
let startItem
let savedItem = new Map()

// Init the column grids so we can drag those items around.
itemContainers.forEach(function (container) {
  var grid = new Muuri(container, {
    items: ".board-item",
    
    dragRelease:{
      duration: 300
    },
    dragEnabled: true,
    dragSort: function () {
      return columnGrids;
    },
   
    dragAutoScroll: {
      targets: (item) => {
        return [
          { element: window, priority: 0 },
          { element: item.getGrid().getElement().parentNode, priority: 1 },
        ];
      },
    },
  })
  
    .on("dragInit", function (item) {
      item.getElement().style.width = item.getWidth() + "px";
      item.getElement().style.height = item.getHeight() + "px";
    })
    .on("dragReleaseEnd", function (item) {
      item.getElement().style.width = "";
      item.getElement().style.height = "";
      item.getGrid().refreshItems([item]);
      let taskPos = getTaskId(item)
      let state = getColumnName(item)
      let redirection = window.location.pathname + "/" + taskPos + "/updateState/" + state
      //window.location.replace(redirection)
    })
    .on("layoutStart", function () {
      boardGrid.refreshItems().layout();
    })   
    columnGrids.push(grid);
});
// Init board grid so we can drag those columns around.
boardGrid = new Muuri(".board", {
  dragEnabled: true,
  dragHandle: ".board-column-header",
});




  
