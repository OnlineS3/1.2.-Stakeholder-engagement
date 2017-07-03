export const exampleAction = (parameter) => {
  return {
    type: 'EXAMPLE_TYPE',
    parameter
  }
}
export const addCategory = (title, description) => {
  console.log("addCategoryAction")
  return {
    type: 'addCategory',
    title: title,
    description: description
  }
}
