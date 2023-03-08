import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('foodie.db')

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS addresses (id INTEGER PRIMARY KEY NOT NULL, userId TEXT NOT NULL, name TEXT NOT NULL, address TEXT NOT NULL, phone TEXT NOT NULL, tag TEXT NOT NULL);`
      )
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS cards (id INTEGER PRIMARY KEY NOT NULL, userId TEXT NOT NULL, cardNumber TEXT NOT NULL, cardHolder TEXT NOT NULL, expirationDate TEXT NOT NULL, cvv TEXT NOT NULL);`
      ),
        [],
        () => {
          resolve()
        },
        (_, err) => {
          reject(err)
        }
    })
  })

  return promise
}

export const insertAddress = (userId, address) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO addresses (userId, name, address, phone, tag) VALUES (?, ?, ?, ?, ?);`,
        [userId, address.name, address.address, address.phone, address.tag],
        (_, result) => {
          resolve(result)
        },
        (_, err) => {
          reject(err)
        }
      )
    })
  })

  return promise
}

export const updateAddress = (id, address) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `UPDATE addresses SET name = ?, address = ?, phone = ?, tag = ? WHERE id = ?;`,
        [address.name, address.address, address.phone, address.tag, id],
        (_, result) => {
          resolve(result)
        },
        (_, err) => {
          reject(err)
        }
      )
    })
  })

  return promise
}

export const deleteAddress = id => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `DELETE FROM addresses WHERE id = ?;`,
        [id],
        (_, result) => {
          resolve(result)
        },
        (_, err) => {
          reject(err)
        }
      )
    })
  })

  return promise
}

export const getUserAddresses = userId => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM addresses WHERE userId = ?;`,
        [userId],
        (_, result) => {
          resolve(result)
        },
        (_, err) => {
          reject(err)
        }
      )
    })
  })

  return promise
}

export const insertCard = (userId, card) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO cards (userId, cardNumber, cardHolder, expirationDate, cvv) VALUES (?, ?, ?, ?, ?);`,
        [userId, card.cardNumber, card.cardHolder, card.expirationDate, card.cvv],
        (_, result) => {
          resolve(result)
        },
        (_, err) => {
          reject(err)
        }
      )
    })
  })

  return promise
}

export const updateCard = (id, card) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `UPDATE cards SET cardNumber = ?, cardHolder = ?, expirationDate = ?, cvv = ? WHERE id = ?;`,
        [card.cardNumber, card.cardHolder, card.expirationDate, card.cvv, id],
        (_, result) => {
          resolve(result)
        },
        (_, err) => {
          reject(err)
        }
      )
    })
  })

  return promise
}

export const deleteCard = id => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `DELETE FROM cards WHERE id = ?;`,
        [id],
        (_, result) => {
          resolve(result)
        },
        (_, err) => {
          reject(err)
        }
      )
    })
  })

  return promise
}

export const getUserCards = userId => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM cards WHERE userId = ?;`,
        [userId],
        (_, result) => {
          resolve(result)
        },
        (_, err) => {
          reject(err)
        }
      )
    })
  })

  return promise
}
