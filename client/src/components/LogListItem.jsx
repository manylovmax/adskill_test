import React from "react";
import { Link } from "react-router-dom";


export default function LogListItem({log}) { 
   return (
    <Link to={'/logs/' + log.id}>
        <div className="card">
            <p>Log ID: {log.id}</p>
            <p>Timestamp: {log.timestamp}</p>
            <p>Computer name: {log.computer_name}</p>
        </div>
    </Link>
    );
}