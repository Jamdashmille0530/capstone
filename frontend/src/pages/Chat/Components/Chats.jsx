import React from 'react'
import Test from 'assets/test.jpeg'
import { useEffect } from 'react'
import { useState } from 'react'
import { getRooms } from '../../../utils/messages.routes'
import { socket } from '../../../utils/socket'

export const Chats = ({ onClick, room }) => {
  const [page, setPage] = useState(0)
  const [data, setData] = useState({ data: [], count: 0 })

  useEffect(() => {
    getRooms(page, 20).then((resData) => {
      setData((d) => ({ data: [...d.data, ...resData.data], count: d.count }))
    })
  }, [page])

  useEffect(() => {
    socket.off(`/messages/${room?.roomId}`)
    socket.on(`/messages/${room?.roomId}`, (data) => setData(data))
  }, [room])

  return (
    <div className="chats" style={{ overflow: 'auto' }}>
      {data?.data?.map((d) => (
        <div className="userChat" onClick={() => onClick?.(d.user.id)}>
          {!!d.user.image && <img src={d.user.image} />}
          <div className="userChatInfo">
            <span>
              {d.user.fname + ' ' + d.user.mname + ' ' + d.user.lname}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}
