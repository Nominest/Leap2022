//
async function prepare_breakfast() {
  let coffee_promise = new Promise((resolve, reject) =>
    resolve("coffee ready")
  );
  let egg_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("finished frying egg");
    }, 1000);
  });
  let fryBacon = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("finished frying bacon");
    });
  }, 2000);

  let toastBread = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("finished toast");
    }, 3000);
  });
  let jam = new Promise((resolve, reject) => {
    resolve("Jam on bread");
  });
  let combined_promise = Promise.all([
    coffee_promise,
    egg_promise,
    fryBacon,
    toastBread,
    jam,
  ]);
  return combined_promise;
}
// let breakf = prepare_breakfast();
// breakf.then((breakf) => {
//   console.log(breakf);
// });

async function morning() {
  let result = await prepare_breakfast();
  console.log(result);
}
morning();
