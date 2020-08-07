import React from "react";
import { Grid, Box } from "@material-ui/core";
import BannerMiddle from "../../assets/images/home/banner.jpeg";
import BannerMiddleA from "../../assets/images/home/banner_5.jpeg";
import BannerMiddleB from "../../assets/images/home/banner_2.jpeg";
import BannerMiddleC from "../../assets/images/home/banner_3.jpeg";
import XYAxisSpace from "../xyAxisSpace";
import ProductCard from "../../components/productCard";

export default function LatestProducts() {
  const products = [
    {
      name: "Women Printed Cotton Blend A-line Kurta  (Pink)",
      price: "395",
      image: BannerMiddle,
      rating: 3,
    },
    {
      name: "Women Solid Poly Crepe Straight Kurta  (Black)",
      price: "299",
      image: BannerMiddleA,
      rating: 4.5,
    },
    {
      name: "Janakdulari Creation Women Printed A-line Kurta",
      price: "546",
      image: BannerMiddleB,
      rating: 5,
    },
    {
      name: "Women Striped Cotton Blend Frontslit Kurta  (Pink)",
      price: "876",
      image: BannerMiddleC,
      rating: 4,
    },
  ];
  return (
    <Box style={{ width: 1024, margin: "10px auto" }}>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={3} key={product.name}>
            <ProductCard product={product} />
          </Grid>
        ))}
        <Grid item xs={12}>
          <XYAxisSpace isXAxis={false} />
        </Grid>
      </Grid>
    </Box>
  );
}
