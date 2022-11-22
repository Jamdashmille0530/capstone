import { getMessages, joinRoom } from '../services/message.services'

export const getRoom = async (req, res) => {
  try {
    const { userId } = req.payload
    const data = await joinRoom(userId)

    return res.json({ roomId: data.id })
  } catch (e) {
    return res.status(500).json({ message: e })
  }
}

export const getAllMessages = async (req, res) => {
  try {
    const { id } = req.params
    const { page, limit } = req.query

    const data = await getMessages(
      id,
      typeof page === 'number' && typeof limit === 'number'
        ? page * limit
        : undefined,
      typeof page === 'number' && typeof limit === 'number' ? limit : undefined
    )
    const allData = await getMessages(id)

    return res.json({ data, count: allData.length })
  } catch (e) {
    return res.status(500).json({ message: e })
  }
}
