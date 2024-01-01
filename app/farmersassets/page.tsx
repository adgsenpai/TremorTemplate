"use client"
import React, { useState } from 'react';
import { Card, Button, TextInput, Title, Text } from '@tremor/react';

export default function FarmersAssetsForm() {
  // State for form data
  const [assetsData, setAssetsData] = useState({
    landArea: '',
    machinery: '',
    livestock: '',
    storageCapacity: '',
    irrigationSystem: ''
  });

  const handleChange = (e:any) => {
    setAssetsData({ ...assetsData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(assetsData);
    // Logic to handle form submission
  };

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Card className="p-4">
        <Title className="mb-4">Farmers Assets Form</Title>
        <form onSubmit={handleSubmit}>
          <Text>Land Area (hectares):</Text>
          <TextInput type="text" name="landArea" value={assetsData.landArea} onChange={handleChange} className='mb-4' />
          
          <Text>Machinery:</Text>
          <TextInput type="text" name="machinery" value={assetsData.machinery} onChange={handleChange} className='mb-4' />

          <Text>Livestock:</Text>
          <TextInput type="text" name="livestock" value={assetsData.livestock} onChange={handleChange} className='mb-4' />

          <Text>Storage Capacity (tons):</Text>
          <TextInput type="text" name="storageCapacity" value={assetsData.storageCapacity} onChange={handleChange} className='mb-4' />

          <Text>Irrigation System:</Text>
          <TextInput type="text" name="irrigationSystem" value={assetsData.irrigationSystem} onChange={handleChange} className='mb-4' />

          <Button type="submit" className="mt-4">Submit</Button>
        </form>
      </Card>
    </main>
  );
}
