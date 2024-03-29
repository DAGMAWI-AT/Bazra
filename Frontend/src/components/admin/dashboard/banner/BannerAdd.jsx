import React, { useState } from 'react';
import { Label, TextInput } from 'flowbite-react';

function BannerAdd() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState(null);

  const handleBannerSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('text', text);
      formData.append('imageFile', imageFile);

      const response = await fetch('https://bazra.onrender.com/addbanner', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Failed to upload banner (status ${response.status})`);
      }

      const data = await response.json();

      if (data.success) {
        alert('Banner Uploaded Successfully');
        setTitle('');
        setText('');
        setImageFile(null);
        setImagePreview(null);
        setError(null);
      } else {
        setError('Error: Unable to upload banner');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while uploading the banner');
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImageFile(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      setImageFile(null);
      setImagePreview(null);
    }
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold text-center' style={{ color: '#2d2e2e' }}>
        Upload Banner
      </h2>

      <form onSubmit={handleBannerSubmit} className="bg-white shadow-md rounded-md p-8">
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className='mb-2 block'>
              <Label htmlFor='title' value='Banner Title' />
            </div>
            <TextInput
              id='title'
              type='text'
              placeholder='Title of Banner'
              sizing='lg'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className='lg:w-1/2'>
            <div className='mb-2 block'>
              <Label htmlFor='text' value='Banner Text' />
            </div>
            <TextInput
              id='text'
              type='text'
              placeholder='Banner Text'
              sizing='lg'
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
          </div>
        </div>

        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className='mb-2 block'>
              <Label htmlFor='imageFile' value='Banner Image' />
            </div>
            <input
              type='file'
              id='imageFile'
              accept='image/*'
              onChange={handleImageChange}
              className='border border-blue-200 rounded-md p-2 w-full'
            />
          </div>
          {imagePreview && (
            <div className='lg:w-1/2'>
              <img src={imagePreview} alt="Banner Prevew" className='max-w-full h-auto' />
            </div>
          )}
        </div>

        {error && <div className='text-red-500'>{error}</div>}

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Upload
        </button>
      </form>
    </div>
  );
}

export default BannerAdd;
