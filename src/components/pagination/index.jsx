import { styled } from "@mui/system";
import { Box, Pagination } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { data } from "../../data";
import { ProductAPI } from "../../api/ProductAPI";
import AuthAPI from "../../api/AuthAPI";
const pageSize = 6;

const PaginationContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "20px 0px",
}));

export default function AppPagination({ setProducts }) {
  const [pagination, setPagination] = useState({
    count: 0, // number of products each page, like pageSize
    from: 0, // start index
    to: pageSize, // end index, init value is pageSize
  });
  const totalRef = useRef(0);
  const getAllProducts = async () => {
    const response = await ProductAPI.allProducts();
    if (response && response.code === 1000) {
      totalRef.current = response.data.length;
    }
  };

  const handleGetProducts = async (from) => {
    const response = await ProductAPI.getProductsFromTo(from, pageSize);
    if (response && response.code === 1000) {
      setPagination({ ...pagination, count: totalRef.current });
      setProducts(response.data ? response.data : []);
    }
  };
  useEffect(() => {
    getAllProducts();
    handleGetProducts(pagination.from, pagination.to);
    // setPagination({ ...pagination, count: data.length });
    // setProducts(data.slice(pagination.from, pagination.to));
    // ProductService.getProducts(pagination.from, pagination.to).then((p) => {
    //   setPagination({ ...pagination, count: p.total });
    //   setProducts(p.data);
    // });
    // service.getData({ from: pagination.from, to: pagination.to }).then((response) => {
    //     setPagination({ ...pagination, count: response.count });
    //     setProducts(response.data);
    // });
    //
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination.from, pagination.to]);

  const handlePageChange = (event, page) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;

    setPagination({ ...pagination, from: from, to: to });
  };

  return (
    <PaginationContainer>
      <Pagination
        count={Math.ceil(pagination.count / pageSize)}
        color="primary"
        onChange={handlePageChange}
      />
    </PaginationContainer>
  );
}
