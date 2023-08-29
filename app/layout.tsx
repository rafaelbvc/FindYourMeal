import NavBar from "./components/NavBar";
import AuthContext from "./context/AuthContext";
import "./globals.css";

async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>FindYourMeal</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="FindYourMeal Clone"
          content="A FindYourMeal by Rafael Vendramini"
        />
        <link rel="icon" href="/icons/favicon.ico" />
      </head>
      <body>
        <main className="bg-gray-100 min-h-screen w-screen">
          <AuthContext>
            <main className="m-auto bg-white">
              <NavBar />
              {children}
            </main>
          </AuthContext>
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
