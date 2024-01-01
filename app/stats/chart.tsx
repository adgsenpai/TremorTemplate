"use client"
import { Card, AreaChart, Title, Text } from '@tremor/react';

// Data reflecting Harvest and Revenue in kilograms and Rands
const farmData = [
  {
    Season: 'Spring 23',
    Harvest: 2890, // Measured in kilograms
    Revenue: 2400  // Measured in Rands
  },
  {
    Season: 'Summer 23',
    Harvest: 1890,
    Revenue: 1398
  },
  {
    Season: 'Spring 24',
    Harvest: 3890,
    Revenue: 2980
  }
];

export default function FarmStats() {
  return (
    <Card className="mt-8">
      <Title>Farm Performance Overview</Title>
      <Text>Seasonal Comparison of Harvest and Revenue</Text>
      <AreaChart
        className="mt-4 h-80"
        data={farmData}
        categories={['Harvest', 'Revenue']}
        index="Season"
        colors={['green', 'cyan']} // Green for harvest, brown for earth/money
        valueFormatter={(number: number) =>
          `${number.toLocaleString('en-ZA')} kg/R` // Harvest in kg, Revenue in Rands
        }
        yAxisWidth={60}
      />
    </Card>
  );
}
