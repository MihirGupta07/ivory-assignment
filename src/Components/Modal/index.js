// PaywallModal.js
import React from 'react';
import { useModal } from '../Contexts/ModalContext';
import "./style.css"
import Button from '../Button';

const Modal = () => {
    const { isModalOpen, toggleModal } = useModal();
    const stopPropagation = event => {
        event.stopPropagation();
    };  
    const takeMeToIvory = () => {
        window.open("https://liveivory.com/")
    }
  return (
    isModalOpen && (
      <div className="modalOverlay" onClick={toggleModal}>
        <div className="modalContainer" onClick={stopPropagation}>
          <h2>🎉Congratulations!🎉</h2>
                  <p>You did great on the game!</p>
                  <p>Great job on completing the game! Your memory skills are top-notch! 🌟</p>
                  <p>  Would you like to continue challenging yourself with more games?</p>
               
                  <Button onClick={ takeMeToIvory} classes='colorWhite playGameButton modalButton' buttonText='Play more games'/>
                      {/* <Button classes='colorWhite playGameButton modalButton' buttonText='Close' /> */}
                      
                  
        </div>
      </div>
    )
  );
};

export default Modal;
