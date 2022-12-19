import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Baro Capital</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>Baro Capital.</p>
          <a target="_blank" rel='noreferrer' href='https://baro-capital-docs-defi.vercel.app/'>Docs↗</a>
          <a target="_blank" rel='noreferrer' href='https://github.com/barocapital'>Github↗</a>
          <a target="_blank" rel='noreferrer' href='https://discord.gg/9WcS2Pbn'>Communidad↗</a>
        </div>
    
        <div className={styles.oneliner}>
          <div className={styles.center}>
            <h1 className='header'>Sabemos que el efectivo es rey. <span className={styles.gradienttext}>Nosotros solo lo transformamos.</span></h1>
          </div>
        </div>
        <h2 className={styles.subtext}>50% de la poblacion Mexicana no tiene cuenta de banco, y hacen transacciones mayormente con efectivo. Nuestra mision es incrementar la inclusion financiera atravez de una cryptomoneda estable ligado al Peso Mexicano, <span className={styles.gradienttext}>$BARO.</span></h2>

        <div className={styles.demo}>
          <div className={styles.center}>
            <h1 className={styles.center}>No nesecitamos cuentas bancarias, nesecitamos hacer pagos rapidos, seguros, y privados.</h1>
            <iframe className={styles.demovideo} width="623" height="350" src="https://www.youtube.com/embed/z3RBSeJBS5U" title="Vida financiera fácil con baro.capital | Demo 0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>

        <h1>Equipo Fundador</h1>
        <div className={styles.gridfounders}>
        <a
          href='https://twitter.com/Richardnotme'
          className={styles.card}
          target='_blank'
          rel="noopener noreferrer"
          >
            <h2 className={styles.center}>
              Richard 
            </h2>
            <p className={styles.gradienttext}>Co-founder</p>
            <p className={inter.className}>
            Administrador de riesgos, entusiasta de Blockchain y asesor estratégico de 3 proyectos Web3.
            </p>
          </a>

          <a
            href="https://twitter.com/irwingtello"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={styles.center}>
              Irwing Tello 
            </h2>
            <p className={styles.gradienttext}>Co-founder</p>
            <p className={inter.className}>
            Desarrollador certificado en Blockchain
5+ años de experiencia y fundador de DFH
            </p>
          </a>
        </div>
        <div className={styles.grid}>
          <a
            href="https://github.com/LuisGarram"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={styles.center}>
            Luis Garza 
            </h2>
            <p className={styles.gradienttext}>Founding Engineer</p>
            <p className={inter.className}>
            Desarrollador de Blockchain, Contribuidor DFH del Multi-Chain NFT Visor
            </p>
          </a>

          <a
            href="https://twitter.com/PolinoSamuel"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={styles.center}>
              Samuel Polino 
            </h2>
            <p className={styles.gradienttext}>Founding Engineer</p>
            <p className={inter.className}>
            Desarrollador de Blockchain, Contribuidor DFH del Multi-Chain NFT Visor
            </p>
          </a>

          <a
            href="https://twitter.com/dxlantxch"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={styles.center}>
              Dylan Molina 
            </h2>
            <p className={styles.gradienttext}>Founding Engineer</p>
            <p className={inter.className}>
             Desarrollador de Blockchain, Buildspace N&W S1 Cohort
            </p>
          </a>
        </div>
        <div className={styles.footer}>
          <p>Mty, Nuevo León, México | Email: info@baro.capital</p>
          <p>Copyright © 2022 Baro Capital</p>
        </div>
      </main>
    </>
  )
}
