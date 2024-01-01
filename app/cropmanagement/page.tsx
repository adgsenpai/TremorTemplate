"use client";

import React, { useState } from 'react';
import { Card, Button, TextInput, Title, Text } from '@tremor/react';

export default function CropManagementForm() {
  // State for form data
  const [cropData, setCropData] = useState({
    cropType: '',
    plantedArea: '',
    plantingDate: '',
    harvestDate: '',
    fertilizerType: '',
    pestControlMethod: ''
  });

  const handleChange = (e:any) => {
    setCropData({ ...cropData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(cropData);
    // Logic to handle form submission
  };

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Card className="p-4">
        <Title className="mb-4">Crop Management Form</Title>
        <form onSubmit={handleSubmit}>
          <Text>Crop Type:</Text>
          <TextInput type="text" name="cropType" value={cropData.cropType} onChange={handleChange} className='mb-4' />

          <Text>Planted Area (hectares):</Text>
          <TextInput type="text" name="plantedArea" value={cropData.plantedArea} onChange={handleChange} className='mb-4' />

          <Text>Planting Date:</Text>
          <TextInput type="text" name="plantingDate" value={cropData.plantingDate} onChange={handleChange} className='mb-4' />

          <Text>Harvest Date:</Text>
          <TextInput type="text" name="harvestDate" value={cropData.harvestDate} onChange={handleChange} className='mb-4' />

          <Text>Fertilizer Type:</Text>
          <TextInput type="text" name="fertilizerType" value={cropData.fertilizerType} onChange={handleChange} className='mb-4' />

          <Text>Pest Control Method:</Text>
          <TextInput type="text" name="pestControlMethod" value={cropData.pestControlMethod} onChange={handleChange} className='mb-4' />

          <Button type="submit" className="mt-4">Submit</Button>
        </form>
      </Card>
    </main>
  );
}
