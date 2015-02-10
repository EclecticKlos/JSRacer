var nextChildNode = 0
var child = document.querySelector('#player1_strip');
console.log(child)
var moveOneAhead = function() {
  var i = 0;
  if (child.previousSibling === 0) {
    i++
  } else {
  while( (child = child.previousSibling) != null)
    i++
  }
  nextChild = i + 1
  var element = document.querySelector('#player1_strip');
  element.children[nextChild].className = "active"
  element.children[i].className = ""
}

moveOneAhead()
// element.children[0].className = "active"
// element.children[4].className = "active"

// element.className = ""
// var nextElement = document/getElementById('')
// element.className = ""


// var element = document.getElementById('player1_strip')

// undefined
// element

// element.className = "newClass"
// "newClass"
// element.className = ""
// ""
