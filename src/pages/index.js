import React from "react"
import Layout from "../components/UI/Layout"
import ProductHero from "../components/ProductHero"
import ProductValues from "../components/ProductValues"
import ProductCategories from "../components/ProductCategories"
import ProductHowItWorks from "../components/ProductHowItWorks"
import ProductCTA from "../components/ProductCTA"
import ProductSmokingHero from "../components/ProductSmokingHero"

export default function Home() {
  return (
    <Layout>
      <ProductHero dynamic />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
    </Layout>
  )
}
