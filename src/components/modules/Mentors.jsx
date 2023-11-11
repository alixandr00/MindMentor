// import { styled } from '@mui/material'
// import { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { MentorsCards } from '../mentors/MentorsCards'
// import { NewMentors } from '../mentors/NewMentors'
// import { getStatusMentors } from '../../store/mentors/mentor.thunk'
// import { Loading } from '../UI/loading/Loading'

// export const Mentors = () => {
//    const dispatch = useDispatch()
//    const { mentorData, isLoading } = useSelector((state) => state.mentor)

//    useEffect(() => {
//       dispatch(getStatusMentors(''))
//    }, [])

//    return (
//       <>
//          {isLoading && <Loading />}
//          <NewMentors>

//          </NewMentors>
//       </>
//    )
// }

// const Container = styled('div')(() => ({
//    width: '100%',
//    marginTop: '2rem',
//    display: 'flex',
//    flexWrap: 'wrap',
//    gap: '2rem',
//    maxHeight: '67vh',
//    overflowY: 'auto',
//    scrollbarWidth: 'thin',
//    scrollbarColor: ' #b3b3b30 transparent',
//    '&::-webkit-scrollbar ': {
//       width: '0.3rem',
//    },
//    '&::-webkit-scrollbar-track': {
//       backgroundColor: ' #fff white',
//    },
//    '&::-webkit-scrollbar-thumb ': {
//       backgroundColor: ' #fff',
//       borderRadius: '0.25rem',
//    },

//    padding: '0.5rem',
// }))
