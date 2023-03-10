import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import { IPost } from '../model/IPost';
import Link from 'next/link';
import Button from '@/components/Button';

export default function Home({ post }: { post: IPost }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h2>
          Use the Buttons Below to Visit a Page with a Different Rendering
          Pattern❄️
        </h2>
        <ul className={styles.navbar}>
          <li>
            <Link href="/csr">
              <Button text="CSR" />
            </Link>
          </li>
          <li>
            <Link href="/ssr">
              <Button text="SSR" />
            </Link>
          </li>
          <li>
            <Link href="/ssg">
              <Button text="SSG" />
            </Link>
          </li>
        </ul>
      </main>
    </>
  );
}
