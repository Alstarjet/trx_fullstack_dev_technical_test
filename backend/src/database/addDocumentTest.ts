import database from "./connection"
const CreateDoc=async ()=>{
    const newUser = {
        name: 'John Doe',
        age: 35,
        email: 'john@example.com'
      }
    try{
        const db=database.getDB()
        const test=await db?.collection("test").insertOne(newUser)
        console.log(test+ "aqui esta")
    }
    catch(error){
        console.log(error)
    }
}
export default CreateDoc