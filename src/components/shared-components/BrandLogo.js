import React from 'react'

export default function BrandLogo() {
  return (
    <div className="border rounded-lg ">

    <div className="text-white text-uppercase font-weight-bold" style={logoStyle}>
      <i class="fas fa-fish mr-2"></i>
      <span className="mr-1">flying</span>
      <span className="text-info">cat</span>
    </div>
    </div>
  )
}

const logoStyle = {
  fontSize: "20px",
  width: "170px",
}