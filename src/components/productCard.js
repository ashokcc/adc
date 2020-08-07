import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import ProductStyles from "../styles/product";
import XYAxisSpace from "./xyAxisSpace";

const ProductCard = ({ product }) => {
  const classes = ProductStyles();
  return (
    <Box style={{ margin: "10px 0px" }}>
      <img src={product.image} alt={product.name} height="350" />
      <Typography variant="h5" className={classes.productName}>
        {product.name}
      </Typography>
      <Typography> &#8377; {product.price}</Typography>
      <Rating
        name="half-rating-read"
        defaultValue={product.rating}
        precision={0.5}
        readOnly
      />
      <XYAxisSpace isXAxis={false} />
      <Button variant="outlined">Shop Now</Button>
    </Box>
  );
};
export default ProductCard;
