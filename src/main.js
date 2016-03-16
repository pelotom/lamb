export default ({raw: [raw]}) => eval('(function (...args) { return (' +
  raw.replace(/#(\d+)/g, (_, n) => '(args[' + n + '])') +
'); })')
