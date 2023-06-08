import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "./Config";

export default function UpdateAbout() {
    const [data, setData] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editedData, setEditedData] = useState("");

    useEffect(() => {
        fetchAboutMeData();
    }, []);

    const fetchAboutMeData = () => {
        const API_URL = API_BASE_URL + "/api/SaveAboutMe";
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data.data);
            })
            .catch((error) => {
                console.error("Error fetching about me data:", error);
            });
    };

    const handleEditClick = () => {
        setEditMode(true);
        setEditedData(data[0].meData);
       
    };

    const handleSaveClick = () => {
        const API_URL = API_BASE_URL + "/api/SaveAboutMe";
        const requestData = {
            meData: editedData,
        };

        fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
        })
            .then((res) => res.json())
            .then((response) => {
                console.log("Save response:", response);
                setEditMode(false);
                fetchAboutMeData(); // Fetch updated data after save
            })
            .catch((error) => {
                console.error("Error saving about me data:", error);
            });
    };

    const handleInputChange = (event) => {
        setEditedData(event.target.value);
    };

    return (
        <>
            <h1 style={{ color: "white", margin: "100px 0 0 20px" }}>About Me</h1>
            <div>
                <div style={{ color: "white", margin: "10px 50px 320px 20px" }}>
                    {data.length !== 0 && !editMode ? (
                        <ul>
                            {data.map((res) => (
                                <li key={res.id}>{res.meData}</li>
                            ))}
                        </ul>
                    ) : (
                        <textarea
                            value={editedData}
                            onChange={handleInputChange}
                            style={{ width: "100%", height: "200px" }}
                        />
                    )}
                    {!editMode ? (
                        <button
                            style={{
                                height: "30px",
                                width: "60px",
                                marginTop: "10px",
                                fontSize: "16px",
                                fontWeight: "bold",
                            }}
                            onClick={handleEditClick}
                        >
                            Edit
                        </button>
                    ) : (
                        <button
                            style={{
                                height: "30px",
                                width: "60px",
                                marginTop: "10px",
                                fontSize: "16px",
                                fontWeight: "bold",
                            }}
                            onClick={handleSaveClick}>Save</button>
                    )}
                </div>
            </div>
        </>
    );
}
