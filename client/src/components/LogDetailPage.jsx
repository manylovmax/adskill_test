import React from "react";
import { useLoaderData } from "react-router-dom";

async function getLog(logId) {
    return await axios.get('http://127.0.0.1:8000/logs/' + logId)
    .then(function (response) {
    // handle success
    console.log(response);
    })
    .catch(function (error) {
    // handle error
    console.log(error);
    })
}


export async function loader({ params }) {
    const log = await getLog(params.logId);
    return { log };
}


export default function LogDetailPage () {
    const { log } = useLoaderData();


    return (
    <div>
        <p>Log ID: {log.id}</p>
        <p>timestamp: {log.timestamp}</p>
        <p>computer_name: {log.computer_name}</p>
    </div>
    )
}
