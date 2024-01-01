"use client";
import React, { useState } from 'react';
import { Card, Button, Select, Title, Text, TextInput, SelectItem } from '@tremor/react';


export default function FarmerProfileForm() {
    return (
        <main className="p-4 md:p-10 mx-auto max-w-7xl">
            <Card className="p-4">
                <Title className="mb-4">Farmer Profile Form</Title>

                <Text>Name:</Text>

                <TextInput type="text" name="name" className='mb-4' />

                <Text>Email:</Text>
                <TextInput type="email" name="email" className='mb-4' />

                <Text>Phone Number:</Text>
                <TextInput type="text" name="phoneNumber" className='mb-4' />

                <Text>Language:</Text>

                <Select className='mb-4'>
                    <SelectItem value="en">
                        English
                    </SelectItem>
                    <SelectItem value="af">
                        Afrikaans
                    </SelectItem>
                    <SelectItem value="zu">
                        Zulu
                    </SelectItem>
                    <SelectItem value="xh">
                        Xhosa
                    </SelectItem>
                    <SelectItem value="nso">
                        Northern Sotho
                    </SelectItem>
                </Select>



                <Text>Income Level:</Text>
                <TextInput type="text" name="incomeLevel" className='mb-4' />

                <Text>Education Level:</Text>
                <TextInput type="text" name="educationLevel" className='mb-4' />

                <Text>Household Size:</Text>
                <TextInput type="text" name="householdSize" className='mb-4' />

                <Text>Location ID:</Text>
                <TextInput type="text" name="locationId" className='mb-4' />

                <Button type="submit" className="mt-4">Submit</Button>

            </Card>
        </main>
    );
}
