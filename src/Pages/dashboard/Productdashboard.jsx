// import React, { useState } from 'react'
// import './Productdashboard.css'
// import toast from 'react-hot-toast'
// import axios from 'axios'
// //import { ContextData } from '../../Context/useContext'
// import { Link } from 'react-router-dom'
// //import { useNavigate } from 'react-router-dom'*/


// const Productdashboard = () => {

//     const API_BASE_URL = "http://localhost:2233/api/v1";

//    // const {setMytoken} = ContextData()

//     //const navigate = useNavigate()

//     const [formData, setFormData] = useState({
//      title: "",
//     quantity: "",
//     description: "",
//     category: "",
//     price: "",
//     images: ""
//     })

//      const [productImages, setProductImages] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);

//     const handchange = (e) =>{
//      const {name, value} = e.target
//      setFormData({
//         ...formData,
//         [name] : value
//      })
//     }

//     const productfuncs = async() =>{
//        try{

//         const emptyfield = []

//         if(!formData.title || formData.title.trim() == ''){
//             emptyfield.push("title")
//         }

//         if(!formData.quantity || formData.quantity.trim() === ""){
//          emptyfield.push("sku")
//         }

//          if(!formData.description || formData.description.trim() === ""){
//          emptyfield.push("description")
//         }

//          if(!formData.category || formData.category.trim() === ""){
//          emptyfield.push("category")
//         }

//          if(!formData.price || formData.price.trim() === ""){
//          emptyfield.push("price")
//         }

//          if(!formData.images || formData.images.trim() === ""){
//          emptyfield.push("images")
//         }

//         if(emptyfield.length > 0){
//             emptyfield.forEach((item)=>{
//                 toast.error(`${item} cannot be empty`)
//             })

//             return
//         }


//         if (isLoading) return; // Prevent multiple submissions

//         setIsLoading(true); // Start loading

//         // 1. Create a FormData object to handle both text and files
//         const dataToSend = new FormData();
        
//         // Append all text fields
//         Object.keys(formData).forEach(key => {
//             dataToSend.append(key, formData[key]);
//         });
        
//         // Append all selected files
//         if (productImages) {
//             for (let i = 0; i < productImages.length; i++) {
//                 // The backend must expect a field named 'images' (or whatever you use here)
//                 dataToSend.append('images', productImages[i]); 
//             }
//         }

//         // 2. Get the authorization token
//         const token = sessionStorage.getItem("token"); // Assuming your token is stored here
//         if (!token) {
//             toast.error("Authentication required. Please log in again.");
//             setIsLoading(false);
//             // Optionally redirect to login
//             // navigate("/login");
//             return;
//         }
        
      
//             // 3. Make the API call
//             const response = await axios.post(
//                 `${API_BASE_URL}/dashboard/postproduct`, 
//                 dataToSend, 
//                 {
//                     headers: {
//                         // axios automatically sets 'Content-Type': 'multipart/form-data' boundary
//                         // when sending a FormData object, so we don't need to specify it.
//                         Authorization: `Bearer ${token}`, // Sending the JWT token
//                     },
                    
//                 }
//             );

//             if (response && response.status === 201) { // 201 Created is typical for a POST request
//                 // Assuming the backend returns a new token or relevant data
//                 // If the backend returns a token, update context (though usually not done on product post)
//                 // await setMytoken(response.data.token); 
                
//                 toast.success("Product published successfully! 🎉");
                
//                 // Clear the form
//                 setFormData({ title: "", quantity: "", description: "", category: "", price: "" });
//                 setProductImages(null); 
                
//                 // Optionally navigate somewhere else
//                 // navigate("/manage-products"); 
//             } else {
//                  // Handle unexpected successful response status
//                  toast.error(response.data?.message || "Product creation failed with unexpected status.");
//             }

      
//        /*const response = await axios.post("http://localhost:2233/api/v1/dashboard/postproduct", formData, {
//         headers: { "Content-Type": "application/json" }
//         })

//         console.log(response)
            
// if(response && response.status === 200 && response.data){

//   await setMytoken(response.data.token)

//   toast.success("register successfully")
//   //navigate("/Signin")
//     return;
// }*/

//        }catch(err){
//          if(err.response){
//                  console.log("Error response data:", err.response.data)
//                  console.log("Error response status:", err.response.status)
//                  console.log("Error response header:", err.response.headers)
         
//                  toast.error(` ${err.response.data.message} || ${err.message}`)
//                }else{
//                  console.log("error:", err.message)
//                  toast.error("error occurred")
//                }
//        }
//     }


//   return (
//     <>
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
//     <div className="container-fluid">
//         <a className="navbar-brand d-block d-md-none" href="#">Admin Panel</a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ms-auto">
//                 <li className="nav-item">
//                     <a className="nav-link" href="#"><i className="bi bi-bell-fill"></i></a>
//                 </li>
//                 <li className="nav-item dropdown">
//                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                         <i className="bi bi-person-circle"></i> Admin
//                     </a>
//                     <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
//                         <li><a className="dropdown-item" href="#">Profile</a></li>
//                         <li><hr className="dropdown-divider"/></li>
//                         <li><a className="dropdown-item" href="#">Logout</a></li>
//                     </ul>
//                 </li>
//             </ul>
//         </div>
//     </div>
// </nav>

// <div className="sidebar bg-light border-end p-3 d-none d-md-block">
//     <h5 className="py-2 text-primary">E-Commerce Admin</h5>
//     <ul className="nav flex-column">
//         <li className="nav-item">
//             <a className="nav-link text-dark" href="#">
//                 <i className="bi bi-speedometer2 me-2"></i> Dashboard
//             </a>
//         </li>
//         <li className="nav-item">
//             <a className="nav-link text-dark active" aria-current="page" href="#">
//                 <i className="bi bi-box-seam me-2"></i> Product Upload
//             </a>
//         </li>
//         <li className="nav-item">
//             <a className="nav-link text-dark" href="#">
//                 <i className="bi bi-list-check me-2"></i> Manage Orders
//             </a>
//         </li>
//         <li className="nav-item">
//             <a className="nav-link text-dark" href="#">
//                 <i className="bi bi-people me-2"></i> Customers
//             </a>
//         </li>
//         <li className="nav-item">
//             <a className="nav-link text-dark" href="#">
//                 <i className="bi bi-bar-chart me-2"></i> Reports
//             </a>
//         </li>
//     </ul>
// </div>

// <div className="main-content">
//     <div className="container-fluid p-4">
        
//         <h1 className="mb-4">
//             <i className="bi bi-box-seam text-primary me-2"></i> Product Upload
//         </h1>
//         <p className="lead text-muted">Use this form to add a new product to your inventory.</p>

//         <div className="card shadow-lg mb-5">
//             <div className="card-header bg-primary text-white">
//                 <h5 className="mb-0">Product Details Form</h5>
//             </div>
//             <div className="card-body p-4">
//                 <form method='post'>
//                     <div className="row g-3">
                        
//                         <div className="col-md-6">
//                             <label htmlFor="productName" className="form-label">Product Name <span className="text-danger">*</span></label>
//                             <input type="text" 
//                             className="form-control" 
//                             name="title" 
//                             id="productName" required placeholder="e.g., Ultra-Comfort Gaming Chair"
//                             value={formData.title}
//                             onChange={handchange}
//                             />
//                         </div>
                        
//                        {/*<div className="col-md-6">
//                             <label htmlFor="productSKU" className="form-label">SKU</label>
//                             <input type="text" 
//                             className="form-control" 
//                             id="productSKU" 
//                             name="sku" 
//                             placeholder="e.g., GC-001A-BLK"
//                             value={formData.sku}
//                             onChange={handchange}
//                             />
//                         </div>*/}

//                        <div className="col-md-6">
//                             <label htmlFor="productPrice" className="form-label">Price ($) <span className="text-danger">*</span></label>
//                             <div className="input-group">
//                                 <span className="input-group-text"><i className="bi bi-currency-dollar"></i></span>
//                                 <input type="number" 
//                                 className="form-control" 
//                                 name="price" id="productPrice" required min="0.01" step="0.01"
//                                 placeholder="99.99"
//                                 value={formData.price}
//                                 onChange={handchange}
//                                 />
                                
//                             </div>
//                         </div>
                        
//                         <div className="col-md-6">
//                             <label htmlFor="productStock" className="form-label">Stock Quantity <span className="text-danger">*</span></label>
//                             <input type="number" 
//                             className="form-control" 
//                             name="quantity" id="productStock" 
//                             required min="0" 
//                             placeholder="100"
//                             value={formData.quantity}
//                             onChange={handchange}
//                             />
//                         </div>

//                         <div className="col-12">
//                             <label htmlFor="productCategory" className="form-label">Category <span className="text-danger">*</span></label>
//                             <select className="form-select" 
//                             name="category" id="productCategory" required value={formData.category}
//                             onChange={handchange}>
//                                 <option selected disabled value="">Choose...</option>
//                                 <option value="electronics">Electronics</option>
//                                 <option value="clothing">Clothing</option>
//                                 <option value="home">Home & Kitchen</option>
//                                 <option value="sports">Sports & Outdoors</option>
//                             </select>
//                         </div>
                        
//                         <div className="col-12">
//                             <label htmlFor="productDescription" className="form-label">Description <span className="text-danger">*</span></label>
//                             <textarea className="form-control" 
//                             name="description" 
//                             rows="4" required 
//                             placeholder="Provide a detailed description of the product features and specifications..."
//                             value={formData.description}
//                             onChange={handchange}
//                             ></textarea>
//                         </div>

//                         <div className="col-12">
//                             <label htmlFor="productImage" className="form-label">Product Image (Max 5MB) <span className="text-danger">*</span></label>
//                             <input className="form-control" 
//                             type="file" name="images"
//                             id="productImage" 
//                             multiple accept="image/*" required
//                             value={formData.images}
//                             onChange={handchange}
//                             />
//                             <div className="form-text">Upload up to 3 images (JPEG or PNG).</div>
//                         </div>
                        
//                         <div className="col-12">
//                             <div className="form-check">
//                                 <input className="form-check-input" type="checkbox" id="productVisibility"/>
//                                 <label className="form-check-label" htmlFor="productVisibility">
//                                     Product is immediately visible on the store
//                                 </label>
//                             </div>
//                         </div>

//                         <div className="col-12 pt-3 my-btn">
//                             <div onClick={productfuncs}  className="btn btn-success btn-lg" disabled={isLoading}>
//                                  Publish Product
//                             </div>
//                             <div className="btn btn-outline-secondary btn-lg ms-2" ><Link to='/'>cancel</Link></div>
//                         </div>

//                     </div>
//                 </form>
//             </div>
//             <div className="card-footer text-muted">
//                 Fields marked with <span className="text-danger">*</span> are required.
//             </div>
//         </div>

//     </div>
// </div>
//     </>
//   )
// }

// export default Productdashboard


import React, { useState } from "react";
import "./Productdashboard.css";
import toast from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";

const Productdashboard = () => {
  const API_BASE_URL = "http://localhost:2233/api/v1";

  const [formData, setFormData] = useState({
    title: "",
    quantity: "",
    description: "",
    category: "",
    price: "",
  });

  const [productImages, setProductImages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // handle text input change
  const handchange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // handle file input change
  const handleFileChange = (e) => {
    setProductImages(e.target.files); // this gives you FileList
  };

  const productfuncs = async () => {
    try {
      const emptyfield = [];

      if (!formData.title.trim()) emptyfield.push("title");
      if (!formData.quantity.trim()) emptyfield.push("quantity");
      if (!formData.description.trim()) emptyfield.push("description");
      if (!formData.category.trim()) emptyfield.push("category");
      if (!formData.price.trim()) emptyfield.push("price");
      if (!productImages || productImages.length === 0) emptyfield.push("images");

      if (emptyfield.length > 0) {
        emptyfield.forEach((item) => {
          toast.error(`${item} cannot be empty`);
        });
        return;
      }

      if (isLoading) return;
      setIsLoading(true);

      const dataToSend = new FormData();

      Object.keys(formData).forEach((key) => {
        dataToSend.append(key, formData[key]);
      });

      // Append each image file
      for (let i = 0; i < productImages.length; i++) {
        dataToSend.append("images", productImages[i]);
      }

      const token = sessionStorage.getItem("token");
      if (!token) {
        toast.error("Authentication required. Please log in again.");
        setIsLoading(false);
        return;
      }

      const response = await axios.post(
        `${API_BASE_URL}/dashboard/postproduct`,
        dataToSend,
        {
          headers: {
            
            Authorization: console.log(token) `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      if (response.status === 201 || response.status === 200) {
        toast.success("Product published successfully! 🎉");
        setFormData({
          title: "",
          quantity: "",
          description: "",
          category: "",
          price: "",
        });
        setProductImages(null);
        document.getElementById("productImage").value = ""; // clear file input
      } else {
        toast.error(response.data?.message || "Unexpected error occurred");
      }
    } catch (err) {
      console.log("Error:", err.response?.data || err.message);
      toast.error(err.response?.data?.message || "Error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand d-block d-md-none" href="#">
            Admin Panel
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-bell-fill"></i>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person-circle"></i> Admin
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="sidebar bg-light border-end p-3 d-none d-md-block">
        <h5 className="py-2 text-primary">E-Commerce Admin</h5>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">
              <i className="bi bi-speedometer2 me-2"></i> Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-dark active"
              aria-current="page"
              href="#"
            >
              <i className="bi bi-box-seam me-2"></i> Product Upload
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">
              <i className="bi bi-list-check me-2"></i> Manage Orders
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">
              <i className="bi bi-people me-2"></i> Customers
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">
              <i className="bi bi-bar-chart me-2"></i> Reports
            </a>
          </li>
        </ul>
      </div>

      <div className="main-content">
        <div className="container-fluid p-4">
          <h1 className="mb-4">
            <i className="bi bi-box-seam text-primary me-2"></i> Product Upload
          </h1>
          <p className="lead text-muted">
            Use this form to add a new product to your inventory.
          </p>

          <div className="card shadow-lg mb-5">
            <div className="card-header bg-primary text-white">
              <h5 className="mb-0">Product Details Form</h5>
            </div>
            <div className="card-body p-4">
              <form method="post">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="productName" className="form-label">
                      Product Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      id="productName"
                      required
                      placeholder="e.g., Ultra-Comfort Gaming Chair"
                      value={formData.title}
                      onChange={handchange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="productPrice" className="form-label">
                      Price ($) <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <i className="bi bi-currency-dollar"></i>
                      </span>
                      <input
                        type="number"
                        className="form-control"
                        name="price"
                        id="productPrice"
                        required
                        min="0.01"
                        step="0.01"
                        placeholder="99.99"
                        value={formData.price}
                        onChange={handchange}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="productStock" className="form-label">
                      Stock Quantity <span className="text-danger">*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name="quantity"
                      id="productStock"
                      required
                      min="0"
                      placeholder="100"
                      value={formData.quantity}
                      onChange={handchange}
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="productCategory" className="form-label">
                      Category <span className="text-danger">*</span>
                    </label>
                    <select
                      className="form-select"
                      name="category"
                      id="productCategory"
                      required
                      value={formData.category}
                      onChange={handchange}
                    >
                      <option value="">Choose...</option>
                      <option value="electronics">Electronics</option>
                      <option value="clothing">Clothing</option>
                      <option value="home">Home & Kitchen</option>
                      <option value="sports">Sports & Outdoors</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label htmlFor="productDescription" className="form-label">
                      Description <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className="form-control"
                      name="description"
                      rows="4"
                      required
                      placeholder="Provide a detailed description..."
                      value={formData.description}
                      onChange={handchange}
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <label htmlFor="productImage" className="form-label">
                      Product Image (Max 5MB){" "}
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="productImage"
                      multiple
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                    <div className="form-text">
                      Upload up to 3 images (JPEG or PNG).
                    </div>
                  </div>

                  <div className="col-12 pt-3 my-btn">
                    <button
                      type="button"
                      onClick={productfuncs}
                      className="btn btn-success btn-lg"
                      disabled={isLoading}
                    >
                      {isLoading ? "Publishing..." : "Publish Product"}
                    </button>
                    <Link to="/" className="btn btn-outline-secondary btn-lg ms-2">
                      Cancel
                    </Link>
                  </div>
                </div>
              </form>
            </div>
            <div className="card-footer text-muted">
              Fields marked with <span className="text-danger">*</span> are
              required.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productdashboard;
