import { Card, Title, Text, Button } from '@tremor/react';
import Link from 'next/link';

// Sample JSON data
const cardData = [
  {
    title: "Foo",
    text: "Bar",
    content: "",
    url: "/foo",
  },

];

export default function IndexPage() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Tremor Template</Title>
      <Text>Hello World!</Text>

      {cardData.map((card, index) => (
        <Card key={index} className="mt-6">
          <Title>{card.title}</Title>
          <Text>{card.text}</Text>
          <Text>{card.content}</Text>
          <Link href={card.url}>
            <Button className="mt-4">View</Button>
          </Link>
        </Card>
      ))}
    </main>
  );
}
