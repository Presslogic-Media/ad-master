export const randomId = (leng = 6) => {
    const chart = 'abcdefghijklmnopqrstuvwxyz0123456789'
    const list = new Array(leng).fill(null)
    const id = list.reduce((id) => {
        const i = Math.floor(Math.random() * chart.length)
        // eslint-disable-next-line no-return-assign
        return id += chart[i]
    }, '')
    return id
}
