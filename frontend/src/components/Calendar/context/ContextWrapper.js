import React, { useState, useEffect, useMemo, useCallback } from 'react'
import GlobalContext from './GlobalContext'
import { getEvent } from '../../../utils/calendar.routes'
import dayjs from 'dayjs'

export default function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month())
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null)
  const [daySelected, setDaySelected] = useState(dayjs())
  const [showEventModal, setShowEventModal] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [labels, setLabels] = useState([])
  const [savedEvents, setSavedEvents] = useState([])

  const retrieveEvents = useCallback(() => {
    const startdate = new Date(dayjs().year(), monthIndex)
    startdate.setDate(1)
    const endDate = new Date(dayjs().year(), monthIndex + 1)
    endDate.setDate(1)

    getEvent(startdate.getTime(), endDate.getTime())
      .then((response) => setSavedEvents(response?.data?.event))
      .catch(() => setSavedEvents([]))
  }, [monthIndex, setSavedEvents])

  useEffect(() => {
    retrieveEvents()
  }, [monthIndex])

  const filteredEvents = useMemo(() => {
    console.log(savedEvents, labels)
    return (
      savedEvents?.filter(
        (evt) =>
          !!labels
            ?.filter((lbl) => lbl?.checked)
            .map((lbl) => lbl?.label)
            .includes(evt?.label)
      ) ?? []
    )
  }, [savedEvents, labels])

  useEffect(() => {
    setLabels((prevLabels) => {
      return [...new Set(savedEvents.map((evt) => evt.label))].map((label) => {
        const currentLabel = prevLabels.find((lbl) => lbl.label === label)
        return {
          label,
          checked: currentLabel ? currentLabel.checked : true,
        }
      })
    })
  }, [savedEvents])

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth)
    }
  }, [smallCalendarMonth])

  useEffect(() => {
    if (!showEventModal) {
      setSelectedEvent(null)
    }
  }, [showEventModal])

  function updateLabel(label) {
    setLabels(labels.map((lbl) => (lbl.label === label.label ? label : lbl)))
  }

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        smallCalendarMonth,
        setSmallCalendarMonth,
        daySelected,
        setDaySelected,
        showEventModal,
        setShowEventModal,

        selectedEvent,
        setSelectedEvent,
        savedEvents,
        setLabels,
        labels,
        updateLabel,
        filteredEvents,
        retrieveEvents,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}
