const allItem = document.querySelectorAll('.item');
console.log(`Number of categories:` ,allItem.length);


allItem.forEach(category => {
    console.log(
        `Category:`,
      category.firstElementChild.textContent,
      `Elements:`,
      category.lastElementChild.children.length,
    );
  });

//   const allItem = document.querySelectorAll('.item');
//   console.log(`Number of categories: ${allItem.length}`)
  
//   allItem.forEach(item => {
//       console.log(`Category: ${item.firstElementChild.textContent}`);
//       console.log(`Elements: ${item.lastElementChild.children.length}`)
//   });

