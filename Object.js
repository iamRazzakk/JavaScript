const phone = {
  brand: "MI",
  Battery: 6000,
  Display: "emolate",
  Price: 20000,
  useStorage: (TotalStorage, CurrentStorage) => {
    console.log(TotalStorage - CurrentStorage);
  },
};
phone.useStorage(32,6)
