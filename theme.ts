import { createSystem, defaultConfig } from "@chakra-ui/react"

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'Figtree', sans-serif` },
        body: { value: `'Figtree', sans-serif` },
      },
      colors: {
        primary: { value: "#053B50" },
        secondary: { value: "#176B87" },
        tertiary: { value: "#64CCC5" },
        backgroundColor: {value: "#EEEEEE" },
        fontColor: { value: "#000000" }
      }
    },
  },
})