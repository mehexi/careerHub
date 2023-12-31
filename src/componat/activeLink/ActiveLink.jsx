import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to,children}) => {
    return (
        <NavLink
                    to={to}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "text-blue-700"
                        : isPending
                        ? "pending"
                        : ""
                    }
                  >
                    {children}
                  </NavLink>
    );
};

export default ActiveLink;