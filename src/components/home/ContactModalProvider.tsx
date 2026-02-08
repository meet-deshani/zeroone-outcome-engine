import React, { createContext, useContext, useState, useEffect } from 'react';
import ContactOptionsModal from './ContactOptionsModal';

const ModalContext = createContext({ openModal: () => {} });

export const useContactModal = () => useContext(ModalContext);

export const ContactModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleTrigger = () => setIsOpen(true);
    window.addEventListener('trigger-contact-modal', handleTrigger);
    return () => window.removeEventListener('trigger-contact-modal', handleTrigger);
  }, []);

  const openModal = () => setIsOpen(true);

  return (
    <ModalContext.Provider value={{ openModal }}>
      {children}
      <ContactOptionsModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </ModalContext.Provider>
  );
};
