
const createTodo = async(todo)=>{
      let options = {
            method: 'POST',
            headers: {
              'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(todo)
      }
      
      let toFetch = await fetch('https://jsonplaceholder.typicode.com/posts', options)
      let response = await toFetch.json()
      return response
}

const getTodo = async(id)=>{
  let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
  let r = await response.json()
  return r
}

const mainfunc = async()=>{
      let todo = {
        userId: 10,
        id: 2,
        title: "Sourav Ukil",
        body: "baalaaa"
    }
      let toTodo = await createTodo(todo)
      console.log(toTodo)
      console.log(await getTodo(6))
}

mainfunc()


