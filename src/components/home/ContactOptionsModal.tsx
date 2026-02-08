import React from 'react';

const ContactOptionsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-[#D1A526] max-w-md w-full shadow-2xl">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Achieve Your Outcome</h2>
        <div className="space-y-4">
          <a 
            href="https://wa.me/8320065658?text=Hello%20ZeroOne%20Support,%20I'm%20interested%20in%20scaling%20my%20business%20with%20AI." 
            className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white py-4 rounded-xl font-bold transition-all"
            onClick={onClose}
          >
            <span>Chat on WhatsApp</span>
          </a>
          <button 
            className="w-full bg-white hover:bg-gray-200 text-black py-4 rounded-xl font-bold transition-all"
            onClick={() => { /* Original Form Logic Here */ onClose(); }}
          >
            Fill the Outcome Form
          </button>
        </div>
        <button 
          className="mt-6 text-gray-400 hover:text-white w-full text-center text-sm"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ContactOptionsModal;
