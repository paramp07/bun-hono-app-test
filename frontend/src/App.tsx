import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function App() {
  const [totalSpent, setTotalSpent] = useState(0);

  useEffect(() => {
    async function fetchTotal() {
      const res = await fetch("/api/expenses/total-spent");
      const data = await res.json();
      setTotalSpent(data.total);
    }
    fetchTotal();
  }, [])

  return (
    <>
      <Card className="w-[350px] mx-auto">
        <CardHeader>
          <CardTitle>Total Spent</CardTitle>
          <CardDescription>Total Amount Spent</CardDescription>
        </CardHeader>
        <CardContent>
          {totalSpent}
        </CardContent>
      </Card>
    </>
  );
}

export default App;
