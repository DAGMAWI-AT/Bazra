// components/Modal.js
import React from "react";
import PropTypes from "prop-types";
import "./Modal.css";

const Modal = ({ item, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span
          className="
       close-btn bg-blue-500 text-white px-2 py-1 mt-4 float-right"
          onClick={onClose}
        >
          &times;
        </span>
        {item && (
          <div className="modal-container">
            <div className="modal-image">
              <img className="w-full max-h-full max-w-full"
                src={`https://bazra.onrender.com/portfoliocar/${item.image}`}
                alt={item.name}
              />
            </div>
            <div className="modal-details text-black pb-10">
              <h2>{item.name}</h2>
              <p className="text-gray-800"><strong>Model:</strong> {item.model}</p>
              <p>
                <strong>Category:</strong> {item.category}
              </p>
              <p>
                <strong>Color:</strong> {item.colors}
              </p>
              <p>
                <strong>Engin:</strong> {item.engine}
              </p>
              <p>
                <strong>Fuel:</strong> {item.fuel_consumption}
              </p>
              <p className="text-black pb-10">
                <strong>Description:</strong> {item.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Modal.propTypes = {
  item: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
