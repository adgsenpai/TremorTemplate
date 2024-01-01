import { Card, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react';
import FarmStats from './chart';
// Data representing various farm activities
const cropYield = [
  { name: 'wheat', value: 1230 },
  { name: 'corn', value: 751 },
  { name: 'soybeans', value: 471 },
  { name: 'sunflowers', value: 280 },
  { name: 'potatoes', value: 78 }
];

const livestock = [
  { name: 'cattle', value: 453 },
  { name: 'sheep', value: 351 },
  { name: 'pigs', value: 271 },
  { name: 'poultry', value: 191 }
];

const equipment = [
  { name: 'tractors', value: 789 },
  { name: 'harvesters', value: 676 },
  { name: 'plows', value: 564 },
  { name: 'sprayers', value: 234 },
  { name: 'tillers', value: 191 }
];

const farmData = [
  {
    category: 'Crop Yield',
    stat: '10,234 kg',
    data: cropYield
  },
  {
    category: 'Livestock',
    stat: '1,543 head',
    data: livestock
  },
  {
    category: 'Equipment Usage',
    stat: '2,543 hours',
    data: equipment
  }
];

export default function FarmManagementDashboard() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
        {farmData.map((item) => (
          <Card key={item.category}>
            <Title>{item.category}</Title>
            <Flex
              justifyContent="start"
              alignItems="baseline"
              className="space-x-2"
            >
              <Metric>{item.stat}</Metric>
              <Text>Total</Text>
            </Flex>
            <Flex className="mt-6">
              <Text>Category</Text>
              <Text className="text-right">Amount</Text>
            </Flex>
            <BarList
              data={item.data}
              valueFormatter={(number: number) =>
                Intl.NumberFormat('en-US').format(number).toString()
              }
              className="mt-2"
            />
          </Card>
        ))}
      </Grid>
      <FarmStats />
      
    </main>
  );
}
