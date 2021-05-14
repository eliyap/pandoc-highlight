exports.canContainEols = ['mark']
exports.enter = {highlight: enterHighlight}
exports.exit = {highlight: exitHighlight}

function enterHighlight(token) {
  this.enter({type: 'mark', children: []}, token)
}

function exitHighlight(token) {
  this.exit(token)
}
