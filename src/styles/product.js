import { makeStyles } from "@material-ui/core/styles";

const ProductStyle = makeStyles((theme) => ({
  productName: {
    color: "#494848",
    padding: "5px 0",
    fontSize: 15,
    fontWeight: 700,
  },
  tag: {},
  price: {
    font: theme.typography.subtitle1,
  },
  ratings: {},
  buyNow: {},
}));

export default ProductStyle;
