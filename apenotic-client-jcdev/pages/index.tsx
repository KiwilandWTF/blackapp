import { useUser } from '@auth0/nextjs-auth0';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

// Tailwind colors https://tailwindcss.com/docs/customizing-colors

const Home: NextPage = () => {
  const { user, error, isLoading } = useUser();
  // 

  return (
    <div className={styles.container}>
      <Head>
        <title>Apenotic</title>
      </Head>
      <main className={styles.main}>
        <h1 className="text-5xl bold text-stone-700">
          Apenotic
        </h1>

        {authButton(user)}


      </main>

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

function authButton(user: any) {

  if (user === undefined || user === null) return (<div>
    <a href="/api/auth/login" className='bold cursor-all-scroll'>Sign in</a>
  </div>);


  let logout = (
    <div>
      <h2>Welcome <a className="text-red-600 bold ">{user.name}</a>!</h2>

      <img src={user.picture} alt="Profile" />
      <p>
        <br></br>
        <a href="/api/auth/logout" className='text-gray-700 bold underline'>Logout</a>
      </p>
    </div>
  );

  return (<div>
    {logout}
  </div>);
}



export default Home
