let CP = 6_000_000;
let Hymn = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (CP > 1_000_000) {
      resolve("success");
    } else {
      reject("not a success");
    }
  }, 2000);
});

console.log(Hymn);

Hymn.then((resp) => {
  console.log(resp);
})
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finished");
  });
