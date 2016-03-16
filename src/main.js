const λ = ({raw}, ...subs) => {
  const expr = raw
    .reduce((prev, next, n) => prev + '(___subs[' + (n - 1) + '])' + next)
    .replace(/#(\d+)/g, (_, n) => '(___args[' + n + '])')

  const evaluate = new Function('___subs', '___args', 'return (' + expr + ');')

  return (...args) => {
    return evaluate(subs, args)
  }
}

export default λ
