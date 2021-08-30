import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase("bicshape.db")

export default db