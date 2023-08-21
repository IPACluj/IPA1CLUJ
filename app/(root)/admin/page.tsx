import AddForm from "../components/add-form";
import prismadb from "@/lib/prismadb";

const Admin = async () => {
  const categories = await prismadb.category.findMany();
  const cards = await prismadb.card.findMany();

  console.log(categories,cards)

  return (
    <div>
      <AddForm
        initialData={null}
        categories={categories}
      />
    </div>
  );
};

export default Admin;
