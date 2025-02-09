'use client'
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { worker } from "../mocks/browser";

export default function Home() {

  const [user, setUser] = useState("user");
  const [status, setStatus] = useState("status");
  const [access, setAccess] = useState("access");

  const registerUser = async () => {
    //fetch user
    try {
      const response = await fetch("http://localhost:3000/auth/register");
      const data = await response.json();
      setUser(data.name);
      
    } catch (error) {
      console.log("Error fetching data:", error);
    }
    
  }

  const loginUser = async () => {
    try {
      const response = await fetch("http://localhost:3000/auth/login");
      const data = await response.json();
      setStatus(data.name);

    } catch (error) {
      console.log("Error fetching login", error)
    }
  }

  const postAccess = async () => {
    try {
      const response = await fetch("http://localhost:3000/user-projects",
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user_id: 'user123',
            project_id: 'proj123',
            role: 'member',
          }),
        }
      );
      const data = await response.json();
      setAccess(data.name);
    } catch (error) {
      console.log("Error fetching access", error)
    }
  } 

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') { // only run during dev
      worker.start();
    }
  },[]);

  return (
    <div className={styles.page}>
      <button onClick={registerUser}>register</button>
      <p>{user}</p>
      <button onClick={loginUser}>login</button>
      <p>{status}</p>
      <button onClick={postAccess}>access</button>
      <p>{access}</p>
    </div>
  );
}
