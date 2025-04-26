import type { LoadHook } from 'node:module'
import { transpile } from './tsx-compiler.ts'

export const load: LoadHook = async (url, context, nextLoad) => {
  if (!/\.[j|t]sx$/.test(url)) {
    return nextLoad(url, context)
  }

  const loaded = await nextLoad(url, { ...context, format: 'tsx' })
  const source = transpile(loaded.source!.toString())

  return {
    format: 'module',
    source,
    shortCircuit: true,
  }
}
