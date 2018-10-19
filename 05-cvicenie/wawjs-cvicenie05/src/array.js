// module API
module.exports = {
  countDefined,
  filterDefined,
  sort,
  reverse,
  // TODO: add others (all applicable from array)
};

function countDefined(arr){
    return filterDefined(arr).length;
}
function filterDefined(arr){
    return arr.filter(() => true);
}
function sort(arr, fn){
    return filterDefined(arr).sort(fn);
}
function reverse(arr){
    return [...arr].reverse();
}
