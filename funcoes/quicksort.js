function quicksort(array) {

    if (array.length <= 1) {
      return array;
    } else {
       
      let arrayEsq = [];
      let arrayDir = [];
      let novoArray = [];
     
      let pivot = array.pop();

      

      for (let i = 0; i < array.length; i++) {
        if (array[i] <= pivot) {
            arrayEsq.push(array[i]);
        } else {
            arrayDir.push(array[i]);
        }
      }
     
      return novoArray.concat(
        quicksort(arrayEsq),
        pivot,
        quicksort(arrayDir)
      );
    }
    

  }

module.exports = quicksort;