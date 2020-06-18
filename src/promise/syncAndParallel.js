(async () => {
  const details = [1, 2, 3, 4, 5, 6];

  const base = [];
  for (const detail of details) {
    console.log(detail)
    base.push(await new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('cost %s second', detail)
        resolve(detail);
      }, 1000 * detail);
    }));
  }

  const baseParallel = await Promise.all(details.map(async detail => {
    console.log(detail)
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('cost %s second forEach', detail)
        resolve(detail);
      }, 1000 * detail);
    });
  }))

  // console.log(base)
  console.log(baseParallel)

  // const end = new Date().getTime()

  // const totalCost = end - begin;

  // console.log(end);
  // console.log(totalCost);
})();


// Parallel

// const base = await Promise.all(details.map(async detail => await detail.getTB_skYarnList()));