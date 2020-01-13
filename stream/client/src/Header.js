import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <div className="ui secondary pointing menu">
            <Link className="item" to="/">
                StreamList
            </Link>
            <Link className="item" to="/streams/new">
                StreamCreate
            </Link>
            <Link className="item" to="/streams/edit">
                StreamEdit
            </Link>
            <div className="right menu">
                <Link className="ui item active" to="/">
                    LogOut
                </Link>
            </div>
        </div>
    )
}

export default Header;