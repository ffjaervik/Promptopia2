import Nav from "@components/Nav";
import "@styles/globals.css";

export const metadata = {
  title: "Promptopia 2",
  description: "Discover and Share AI-Powered Prompts",
};

import React from "react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
