import { readFileSync, writeFileSync } from 'fs'

export default function saveBoard(path, board) {
const boardJson = JSON.stringify(board, null, 2)
try {
    writeFileSync(path, boardJson)
} catch (error) {
    return false
}
return true
}
