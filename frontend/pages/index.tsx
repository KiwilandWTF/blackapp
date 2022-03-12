import { useUser } from '@auth0/nextjs-auth0';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

// Tailwind colors https://tailwindcss.com/docs/customizing-colors

const Home: NextPage = () => {
  const { user, error, isLoading } = useUser();
  // 


  let logo = "https://github.com/KiwilandWTF/blackapp/raw/main/frontend/public/hynix-logo-2x.png";

  return (
    <div className={styles.container}>
      <Head>
        <title>Blackapp - Home</title>
      </Head>

      <body>

        {/* !--Navbar goes here -->*/}
        <div className="bg-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4">


            <nav className="bg-white">
              <ul className="flex justify-self-stretch">
                <li className="mr-6">
                  <a className="text-blue-500 hover:text-blue-800" href="#">Home</a>
                </li>
                <li className="mr-6">
                  <a className="text-blue-500 hover:text-blue-800" href="#">Pricing</a>
                </li>
                <li className="mr-6">
                  <a className="text-blue-500 hover:text-blue-800" href="#">Discord</a>
                </li>
                <li className="mr-6">
                  <a className="text-gray-400 cursor-not-allowed" href="#">Blackbird Terminal</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* !--Main content goes here -->*/}
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col">
            <div>
              <p>
                <br></br>
              </p>
            </div>
            <div className="flex-1 flex-col px-4">
              <div className="flex justify-center">
                <img className="h-16 w-16" src={logo} alt="hynix logo" />
              </div>
              <div className="flex justify-center">
                <h1 className="text-3xl font-bold text-center">Blackapp</h1>
              </div>
              <div className="flex justify-center">
                <p className="text-center">
                  A simple, minimalistic, and modern web application for managing your blackbird instances.
                </p>
              </div>
              <div className="flex justify-center">
                <p className="text-center">
                  <a className="text-blue-500 hover:text-blue-800" href="#">Learn more</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <main>

        </main>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </body>

      <footer className={styles.footer}>
        <a
          href="https://jcedeno.us/hynix"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright 2022 &copy; Hynix Studios.
        </a>
      </footer>
    </div>
  )
}




export default Home
