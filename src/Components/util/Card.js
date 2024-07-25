// src/components/CardComponent.js
import React from 'react';
import './CSS/CardComponent.css';

const CardComponent = ({
  missionName,
  launchpayload,
  payloadmass,
  launchdatetime,
  launchorbit,
  launchpad,
  launchvehicle,
  liftoff,
  coverimage,
  createdBy
}) => {
  return (
    <div className="card">
      <img src={coverimage.url} alt={missionName} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{missionName}</h2>
        <p className="card-detail"><strong>Payload:</strong> {launchpayload}</p>
        <p className="card-detail"><strong>Mass:</strong> {payloadmass} kg</p>
        <p className="card-detail"><strong>Launch Date:</strong> {new Date(launchdatetime).toLocaleString()}</p>
        <p className="card-detail"><strong>Orbit:</strong> {launchorbit}</p>
        <p className="card-detail"><strong>Launch Pad:</strong> {launchpad}</p>
        <p className="card-detail"><strong>Launch Vehicle:</strong> {launchvehicle}</p>
        <p className="card-detail"><strong>Liftoff:</strong> {liftoff}</p>
        <p className="card-detail"><strong>Created By:</strong> {createdBy.name}</p>
        <p className="card-detail"><strong>Published At:</strong> {new Date(createdBy.publishedAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default CardComponent;