function SortProduct(sort: string) {
  let sortProduct: string = "";

  switch (sort) {
    case "price_asc":
      sortProduct = "price_asc";
      break;
    case "price_desc":
      sortProduct = "price_desc";
      break;
    case "name_asc":
      sortProduct = "name_asc";
      break;
    case "name_desc":
      sortProduct = "name_desc";
      break;
    case "created_at_asc":
      sortProduct = "created_at_asc";
      break;
    case "created_at_desc":
      sortProduct = "created_at_desc";
      break;
    default:
      sortProduct = "";
      break;
  }
  return sortProduct;
}

export default SortProduct;
