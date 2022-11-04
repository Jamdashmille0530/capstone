// import React, { useState, useEffect } from 'react'
// // import firebase from 'firebase/app';
// import firebase from 'firebase/compat/app'

// const Channel = ({ user = null, db = null }) => {
//   const [message, setMessage] = useState([])

//   useEffect(() => {
//     if (db) {
//       const unsuscribe = db
//         .collection('messages')
//         .orederBy('createdAt')
//         .limit(100)
//         .onSnapShot((quesrySnapshot) => {
//           const data = quesrySnapshot.docs.map((doc) => ({
//             ...doc.data(),
//             id: doc.id,
//           }))

//           setMessage(data)
//         })

//       return unsuscribe
//     }
//   }, [db])

//   return null
// }
// export default Channel
