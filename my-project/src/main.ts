import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    Site en construction
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
