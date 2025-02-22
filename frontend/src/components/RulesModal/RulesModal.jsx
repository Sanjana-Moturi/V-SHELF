import React from 'react';
import './RulesModal.css'; // Create a separate CSS file for modal styling

const RulesModal = ({ closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Library Rules</h2>
        <br/>
        <div className="rules-list">
          <ol>
            <li>Conduct not conducive to the proper use of the library is forbidden.</li>
            <li>No noise, disturbance, or unruly behaviour is allowed in any part of the library.</li>
            <li>Smoking, food, and drinks are not allowed in the library.</li>
            <li>Silence must be observed in public areas. Mobile phones, pagers, and watch alarms should be switched off before entering.</li>
            <li>Users should be decently dressed.</li>
            <li>Loitering in the library is prohibited.</li>
            <li>Library materials must not be taken out without proper issue by staff.</li>
            <li>All books and personal belongings must be shown to staff at exits when requested.</li>
            <li>No bags, umbrellas, or personal items should be brought into the library (use the property counter).</li>
            <li>Membership cards are not transferable and must be presented when requested.</li>
            <li>If a membership card is lost, report immediately and pay Rs. 50/- for a replacement.</li>
            <li>Mutilation or theft of library materials is punishable by law.</li>
            <li>Library books must be treated with honor and should not be defaced.</li>
            <li>All library dues must be paid.</li>
            <li>The library is not responsible for the loss of personal belongings.</li>
            <li>Members should inform the library of changes to their address or designation.</li>
            <li>After consultation, books should be left on tables for re-shelving by staff.</li>
            <li>Library staff can ask users to leave if they are causing a disturbance or are inappropriately dressed.</li>
            <li>Non-members can be asked to leave the library.</li>
          </ol>
        </div>
        <button className="close-btn" onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default RulesModal;