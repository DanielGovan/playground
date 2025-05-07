const numbers = [42, 42, 42, 42, 42];

numbers.forEach((n) => {
  const worker = new Worker(new URL("./worker.ts", import.meta.url).href, {
    type: "module",
  });
  // 1a. send data to worker to start
  worker.postMessage({ n });

  // 2b. Receive completed work from worker
  worker.onmessage = (e) => {
    console.log(`Main Thread (n=${n}):`, e.data);
    worker.terminate();
  };
});

// const worker = new Worker(new URL("./worker.ts", import.meta.url).href, {
//   type: "module",
// });
// // 1a. send data to worker to start
// worker.postMessage({ n: 23 });

// worker.onmessage = (e) => {
//   console.log("Main Thread:", e.data);
// };
