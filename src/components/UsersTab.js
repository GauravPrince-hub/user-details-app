import React from 'react'

export default function UsersTab() {
  return (
    <div>
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">User Details</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Grant Permissions</a>
            </li>
        </ul>

    </div>
  )
}
