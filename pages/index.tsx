import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function CarRentalHome() {
  const [search, setSearch] = useState("");

  const cars = [
    {
      name: "Tesla Model Y",
      price: "¥12,000/日",
      location: "足立区",
      image: "/cars/tesla-model-y.jpg",
    },
    {
      name: "Toyota Alphard",
      price: "¥15,000/日",
      location: "新宿区",
      image: "/cars/toyota-alphard.jpg",
    },
    {
      name: "Nissan Serena",
      price: "¥10,000/日",
      location: "池袋",
      image: "/cars/nissan-serena.jpg",
    },
  ];

  const filteredCars = cars.filter((car) =>
    car.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-8 tracking-tight text-center">
          TESLA PREMIUM 共乘計畫
        </h1>
        <p className="text-center text-lg mb-12 text-gray-300">
          提供極致舒適與高級感的電動車共享體驗｜限量車款・尊榮服務・東京都內即刻上路
        </p>
        <div className="max-w-md mx-auto mb-10">
          <Input
            placeholder="搜尋車款（例如 Model Y、Alphard）"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white text-black rounded-xl shadow-md"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredCars.map((car, index) => (
            <Card
              key={index}
              className="bg-white text-black rounded-3xl shadow-lg overflow-hidden"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-52 object-cover"
              />
              <CardContent className="p-5">
                <h2 className="text-2xl font-bold mb-1">{car.name}</h2>
                <p className="text-gray-600 mb-2">地點：{car.location}</p>
                <p className="text-gray-900 font-semibold text-lg mb-4">
                  {car.price}
                </p>
                <Button className="w-full text-white bg-black hover:bg-gray-800 rounded-xl">
                  立即預約
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
