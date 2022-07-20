import React from 'react'
import "./spinner.css"

export function Spinner() {
  return (
    <div className="spinner flex justify-center">
      <div className="flower-spinner">
        <div className="dots-container">
          <div className="bigger-dot">
            <div className="smaller-dot"></div>
          </div>
        </div>
      </div>
    </div>
  )
}