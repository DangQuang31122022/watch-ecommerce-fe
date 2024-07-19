// c

// onst useBasket = () => {
//   const { basket } = useSelector((state) => ({ basket: state.basket }));
//   const dispatch = useDispatch();

//   const isItemOnBasket = (id) => !!basket.find((item) => item.id === id);

//   const addToBasket = (product) => {
//     if (isItemOnBasket(product.id)) {
//       dispatch(removeFromBasket(product.id));
//       displayActionMessage("Item removed from basket", "info");
//     } else {
//       dispatch(dispatchAddToBasket(product));
//       displayActionMessage("Item added to basket", "success");
//     }
//   };

//   return { basket, isItemOnBasket, addToBasket };
// };

// export default useBasket;
