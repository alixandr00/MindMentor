import dayjs from 'dayjs'
import * as Yup from 'yup'

export function getMonth(month = dayjs().month()) {
   month = Math.floor(month)
   const year = dayjs().year()
   const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day()
   let currentMonthCount = 0 - firstDayOfTheMonth
   const daysMatrix = new Array(5).fill([]).map(() => {
      return new Array(7).fill(null).map(() => {
         // eslint-disable-next-line no-plusplus
         currentMonthCount++
         return dayjs(new Date(year, month, currentMonthCount))
      })
   })
   return daysMatrix
}
export const validationSchema = Yup.object().shape({
   internName: Yup.number()
      .typeError('Intern number must be a number')
      .required('Intern number is required'),
   interviewName: Yup.string().required('Name of the interview is required'),
   location: Yup.string().required('Location is required'),
})
