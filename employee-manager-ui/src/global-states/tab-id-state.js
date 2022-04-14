import { proxy } from 'valtio'

const TabIdState = proxy({
    tabId: 1
})

export { TabIdState }