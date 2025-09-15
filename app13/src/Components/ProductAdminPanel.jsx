import { Component } from "react";

export default class ProductAdminPanel extends Component {
  state = {
    product: {
      name: "",
      category: "",
      price: "",
      discount: "",
      stock: "",
      image: "",
    },
    products: JSON.parse(localStorage.getItem("products")) || [],
    editIndex: null,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      product: { ...this.state.product, [name]: value },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let updatedProducts = [...this.state.products];

    if (this.state.editIndex === null) {
      updatedProducts.push({ ...this.state.product, id: Date.now() });
    } else {
      updatedProducts[this.state.editIndex] = {
        ...this.state.product,
        id: updatedProducts[this.state.editIndex].id,
      };
    }

    this.setState(
      {
        products: updatedProducts,
        product: {
          name: "",
          category: "",
          price: "",
          discount: "",
          stock: "",
          image: "",
        },
        editIndex: null,
      },
      () => localStorage.setItem("products", JSON.stringify(this.state.products))
    );
  };

  handleEdit = (index) => {
    this.setState({
      product: { ...this.state.products[index] },
      editIndex: index,
    });
  };

  handleDelete = (index) => {
    const updatedProducts = this.state.products.filter((_, i) => i !== index);
    this.setState({ products: updatedProducts }, () =>
      localStorage.setItem("products", JSON.stringify(updatedProducts))
    );
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Product Admin Panel</h1>
        <form onSubmit={this.handleSubmit} style={{ marginBottom: "20px" }}>
          <input name="name" placeholder="Name" value={this.state.product.name} onChange={this.handleChange} required />
          <input name="category" placeholder="Category" value={this.state.product.category} onChange={this.handleChange} required />
          <input name="price" type="number" placeholder="Price" value={this.state.product.price} onChange={this.handleChange} required />
          <input name="discount" type="number" placeholder="Discount %" value={this.state.product.discount} onChange={this.handleChange} />
          <input name="stock" type="number" placeholder="Stock" value={this.state.product.stock} onChange={this.handleChange} required />
          <input name="image" placeholder="Image URL" value={this.state.product.image} onChange={this.handleChange} />
          <button type="submit">{this.state.editIndex === null ? "Add Product" : "Update Product"}</button>
        </form>

        <table border="1" cellPadding="5">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Discount</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((p, index) => (
              <tr key={p.id}>
                <td>
                  {p.image ? <img src={p.image} alt="" width="50" /> : "No image"}
                </td>
                <td>{p.name}</td>
                <td>{p.category}</td>
                <td>₹{p.price}</td>
                <td>{p.discount}%</td>
                <td>{p.stock}</td>
                <td>
                  <button onClick={() => this.handleEdit(index)}>Edit</button>
                  <button onClick={() => this.handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
