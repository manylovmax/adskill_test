import React from "react";
import { useLoaderData } from "react-router-dom";

import axios from 'axios';

async function getLog(logId) {
    const response = await axios.get('http://127.0.0.1:8000/logs/' + logId)
    .catch(function (error) {
        // handle error
        console.log(error);
    });
    return response.data;
}


export async function loader({ params }) {
    const log = await getLog(params.logId);
    return { log };
}


export default function LogDetailPage () {
    const { log } = useLoaderData();

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <p>Log ID: {log.id}</p>
                        <p>Timestamp: {log.timestamp}</p>
                        <p>Computer name: {log.computer_name}</p>
                        <p>Event type: {log.event_type}</p>
                        <p>Application: {log.application}</p>
                        <p>Window title: {log.window_title}</p>
                        <p>Content: {log.content}</p>
                        <p>Screenshot url: {log.screenshot_url}</p>
                    </div>
                </div>
            </div>
        </div>      
    )
}
