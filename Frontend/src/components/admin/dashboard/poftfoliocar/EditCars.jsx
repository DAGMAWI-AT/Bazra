import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';

function EditCars() {
  const {id} = useParams();
  const navigate = useNavigate(); // Create a navigate function
  const [cars, setCars] = useState({ name: '', category: '', description: '', price: '', image: '',engine:'',colors:'',model:'',fuel_consumption:'' });
  const [imagePreview, setImagePreview] = useState(cars.image ? `http://localhost:8000/portfoliocar/${cars.image}` : null);

  const { name, category, image, description, price,engine,colors,model,fuel_consumption } = useLoaderData();
  
  const carCategory = ["LadaVesta", "Lada4x4", "LadaCross"];
  const [selectedCarCategory, setSelectedCarCategory] = useState(carCategory[0]);
  const [editingCategory, setEditingCategory] = useState(false);

  useEffect(() => {
    // Fetch the banner data based on the ID when the component mounts
    fetch(`http://localhost:8000/allcars/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        // Set the initial image preview if a default value exists
        if (data.image) {
          setImagePreview(`http://localhost:8000/portfoliocar/${data.image}`);
        }
      })
      .catch((error) => console.error('Error fetching portfolio data:', error));
  }, [id]);
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Set the image preview
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleChangeSelectedValue = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "other") {
      // Handle the case when "Other" is selected
      // For example, show an input field to allow the user to write a new category
      setEditingCategory(true); // Add a state to track if user is editing the category
      setSelectedCarCategory(""); // Clear the selected category
    } else {
      setEditingCategory(false);
      setSelectedCarCategory(selectedValue);
    }
  };
  

  // handle cars submission
  const handleCarUpdate = (event) => {
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
    const image = form.image.files[0];
  
    // Create FormData object
    const formData = new FormData();
    formData.append('name', name);
    formData.append('category', category);
    formData.append("engine", engine);
    formData.append("colors", colors);
    formData.append("fuel_consumption", fuel_consumption);
    formData.append("model", model);
    formData.append('description', description);
    formData.append('price', price);
    if (image) {
      formData.append('image', image); // Append image file to FormData
    }
  
    // Make fetch request
    fetch(`http://localhost:8000/updatecars/${id}`, {
      method: 'PATCH',
      body: formData, // Use FormData instead of JSON.stringify
    })
      .then((res) => res.json())
      .then((data) => {
        navigate('/admin/dashboard/managecars');
        alert('Car Update Successfully');
      })
      .catch((error) => {
        console.error('Error updating car:', error);
      });
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold text-center' style={{ color: '#2d2e2e' }}>
        Update Cars
      </h2>

      <form onSubmit={handleCarUpdate}  className="bg-white shadow-lg shadow-blue-gray-900 rounded-md p-8 " >
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className='mb-2 block'>
              <Label htmlFor='name' value='Car name' />
            </div>
            <TextInput id='name' name='name' type='text' placeholder='name of car' sizing='lg' defaultValue={name} required  />
          </div>

          {editingCategory ? (
            <div className='lg:w-1/2'>
              <div className='mb-2 block'>
                <Label htmlFor='category' value='Car category' />
              </div>
              <TextInput
                id='category'
                name='category'
                type='text'
                placeholder='Enter new category'
                sizing='lg'
                value={selectedCarCategory}
                onChange={(e) => setSelectedCarCategory(e.target.value)}
              />
            </div>
          ) : (
            <div className='lg:w-1/2'>
              <div className='mb-2 block'>
                <Label htmlFor='category' value='Car category' />
              </div>
              <Select
                sizing='lg'
                id='category'
                name='category'
                className='w-full rounded'
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
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className='mb-2 block'>
              <Label htmlFor='engine' value='Car engine' />
            </div>
            <TextInput id='engine' name='engine' type='text' placeholder='engine of car' sizing='lg' defaultValue={engine} required  />
          </div>

          <div className='lg:w-1/2'>
            <div className='mb-2 block'>
              <Label htmlFor='colors' value='Car color' />
            </div>
            <TextInput id='colors' name='colors' type='text' placeholder='color of car' sizing='lg' defaultValue={colors} required  />
          </div>
        </div>
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className='mb-2 block'>
              <Label htmlFor='model' value='Car model' />
            </div>
            <TextInput id='model' name='model' type='text' placeholder='model of car' sizing='lg' defaultValue={model} required  />
          </div>

          <div className='lg:w-1/2'>
            <div className='mb-2 block'>
              <Label htmlFor='fuel_consumption' value='Car fuel consumption' />
            </div>
            <TextInput id='fuel_consumption' name='fuel_consumption' type='text' placeholder='fuel consumption of car' sizing='lg' defaultValue={fuel_consumption} required  />
          </div>
        </div>
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className='mb-2 block'>
              <Label htmlFor='price' value='Car price' />
            </div>
            <TextInput id='price' type='text' placeholder='price of car' defaultValue={price} sizing='lg' required />
          </div>
          <div className='lg:w-1/2'>
            <div className='mb-2 block'>
              <Label htmlFor='imageUrl' value='Car image' />
            </div>
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                style={{ maxWidth: '50%', maxHeight: '100px', marginBottom: '10px' }}
              />
            )}
            <input
              id="image"
              name="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className='border border-blue-200 rounded-md p-2 w-full'
            />          
            </div>
        </div>

        <div className='mb-2 block'>
          <Label htmlFor='description' value='Car description' className='text-bold text-black' />
        </div>
        <Textarea className='w-full' id='description' type='text' placeholder='Write description of car...' defaultValue={description} required rows={6} />
        <Button type='submit' className='mt-5' style={{ color: '#11224893', background: '#11224893' }}>
          Update Car
        </Button>
      </form>
    </div>
  );
}

export default EditCars;
