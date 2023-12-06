import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MyAddsList from "./myAddsList";
import MyWishList from "./myWishList";

const ListTabs = () => {
  return (
    <Tabs defaultValue="myAddsList" className="w-full">
      <TabsList>
        <TabsTrigger value="myAddsList">Meus anuncios</TabsTrigger>
        <TabsTrigger value="myWishList">Minha lista de desejos</TabsTrigger>
      </TabsList>
      <TabsContent value="myAddsList" className="h-full border p-3">
        <MyAddsList />
      </TabsContent>
      <TabsContent value="myWishList" className="h-full border p-3">
        <MyWishList />
      </TabsContent>
    </Tabs>
  );
};

export default ListTabs;
