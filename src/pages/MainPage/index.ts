import { lazy } from 'react'

const MainPageAsync = lazy(async () => await import('./ui/MainPage'))

export { MainPageAsync as MainPage }
