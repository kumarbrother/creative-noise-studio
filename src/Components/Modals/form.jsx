import { useState } from "react";

export default function AddCategoryModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    displayOrder: 1,
    status: "Active",
    featured: false,
    image: null,
    preview: null,
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "name") {
      const slug = value
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");

      setFormData((prev) => ({
        ...prev,
        name: value,
        slug,
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
        preview: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">

        <div className="modal-header">
          <h2>Add New Category</h2>
          <button onClick={onClose}>×</button>
        </div>

        <form onSubmit={handleSubmit} className="form">

          {/* Image */}
          <div className="form-group">
            <label>Category Image</label>
            <div className="image-upload">
              {formData.preview && (
                <img src={formData.preview} alt="preview" />
              )}
              <input type="file" onChange={handleImageUpload} />
            </div>
            <small>Recommended: 800x800px, JPG or PNG</small>
          </div>

          {/* Name */}
          <div className="form-group">
            <label>Category Name *</label>
            <input
              type="text"
              name="name"
              placeholder="Enter category name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Slug */}
          <div className="form-group">
            <label>URL Slug *</label>
            <input
              type="text"
              name="slug"
              placeholder="category-slug"
              value={formData.slug}
              onChange={handleChange}
              required
            />
            <small>Used in URLs. Auto-generated from name.</small>
          </div>

          {/* Description */}
          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              placeholder="Enter category description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          {/* Row */}
          <div className="form-row">
            <div className="form-group">
              <label>Display Order *</label>
              <input
                type="number"
                name="displayOrder"
                value={formData.displayOrder}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Status *</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>

          {/* Featured */}
          <div className="form-featured">
            <div>
              <p>Featured Category</p>
              <small>Display this category prominently on homepage</small>
            </div>

            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
            />
          </div>

          {/* Buttons */}
          <div className="form-actions">
            <button type="button" onClick={onClose} className="btn-outline">
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Add Category
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}