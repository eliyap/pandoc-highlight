var phrasing = require('mdast-util-to-markdown/lib/util/container-phrasing')

exports.unsafe = [{character: '=', inConstruct: 'phrasing'}]
exports.handlers = {highlight: handleHighlight}

handleHighlight.peek = peektHighlight

function handleHighlight(node, _, context) {
  var exit = context.enter('emphasis')
  var value = phrasing(node, context, {before: '=', after: '='})
  exit()
  return '==' + value + '=='
}

function peektHighlight() {
  return '='
}
