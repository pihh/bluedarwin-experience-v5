export default function wait(ms = 1000) {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, ms);
  });
}
