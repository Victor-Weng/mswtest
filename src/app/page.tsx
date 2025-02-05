'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { worker } from "../mocks/browser";

export default function Home() {

  const [user, setUser] = useState("nothing");

  const fetchUser = async () => {
    //fetch user
    try {
      const response = await fetch("http://localhost:3000/mswAPI");
      const data = await response.json();
      setUser(data.name);
      
    } catch (error) {
      console.log("Error fetching data:", error);
    }
    
  }

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') { // only run during dev
      worker.start();
    }
  },[]);

  return (
    <div className={styles.page}>
      <button onClick={fetchUser}>Press ME</button>
      <p>{user}</p>
    </div>
  );
}
