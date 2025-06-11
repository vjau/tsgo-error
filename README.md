Reproduction for bug affecting at least @typescript/native-preview@7.0.0-dev.20250610.1

```
pnpm install

npm run build //build with tsc
//No error

npm run buildgo //build with tsgo
//multiple errors TS2742: The inferred type of 'router' cannot be named without a reference to
```
