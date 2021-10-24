import Head from 'next/head'
import Styles from '../styles/Home.module.css'
import Link from 'next/link'

const products = [ { name:"bag" }, { name:"shoes" }, { name:"socks" } ];
const title = "Top";

export default function Home() {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`${products[0].name}のページ`} />
        <meta property="og:title" content={products[0].name} />
        <meta property="og:description" content={`${products[0].name}のページ`} />
      </Head>
      <ul>
        { products.map((product) => {
          return (
            <li key={product.name}>
              <Link href={`/products/${product.name}`} >
                <a>{product.name}</a>
              </Link>
            </li>
          );
        })}
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
      <h1>Hello Next.js YEAAAAH</h1>
    </div>

  )
}
