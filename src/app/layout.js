import "./globals.css"
import Header from "../components/Header"
import Footer from "../components/Footer"

export const metadata = {
  title: "Premium E-commerce Store",
  description: "Shop the latest trends with our premium collection of products",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Premium E-commerce Store",
              url: "https://your-store-domain.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://your-store-domain.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
