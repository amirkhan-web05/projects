import React from 'react';
import { Photo } from './components/Photo';
import { TextInputWithFocusButton } from './components/TextInputWithFocusButton';
import { AppContext } from './context';
import './index.scss';

export default function App() {
   const [show, setShow] = React.useState(false);
   const [timer, setTimer] = React.useState(0);
   const [showInput, setShowInput] = React.useState(false);

   const headerRef = React.useRef();
   const popupRef = React.useRef();

   React.useEffect(() => {
      window.addEventListener('scroll', () => {
         headerRef.current.classList.toggle('sticky', window.scrollY > 0);
      });
   }, []);

   const useOutsideClick = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
         setShow(false);
      }
   };

   React.useEffect(() => {
      document.addEventListener('click', useOutsideClick);

      return () => {
         document.removeEventListener('click', useOutsideClick);
      };
   });

   //  React.useEffect(() => {
   //     setInterval(() => {
   //        setTimer((prev) => prev + 1);
   //     }, 1000);
   //  }, []);

   return (
      <AppContext.Provider value={{ show, setShow, showInput, setShowInput }}>
         <header ref={headerRef} className="header">
            <nav>
               <a href="/">Home</a>
               <a href="/">About</a>
               <a href="/">Info</a>
            </nav>
            <div ref={popupRef}>
               <button style={st_btn} onClick={() => setShow(!show)}>
                  Open popup
               </button>
               <div>
                  {show && (
                     <div style={st_mdl}>
                        <h1>Popup</h1>
                        <button onClick={() => setShow(false)}>
                           Close Popup
                        </button>
                     </div>
                  )}
               </div>
            </div>
            {/* <h1>{timer}</h1> */}
         </header>
         <TextInputWithFocusButton />
         <Photo />
      </AppContext.Provider>
   );
}

const st_btn = { background: '#eee', fontSize: '2rem', cursor: 'pointer' };
const st_mdl = {
   position: 'absolute',
   background: '#a9c1c1',
   width: 300,
   height: 150,
   top: '4rem',
   left: '50%',
   marginLeft: -150,
};
