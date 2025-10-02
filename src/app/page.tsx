import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import AppPieChart from "@/components/AppPieChart";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";
import { HomeItemsT } from "@/types";

const HomeItems: HomeItemsT[] = [
  {
    id: 1,
    component: AppBarChart,
    className:
      "bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2",
  },
  {
    id: 2,
    component: CardList,
    title: "Last Transactions",
    className: "bg-primary-foreground p-4 rounded-lg",
  },
  {
    id: 3,
    component: AppPieChart,
    className: "bg-primary-foreground p-4 rounded-l",
  },
  {
    id: 4,
    component: TodoList,
    className: "bg-primary-foreground p-4 rounded-lg",
  },
  {
    id: 5,
    component: AppAreaChart,
    className:
      "bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2",
  },
  {
    id: 6,
    component: CardList,
    title: "Popular Content",
    className: "bg-primary-foreground p-4 rounded-lg",
  },
];

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      {HomeItems.map((item) => (
        <div key={item.id} className={item.className}>
          <item.component title={item?.title} />
        </div>
      ))}
    </div>
  );
}
