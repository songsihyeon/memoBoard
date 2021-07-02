// import React, { useState, useRef } from 'react';
// import { Router } from 'react-router';
// import DrawMain from './DrawMain';
// import ContentBox from './ContentBox';
// import Header from './Header';
// import TextDay from '../components/TextArea/TextDay';
// import TextSection from '../components/TextArea/TextSection';
// import Footer from './Footer';
// import ButtonCancle from '../components/Button/ButtonCancel';
// import ButtonConfirm from '../components/Button/ButtonConfirm';

// function WriteDiary() {
//   const [text, setText] = useState({
//     day: '',
//     content: '',
//   });
//   const { day, content } = text;
//   const onChange = (e) => {
//     const { name, value } = e.target;
//     setText({
//       ...text,
//       [name]: value,
//     });
//   };
//   const diary = [
//     {
//       id: 1,
//       day: '3월 15일',
//       content: 'exexexexex',
//     },

//     {
//       id: 2,
//       day: '6월 29일',
//       content: 'exexexexex',
//     },
//     {
//       id: 3,
//       day: '7월 6일',
//       content: 'exexexexex',
//     },
//   ];

//   const nextId = useRef(4);
//   const onCreate = () => {
//     setText({
//       day: '',
//       content: '',
//     });
//     nextId.current += 1;
//   };

//   return (
//     <ContentBox>
//       <Router path="/" render={(props) => <DrawMain diary={diary} />} />
//       <Header />
//       <TextDay isTitle />
//       <TextSection />
//       <Footer>
//         <ButtonCancle Text="취소" Pathes="/" />
//         <ButtonConfirm Text="등록" Pathes="/" />
//       </Footer>
//     </ContentBox>
//   );
// }

// export default WriteDiary;
