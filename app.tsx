import { renderToString } from 'react-dom/server'

const html = renderToString(<div>Hello world</div>)
console.log(html)
