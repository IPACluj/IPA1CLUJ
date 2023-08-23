"use client";
import * as z from "zod";
import axios from "axios";

import { Category, Card } from "@prisma/client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { ImageUpload } from "@/components/image-upload";
import { Button } from "@/components/ui/button";
import { PlusCircle, Wand2 } from "lucide-react";
import { useRouter } from "next/navigation";

const font = Poppins({
  weight: "500",
  subsets: ["latin"],
});
interface CardFormProps {
  initialData: Card | null;
  categories: Category[];
}

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required.",
  }),
  s_description: z.string(),
  l_description: z.string(),
  photo: z.string().min(1, {
    message: "Image is required.",
  }),
  categoryId: z.string().min(1, {
    message: "Slecteaza o categorie",
  }),
  maps_link: z.string().min(1, {
    message: "Adauga link google maps",
  }),
  tel: z.string().min(1, {
    message: "Adauga telefon",
  }),
  time: z.string().min(1, {
    message: "Adauga Program Functionare",
  }),
  procent: z.coerce // When using numbers and dates, you must use coerce
    .number({
      invalid_type_error: "Favourite number must be a number.",
    }), // alias .min(5)
});

const AddForm = ({ initialData, categories }: CardFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      s_description: "",
      l_description: "",
      procent: 10 || Number(10),
      photo: "",
      time: "",
      maps_link: "",
      tel: "",

      categoryId: undefined,
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // values.procent = parseInt(values.procent);

      await axios.post("/api/card", values);
    } catch {}
  };

  return (
    <div
      className={cn("h-full p-4 space-y-2  max-w-3xl mx-auto", font.className)}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 "
        >
          <div className="w-full text-lg font-medium spave-y-2">
            <h3 className="">Formular adaugare colaborari</h3>
            <p className="text-sm text-muted-foreground border-b-2 pb-2 border-primary/10">
              Pentru a introduce o noua colaborare trebuie completate toate
              campurile
            </p>
          </div>
          <FormField
            name="photo"
            render={({ field }) => (
              <FormItem className="flex flex-col items-center justify-center space-y-4 col-span-2">
                <FormControl>
                  <ImageUpload
                    disabled={isLoading}
                    onChange={field.onChange}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-2 relative group md:col-span-1">
                  <FormLabel
                    className={cn(
                      "transform text-muted-foreground transition-all absolute top-5 left-3 text-sm group-focus-within:text-md peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-9 peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 group-focus-within:text-green-300",

                      field.value
                        ? "transition-none -translate-y-[36px] text-green-300 "
                        : ""
                    )}
                  >
                    Nume Colaborator
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="w-full h-10 px-4 text-sm peer  outline-none "
                      disabled={isLoading}
                      // placeholder="Elon Musk"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="procent"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-2 relative group md:col-span-1">
                  <FormLabel
                    className={cn(
                      "transform text-muted-foreground transition-all absolute top-5 left-3 text-sm group-focus-within:text-md peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-9 peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 group-focus-within:text-green-300",

                      field.value
                        ? "transition-none -translate-y-[36px] text-green-300 "
                        : ""
                    )}
                  >
                    Reducere (%)
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      className="w-full h-10 px-4 text-sm peer  outline-none "
                      disabled={isLoading}
                      // placeholder="Elon Musk"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Introduceti reducerea oferita numeric
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="maps_link"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-2 relative group md:col-span-1">
                  <FormLabel
                    className={cn(
                      "transform text-muted-foreground transition-all absolute top-5 left-3 text-sm group-focus-within:text-md peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-9 peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 group-focus-within:text-green-300",

                      field.value
                        ? "transition-none -translate-y-[36px] text-green-300 "
                        : ""
                    )}
                  >
                    Link Maps
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="w-full h-10 px-4 text-sm peer  outline-none "
                      disabled={isLoading}
                      // placeholder="Elon Musk"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Introduceti un link de pe google maps cu locatia aferenta
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />{" "}
            <FormField
              name="tel"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-2 relative group md:col-span-1">
                  <FormLabel
                    className={cn(
                      "transform text-muted-foreground transition-all absolute top-5 left-3 text-sm group-focus-within:text-md peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-9 peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 group-focus-within:text-green-300",

                      field.value
                        ? "transition-none -translate-y-[36px]  text-green-300"
                        : ""
                    )}
                  >
                    Telefon (07** *** ***)
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="w-full h-10 px-4 text-sm peer  outline-none "
                      disabled={isLoading}
                      // placeholder="Elon Musk"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="time"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-2 relative group md:col-span-1">
                  <FormLabel
                    className={cn(
                      "transform text-muted-foreground transition-all absolute top-5 left-3 text-sm group-focus-within:text-md peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-9 peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 group-focus-within:text-green-300",

                      field.value
                        ? "transition-none -translate-y-[36px] text-green-300 "
                        : ""
                    )}
                  >
                    Orar Functionare
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="w-full h-10 px-4 text-sm peer  outline-none "
                      disabled={isLoading}
                      // placeholder="Elon Musk"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Introduceti orarul de functionare (Ex: 08:00 - 20:00)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />{" "}
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem className="w-full">
                  {/* <FormLabel></FormLabel> */}
                  <Select
                    disabled={isLoading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="bg-background">
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="Categorie Oferta
                          "
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem
                          key={category.id}
                          value={category.id}
                        >
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>Slecteaza o optiune</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="s_description"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-2 relative group border-b-2 border-slate-900 mb-2 ">
                  <FormLabel
                    className={cn(
                      "transform text-muted-foreground transition-all absolute top-5 left-3 text-sm group-focus-within:text-md peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-9 peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 group-focus-within:text-green-300",

                      field.value
                        ? "transition-none -translate-y-[36px]  text-green-300  "
                        : ""
                    )}
                  >
                    Descriere pe scurt
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className="w-full h-10 px-4 text-sm peer  outline-none "
                      disabled={isLoading}
                      // placeholder="Elon Musk"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Generati o descriere scurta a ofertei
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />{" "}
            <FormField
              name="l_description"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-2 relative group  ">
                  <FormLabel
                    className={cn(
                      "transform text-muted-foreground transition-all absolute top-5 left-3 text-sm group-focus-within:text-md peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-9 peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0 group-focus-within:text-green-300",

                      field.value
                        ? "transition-none -translate-y-[36px]  text-green-300  "
                        : ""
                    )}
                  >
                    Descriere amanuntita ( daca este cazul)
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className="w-full h-10 px-4 text-sm peer  outline-none "
                      disabled={isLoading}
                      // placeholder="Elon Musk"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Generati o descriere amanuntita, campul nu este obligatoriu.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />{" "}
          </div>{" "}
          <div className="w-full flex justify-center">
            <Button
              size="lg"
              disabled={isLoading}
            >
              {/* {initialData ? "Edit your companion" : "Create your companion"} */}{" "}
              Adauga in baza de date
              <PlusCircle className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddForm;
