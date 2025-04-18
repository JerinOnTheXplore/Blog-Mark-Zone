import React from 'react';

const Navbar = () => {
    return (
        <div className='sticky top-0 z-50 '>
           <div className="navbar shadow-sm sticky top-0 z-50 bg-cyan-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-2xl text-emerald-500">Blog-Mark-Zone</a>
  </div>
  <div className="flex gap-2">
    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://i.ibb.co/vwGwnhT/boy2.jpg" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Navbar;