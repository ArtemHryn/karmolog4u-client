"use client";
import { Header } from "@components/Header/Header";
import { Roboto, Cormorant, Arimo, PT_Sans } from "next/font/google";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme.js";
import "./globals.css";
import { Box } from "@components/Box.jsx";
import Footer from "@components/Footer/Footer.jsx";
import StyledComponentsRegistry from "./registry.jsx";
import "../i18n.js";
import { Suspense } from "react";

export const cormorant = Cormorant({
  subsets: ["cyrillic"],
  weight: ["400", "500", "600", "700"],
});

export const arial = Roboto({
  subsets: ["cyrillic"],
  weight: ["400", "500", "700", "300"],
});

export const arimo = Arimo({
  subsets: ["cyrillic"],
  weight: ["400", "500", "700"],
});

export const ptSans = PT_Sans({
  subsets: ["cyrillic"],
  weight: ["400", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="ua">
      <Box as="body" bg="#e7e6e4">
        <Suspense fallback={<div>Loading...</div>}>
          <ThemeProvider theme={theme}>
            <StyledComponentsRegistry>
              <>
                <Header />
                {children}
                <Footer />
              </>
            </StyledComponentsRegistry>
          </ThemeProvider>
        </Suspense>
      </Box>
    </html>
  );
}
