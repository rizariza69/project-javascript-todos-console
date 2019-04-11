"use strict"

const myTodos = [{
    id: 1,
    text: 'Write the letter',
    tags: ['important', 'writing'],
    completed: true,
    favorite: true
  },
  {
    id: 2,
    text: 'Eat some lunch',
    tags: ['food'],
  },
  {
    id: 3,
    text: 'Run around the city',
    favorite: true
  }, {
    id: 4,
    text: 'Trip To Rome',
    tags: ['important'],
    favorite: true,
    completed: false


  }
]



const showTodos = todo => {
  todo.forEach(item => {

    let itemString = ''

    itemString += `${item.id} `
    itemString += item.completed ? `☑` : `☐` // Example: ☑
    itemString += ` ${item.text} ` // Example: The todo text
    itemString += `${item.tags} `
    itemString += item.favorite ? `★` : `` // Example: ★
    // ☐ The todo text ★
    console.log(itemString);
  })

}

const createTodo = (id, text, tags, favorite) => {
  const newTodo = {
    id: id,
    text: `${text}`,
    tags: `${[tags]}`,
    favorite: favorite
  }
  myTodos.push(newTodo)
  console.log('create todos success');
  showTodos(myTodos)
}

//delete from below with pop
const deleteTodo = () => {
  myTodos.pop()
  showTodos(myTodos)
  console.log('delete todo success');
}

const deleteById = (id) => {
  myTodos.forEach((todo, index) => {
    if (todo.id === id) {
      myTodos.splice(index, 1)
      showTodos(myTodos)
      console.log('Delete by ID success');
    }
  })
}


// const findById = (todo, id) => {
//   for (let index = 0; index < todo.length; index++) {
//     const newTodo = todo[index];
//     if (newTodo.id === id) {
//       return newTodo
//     }
//   }
// }

const searchTodosText = (data, searchText) => {
  let newTodos = []

  for (let index = 0; index < data.length; index++) {
    const item = data[index]

    const lowerCasedItemText = item.text.toLowerCase()
    const lowerCasedSearchText = searchText.toLowerCase()

    if (lowerCasedItemText.includes(lowerCasedSearchText)) {
      newTodos.push(item)
    }
  }

  return newTodos
}


// TEST with .find , .filter
const findOneId = myTodos.find(todo => todo.id === 2)

const filterShowTodos = myTodos.filter(item => item.favorite)

const noArray = myTodos.filter(item => item.tags)


showTodos(myTodos)

createTodo(5, `Graduation Day`, ['Coding'], true)

deleteTodo()

deleteById(2)

const foundTodos = searchTodosText(myTodos, 'the')
showTodos(foundTodos)

// const findOne = findById(myTodos, 2)
// showTodos(findOne)



// console.log(filterShowTodos);
// console.log(noArray);
// console.log(findOneId);