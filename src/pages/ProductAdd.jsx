import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import PStockAppTextInput from "../utilities/PStockAppTextInput";
import ProductService from "../services/ProductService";


export default function ProductAdd() {
  const initialValues = { productName: "", unitPrice: 10 };

  const schema = Yup.object({
    productName: Yup.string().required("Ürün adı zorunlu"),
    unitPrice: Yup.number().required("Ürün fiyatı zorunlu"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        let productService = new ProductService();
        productService.add(values).then((data) => {});
      }}
    >
      <Form className="ui form">
        <PStockAppTextInput name="productName" placeholder="Ürün Adı" />
        <PStockAppTextInput name="unitPrice" placeholder="Ürün fiyatı" />

        <Button color="green" type="submit">
          Ekle
        </Button>
      </Form>
    </Formik>
  );
}
