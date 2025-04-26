import { parseJsonConfigFileContent, sys, transpileModule } from 'typescript'
import appConfig from './tsconfig.tsx.json' with { type: 'json' }

const parsedConfig = parseJsonConfigFileContent(appConfig, sys, 'tsx')

export function transpile(srcCode: string) {
  const transpiledCode = transpileModule(srcCode, {
    compilerOptions: parsedConfig.options,
  })

  return transpiledCode.outputText
}
