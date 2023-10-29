import { Box, Modal, styled } from '@mui/material'

export const MentorResumeModal = () => {
   return (
      <WrapperContainer open>
         <Container>
            <Card>
               <MinInfo>
                  {/* <div></div>
                  <div></div>
                  <div></div> */}
                  ONE
               </MinInfo>
               <MaxInfo>
                  {/* <div>
                     <div></div>
                     <div></div>
                  </div>
                  <div>
                     <div></div>
                     <div>
                        <div></div>
                        <div></div>
                     </div>
                  </div> */}
                  TWO
               </MaxInfo>
            </Card>
         </Container>
      </WrapperContainer>
   )
}

const WrapperContainer = styled(Modal)`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   width: 100%;
   height: 100vh;
   /* backgroundColor: 'rgba(240, 230, 230, 0.28); */
`

const Container = styled(Box)`
   position: fixed;
   left: 50%;
   border-radius: 0.625rem;
   transform: translate(-50%, -5%);
   top: 50%;
   max-height: 100vh;

   /* width: 28.5rem; */
   /* height: 41.0625rem; */

   margin-bottom: 115px;
`

const Card = styled('div')`
   display: flex;
`

const MinInfo = styled('div')`
   background: linear-gradient(#252335, #5447aa);
   color: #fff;
   padding: 1.25rem;

   height: 657px;
`

const MaxInfo = styled('div')`
   padding: 1.25rem;
   background-color: #fff;
`
