import Head from 'next/head'
import Image from 'next/image';
import Link from "next/link";
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

import logo from "../public/logo.png";
import Navigation from '@/components/navbar';

export default function Home() {
  return (
      <div className={"container"}>
        <div className={"row"}>
          <div className={"col d-flex justify-content-center align-items-center"}>
            <Image src={logo} alt={"ExplainThis Logo"} className={`img img-fluid shadow ${styles.logo}`}/>
          </div>

            <h2 className={"text-center mt-5"}>AI-Powered Code Explanation Made Simple</h2>
        </div>

          <div className={"row mt-5"}>
              <div className={"col d-flex justify-content-evenly align-items-center"}>
                <Link href={"/getstarted"} className={"btn btn-info"}>
                    Get Started
                </Link>

                  <Link href={"/about"} className={"btn btn-secondary"}>
                      About Us
                  </Link>
              </div>
          </div>
      </div>
  )
}
