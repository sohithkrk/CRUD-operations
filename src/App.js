
import Table from "./Table"

import { getData, deleteData, postData, putData } from "./api"
import { useEffect, useState } from "react"


 import Form from "./Form"
function App(){
  const [products,setProducts]=useState([])
  const [openForm,setOpenForm]=useState(false);
  const [initialForm,setForm]=useState({
    name:'',price:'',category:''
  })
  const [edit,setEdit]=useState(false)

  

  useEffect(
  ()=>{

    getProducts()
  },[]
  )

  let getProducts=async ()=>{
    let res= await getData();
    setProducts(res.data)
  }

  let deleteProduct=async (id)=>{
    await deleteData(id);
    getProducts()
    
  }
  let addProduct=async (product)=>{

    let newId=products.length > 0 ?Math.max(...products.map((p)=>parseInt(p.id)))+1:1;
    let data={
      id:newId.toString(),
      name:product.name,
      price:product.price,
      category:product.category
    }

    if(edit)
      await putData(product.id,data);
    else
      await postData(data);
    getProducts();
    setOpenForm(false)
  }
  let editProduct=async (data)=>{
    setForm(data);
    setOpenForm(true);
    setEdit(true)
  }



  let showForm=()=>{
    setOpenForm(true);
    setForm(false)
  }
  let closeForm=()=>{
    setOpenForm(false)
  }

  return ( 
          <div className="wrapper m-5 w-50">
            <h1 className="text-primary">CRUD Operations</h1>
            <button className="btn btn-primary" 
              onClick={()=>showForm()}
            >Add Product</button> 
            
            <Table products={products} delete={deleteProduct} edit={editProduct}></Table>
            {
              openForm && <Form close={closeForm} data={initialForm} add={addProduct} ></Form>
            }

          </div>
  )
}

export default App