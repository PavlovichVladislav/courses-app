import { lazy } from 'react'

const AboutPageAsync = lazy(async () => await import('./ui/AboutPage'))

export { AboutPageAsync as AboutPage }
