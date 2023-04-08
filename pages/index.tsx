import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

import logo from "../public/logo.png";

export default function Home() {
  return (
    <div className={"container"}>
      <div className={"row"}>
        <div className={"col d-flex justify-content-center align-items-center"}>
          <Image
            src={logo}
            alt={"ExplainThis Logo"}
            className={`img img-fluid shadow ${styles.logo}`}
          />
        </div>

        <h2 className={"text-center mt-5"}>
          AI-Powered Code Explanation Made Simple
        </h2>
      </div>

      <div className={"row mt-5"}>
        <div className={"col d-flex justify-content-evenly align-items-center"}>
          <Link href={"/start"} className={"btn btn-info"}>
            Get Started
          </Link>
        </div>
      </div>

      <footer className={"container mt-5"}>
        <div className={"text-center"}>
          <p>
            <i>ExplainThis</i> is a project by Deyby, Vadim & Tahir
          </p>
        </div>
      </footer>
    </div>
  );
}
