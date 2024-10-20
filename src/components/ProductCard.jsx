import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

export default function ProductCard({
  title = "Premium Headphones",
  price = 199.99,
  imageUrl = "/placeholder.svg",
  onAddToCart = () => console.log("Added to cart"),
}) {
  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative w-full h-48">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg font-semibold line-clamp-2">
          {title}
        </CardTitle>
        <p className="mt-2 text-2xl font-bold text-primary">${price}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={onAddToCart} className="w-full">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
