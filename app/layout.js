import Script from "next/script";

export const metadata = {
  title: "Rajan | Graphic Designer & UI Specialist",
  description: "Premium Graphic Designer & UI Specialist delivering business-focused, conversion-driven design solutions."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
        <Script id="ga" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}