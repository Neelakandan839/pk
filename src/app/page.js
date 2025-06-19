"use client";

import React from "react";
import { motion } from "framer-motion";
import Typing from "@/components/Typing";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        padding: "2rem",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{
          maxWidth: "700px",
          padding: "1.5rem",
          background: "white",
          borderRadius: "1rem",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          textAlign: "left",
          whiteSpace: "pre-wrap",
        }}
      >
        <h3>Hey Punitha 👋, I Wanna Tell You Something...</h3>

        <h3 style={{ marginTop: "30px" }}>
          There&apos;s something inside me I have been holding for too long and
          I stayed silent for too long... but this is what my heart wants to say
        </h3>

        <div>
          <Typing />
        </div>
        <h4 style={{ textAlign: "end" }}>- Prashanth</h4>
      </motion.div>
    </div>
  );
}
