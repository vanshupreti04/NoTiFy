"use client"; // ✅ Enables Client Component behavior

import "../i18n/i18n"; // Ensure i18n initializes properly
import "./globals.css";
import { AppProvider } from "./context/AppContext";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n/i18n";

export default function RootLayout({ children }) {
  return (
    <I18nextProvider i18n={i18n}>
      <AppProvider>
        <html lang="en">
          <body>{children}</body>
        </html>
      </AppProvider>
    </I18nextProvider>
  );
}
