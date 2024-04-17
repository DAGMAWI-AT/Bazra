import React, { useState } from "react";
import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";

function Uplodcar() {
  const carCategory = ["LadaVesta", "Lada4x4", "LadaCross"];
  const [selectedCarCategory, setSelectedCarCategory] = useState(
    carCategory[0]
  );
  const [uploadCategory, setUploadCategory] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  const handleChangeSelectedValue = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "other") {
      setUploadCategory(true);
      setSelectedCarCategory("");
    } else {
      setUploadCategory(false);
      setSelectedCarCategory(selectedValue);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

  const handleCarSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const category = form.category.value;
    const engine = form.engine.value;
    const colors = form.colors.value;
    const fuel_consumption = form.fuel_consumption.value;
    const model = form.model.value;
    const description = form.description.value;
    const price = form.price.value;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("engine", engine);
    formData.append("colors", colors);
    formData.append("fuel_consumption", fuel_consumption);
    formData.append("model", model);
    formData.append("description", description);
    formData.append("price", price);
    if (imageFile) {
      formData.append("image", imageFile);
    }

    fetch("http://localhost:8000/addcars", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Car Upload Successfully");
        form.reset();
        setImageFile(null); // Reset image file state after successful upload
      })
      .catch((error) => {
        console.error("Error uploading car:", error);
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold text-center" style={{ color: "#2d2e2e" }}>
        Upload cars
      </h2>

      <form onSubmit={handleCarSubmit} className="bg-white shadow-md rounded-md p-8">
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="name" value="Car name" />
            </div>
            <TextInput id="name" type="text" placeholder="name of car" sizing="lg" required />
          </div>

          {uploadCategory ? (
            <div className="lg:w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="category" value="Car category" />
              </div>
              <TextInput
                id="category"
                name="category"
                type="text"
                placeholder="Enter new category"
                sizing="lg"
                value={selectedCarCategory}
                onChange={(e) => setSelectedCarCategory(e.target.value)}
              />
            </div>
          ) : (
            <div className="lg:w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="category" value="Car category" />
              </div>
              <Select
                sizing="lg"
                id="category"
                name="category"
                className="w-full rounded"
                value={selectedCarCategory}
                onChange={handleChangeSelectedValue}
              >
                {carCategory.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
                <option value="other">Other</option>
              </Select>
            </div>
          )}
        </div>
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="engine" value="Car engine" />
            </div>
            <TextInput id="engine" type="text" placeholder="name of engine" sizing="lg" required />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="colors" value="Car color" />
            </div>
            <TextInput id="colors" type="text" placeholder="color of car" sizing="lg" required />
          </div>
         
        </div>
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="model" value="Car Model" />
            </div>
            <TextInput id="model" type="text" placeholder="name of model" sizing="lg" required />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="fuel_consumption" value="Car fuel consumption" />
            </div>
            <TextInput id="fuel_consumption" type="text" placeholder="fuel consumption of car" sizing="lg" required />
          </div>
         
        </div>
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="price" value="Car price" />
            </div>
            <TextInput id="price" type="text" placeholder="price of car" sizing="lg" required />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="image" value="Car image" />
            </div>
            <input
              type='file'
              id='image'
              accept='image/*'
              onChange={handleImageChange}
              className='border border-blue-200 rounded-md p-2 w-full text-black'
            />
          
          </div>
        </div>

        <div className="mb-2 block">
          <Label htmlFor="description" value="Car description" className="text-bold text-black" />
        </div>
        <Textarea
          className="w-full"
          id="description"
          type="text"
          placeholder="Write description of car..."
          required
          rows={6}
        />
        <Button
          type="submit"
          className="mt-5"
          style={{ color: "#11224893", background: "#11224893" }}
        >
          Upload Car
        </Button>
      </form>
    </div>
  );
}

export default Uplodcar;
