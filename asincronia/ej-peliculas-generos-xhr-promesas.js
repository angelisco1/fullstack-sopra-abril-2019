function getDato(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n % 2 === 0) {
        // Va a pasar por el then
        resolve("Es un número válido");
      } else if (n > 100) {
        resolve("También es válido");
      } else {
        // Va a pasar por el catch
        reject("No es un número par")
      }
    }, 2000);
  });
}

getDato(301)
  .then(msg => console.log('MSG: ', msg))
  .catch(err => console.log('Err: ', err));
