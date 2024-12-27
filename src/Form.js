import { useState } from "react";


function Form(props){

    const [product,setProduct]=useState(props.data || { name: "", price: "", category: "" })

    const [submitted,setSubmitted]=useState(false)

    let changeFormData=(event)=>{
     const {name,value} = event.target;
     setProduct({...product,[name]:value})
        
    }

    return(
        <div className="form-overlay">
            <form>
                <div className="form-group">
                    <label>Name:</label>
                    <input className="form-control mt-2"  value={product.name} type="text" name="name" placeholder="Enter Name"
                        onChange={changeFormData}/>
                        
                        {
                            submitted && !product.name && (<span className="text-danger">Product name required </span>)
                        }
                </div>

                <div className="form-group">
                    <label>Price:</label>
                    <input className="form-control mt-2" value={product.price} type="number" name="price" placeholder="Enter Price"
                        onChange={changeFormData}/>
                        {
                            submitted && !product.price && (<span className="text-danger">Product price required</span>)
                        }
                </div>
                
                <div className="form-group">
                    <label>Category:</label>
                    <select className="form-control" value={product.category} type="text" name="category" 
                        onChange={changeFormData}>
                        <option value=''></option>
                        <option value='mobiles'>Mobiles</option>
                        <option value='laptops'>Laptops</option>
                        <option value='tv'>TV's</option>
                    </select>
                    {
                        submitted && !product.category && (<span className="text-danger">Product category required</span>)
                    }
                    
                </div>

                <div>
                    <button className="btn btn-outline-secondary float-end" 
                        onClick={(e)=>{
                            
                            e.preventDefault();
                            setSubmitted(true);
                            if(product.name && product.price && product.category){
                                props.add(product);
                            }
                            
                        }}
                    >Send</button>
                    <button className="btn btn-outline-danger float-end"
                        onClick={(e)=>{
                            e.preventDefault();
                            props.close();
                        }}
                    >Cancel</button>
                </div>
            </form>

        </div>
    )
}
export default Form;