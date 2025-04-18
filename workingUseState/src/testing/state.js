const React = (function () {
  let state;
  function useState(initVal) {
    state = state || initVal;

    function setState(newVal) {
      state = newVal;
    }

    return [state, setState];
  }

  function render(component) {
    const a = component();
    a.render();
    return a;
  }

  return { useState, render };
})();

function wrapper() {
  let [num, setNum] = React.useState(1);
  return {
    render: () => {
      console.log(`Render with value ${num}`);
    },
    click: () => {
      setNum(num + 1);
    },
  };
}

let rendered = React.render(wrapper);

rendered.click();
rendered = React.render(wrapper);
rendered.click();
rendered = React.render(wrapper);

// function add() {
//   let num = 1;
//   return (newNum) => {
//     num = num + newNum;
//     return num;
//   };
// }

// let addNum = add();

// console.log(addNum(2));
// console.log(addNum(2));
// console.log(addNum(2));
