import React from 'react'

const Dropdown = () => {
  return (
    <div>
        <div className="select">
          <select className="bg-zinc-200" defaultValue="0" name="format" id="format">
            <option value="0" disabled>
              Disabled Option
            </option>
          </select>
        </div>
    </div>
  )
}

export default Dropdown