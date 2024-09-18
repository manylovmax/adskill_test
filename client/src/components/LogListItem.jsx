import React from "react";
import { Link } from "react-router-dom";


export default function LogListItem({log}) { 
   return (
    <Link to={'/logs/' + log.id}>
        <div>
            <p>Log ID: {log.id}</p>
            <p>timestamp: {log.timestamp}</p>
            <p>computer_name: {log.computer_name}</p>
        </div>
    </Link>
    );
}