const request = new Promise((resolve, reject) => {
  const isSuccess = true;
  if (isSuccess) {
    resolve("Data");
  } else {
    reject("Error");
  }
});

request.then((res) => {
  console.log(res);
});
