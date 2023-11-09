import { Box, Modal, styled } from '@mui/material'

export const MentorResumeModal = ({ open, onClose }) => {
   return (
      <WrapperContainer open={open} onClose={onClose}>
         <Container>
            <Card>
               <MinInfo>
                  <UserPhoneBox>
                     <div className="box-phone-info">
                        <span className="title-small">Phone</span>
                        <span>123-456-7890</span>
                     </div>
                     <div className="box-phone-info">
                        <span className="title-small">Email</span>
                        <span>hello@rellygreatsite.com</span>
                     </div>
                  </UserPhoneBox>
                  <EducationContainer>
                     <span className="title">Education</span>

                     <div className="education">
                        <div className="box-education">
                           <span>2008</span>
                           <span className="title-small">
                              Enter Your Degree
                           </span>
                           <span>University/College</span>
                        </div>
                        <div className="box-education">
                           <span>2008</span>
                           <span className="title-small">
                              Enter Your Degree
                           </span>
                           <span>University/College</span>
                        </div>
                     </div>
                  </EducationContainer>
                  <ExpertiseContainer>
                     <span className="title">Expertise</span>
                     <ul>
                        <li>UI/UX</li>
                        <li>Visual Design</li>
                        <li>Wiredraws</li>
                        <li>Storyboards</li>
                        <li>User Flows</li>
                        <li>Process Flows</li>
                     </ul>
                  </ExpertiseContainer>
               </MinInfo>
               <MaxInfo>
                  <div>
                     <p className="head-title">
                        <span>Mariana</span>Anderson
                     </p>

                     <p className="manager">Marketing Manager</p>
                  </div>

                  <ExperienceContainer>
                     <p className="experience-title">Experience</p>

                     <div className="experience-box">
                        <p className="experience-year">2019-2022</p>
                        <p className="experience-address">
                           Company Name | 123 Anywhere St., Any City
                        </p>
                        <p className="experience-position">Job position here</p>
                        <p className="experience-text">
                           Lorem ipsum dolor sit, amet consectetur adipisicing
                           elit. Obcaecati ullam consequuntur omnis eius quasi
                           dolore voluptates vero impedit, odio aliquam
                           voluptate possimus dolorum magnam illum commodi
                           asperiores. Quas, tenetur repellat.
                        </p>
                     </div>
                  </ExperienceContainer>
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

   backdrop-filter: blur(0.125rem);
`

const Container = styled(Box)`
   position: fixed;
   left: 50%;
   border-radius: 0.625rem;
   transform: translate(-50%, 0%);
   max-width: 36vw;

   margin-top: 3.75rem;
`

const Card = styled('div')`
   display: flex;
   height: 88vh;
   overflow: hidden;
`

const MinInfo = styled('div')`
   background: linear-gradient(#252335, #5447aa);
   color: #fff;

   padding: 4rem 1.25rem 1.875rem 1.25rem;
   border-radius: 0.625rem 0 0 0.625rem;
   display: flex;
   flex-direction: column;

   .title {
      font-size: 1.375rem;
      font-weight: 600;
   }

   .title-small {
      font-size: 1rem;
      font-weight: 600;
   }
`

const MaxInfo = styled('div')`
   padding: 0 1rem;
   background-color: #fff;
   color: #323b4c;

   border-radius: 0 0.625rem 0.625rem 0;

   .head-title {
      margin-top: 2.25rem;

      display: flex;
      gap: 0.375rem;
      font-size: 2.2rem;

      span {
         font-weight: bold;
      }
   }

   .manager {
      font-size: 1rem;
      font-weight: 500;
   }
`

const UserPhoneBox = styled('div')`
   margin-bottom: 3.375rem;

   display: flex;
   flex-direction: column;
   gap: 1rem;

   .box-phone-info {
      display: flex;
      flex-direction: column;
   }
`

const EducationContainer = styled('div')`
   .education {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
   }

   .box-education {
      display: flex;
      flex-direction: column;
   }

   margin-bottom: 1.5rem;
`

const ExpertiseContainer = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 1rem;

   ul {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
   }
`

const ExperienceContainer = styled('div')`
   margin-top: 3.75rem;
   width: 96%;

   .experience-title {
      font-size: 1.25rem;
      font-weight: 600;
      padding-bottom: 0.25rem;
      border-bottom: 0.0625rem solid #989ca5;
      margin-bottom: 1rem;
   }

   .experience-box {
      width: 100%;
      color: #757575;
      font-size: 1rem;
      margin-left: 0.375rem;
   }

   .experience-year {
      font-weight: 600;
      margin-bottom: 0.25rem;
   }

   .experience-address {
      font-weight: 500;
      margin-bottom: 0.25rem;
   }

   .experience-position {
      font-weight: 600;
      margin-bottom: 0.375rem;
   }
`
