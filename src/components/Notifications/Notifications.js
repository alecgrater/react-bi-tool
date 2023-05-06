import React from 'react';
import './Notifications.css';

const Notifications = ({ notifications }) => {
  return (
    <div className="notifications-container">
      {notifications.map((notification, index) => (
        <div key={index} className="notification">
          <h3 className="notification-title">{notification.title}</h3>
          <p className="notification-message">{notification.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
