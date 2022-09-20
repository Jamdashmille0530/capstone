import { prisma } from "../utils/db";

export const addEvent = async (req, res, next) => {
  console.log("payload", req.payload);
  try {
    const event = await prisma.calendar.create({ data: req.body });
    res.json({
      event,
    });
  } catch (err) {
    next(err);
  }
};

export const deleteEvent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const event = await prisma.calendar.delete({
      where: { id },
    });
    res.json({
      message: "Successfully delete event",
    });
  } catch (err) {
    next(err);
  }
};
