/* eslint-disable no-unneeded-ternary */
import dayjs from 'dayjs'
import { useState } from 'react'

export const useEditEventModal = (
   calendarDataForId,
   selectedStartTime
   // groupId
) => {
   const [internName, setInternName] = useState(
      calendarDataForId?.group_name ?? ''
   )
   const [interviewName, setInterviewName] = useState(
      calendarDataForId?.title ?? ''
   )
   const [interviewNameError, setInterviewNameError] = useState('')
   const [location, setLocation] = useState(calendarDataForId?.location ?? '')
   const [locationError, setLocationError] = useState('')
   const [description, setDescription] = useState(
      calendarDataForId?.description ?? ''
   )

   const seletectedStateTimee = dayjs(selectedStartTime, 'HH:mm')

   const startTimeFromData = calendarDataForId?.start_time || ''
   const startTimee = startTimeFromData.slice(0, 5)
   const startTimeAsDayjs = startTimee ? dayjs(startTimee, 'HH:mm') : null

   const [startTime, setStartTime] = useState(
      startTimeAsDayjs ? startTimeAsDayjs : seletectedStateTimee
   )

   const endTimeFromData = calendarDataForId?.end_time || ''
   const endTimee = endTimeFromData.slice(0, 5)
   const endTimeAsDayjs = dayjs(endTimee, 'HH:mm')

   const [endTime, setEndTime] = useState(endTimeAsDayjs)

   const resetHandler = () => {
      setDescription('')
      setStartTime('')
      setEndTime('')
      setLocationError('')
      setInterviewNameError('')
      setLocation('')
      setInterviewName('')
      setInternName('')
   }

   return {
      internName,
      setDescription,
      setStartTime,
      setEndTime,
      startTime,
      description,
      endTime,
      setLocationError,
      locationError,
      location,
      setInterviewNameError,
      setLocation,
      interviewNameError,
      interviewName,
      setInterviewName,
      setInternName,
      resetHandler,
   }
}
