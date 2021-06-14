import React from "react"
import ProductHero from "../components/ProductHero"
import ProductValues from "../components/ProductValues"
import ProductCategories from "../components/ProductCategories"
import ProductHowItWorks from "../components/ProductHowItWorks"
import ProductCTA from "../components/ProductCTA"
import ProductSmokingHero from "../components/ProductSmokingHero"

export default function Home() {
  return (
    <>
      <ProductHero dynamic />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
    </>
  )
}
