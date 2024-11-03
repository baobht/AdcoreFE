"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { MultiSelect } from "@/components/global/multiselect";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { API_URL } from "@/constants";

const FormSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  categories: z.string().array().min(1, {
    message: "Categories must be at least 1 item",
  }),
  price: z
    .number({
      required_error: "Age is required",
      invalid_type_error: "Age must be a number",
    })
    .min(1),
  rating: z
    .number({
      required_error: "Age is required",
      invalid_type_error: "Age must be a number",
    })
    .min(1)
    .max(5),
  cover_img: z.string().url(),
});

export default function Courses() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      categories: [],
      price: 0,
      rating: 1,
      cover_img: "",
    },
  });

  const {
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = form;
  console.log("getValues", getValues());
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("🚀 ~ onSubmit ~ data:", data);
    const { title, categories, price, rating, cover_img } = data;
    axios
      .post(`${API_URL}/v1/api/create-course`, {
        title,
        categories,
        price,
        rating,
        cover_img,
      })
      .then((data) => {
        console.log("🚀 ~ onSubmit ~ data:", data);
        toast({
          title: "Success",
          description: "Course created successfully",
        });
        reset();
      })
      .catch((err) => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
        console.log(err);
      });
  }
  return (
    <main className="flex flex-col">
      <div
        id="course-banner"
        className="flex justify-center items-center w-full bg-[url('/image/courses-bg.svg')] bg-no-repeat bg-cover font-bold text-6xl py-24"
      >
        NEW COURSE
      </div>
      <div className="px-[15.625%]">
        <Card className="my-32 bg-[#F5F5F5] rounded-none pt-4">
          <CardHeader className="uppercase font-bold text-3xl">
            Add new Course
          </CardHeader>
          <CardContent className="flex flex-col p-8 ">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input
                          fullWidth
                          {...field}
                          className="rounded-none border-[#CACACA]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <MultiSelect setValue={setValue} />
                <div
                  className="text-sm font-medium text-destructive"
                  style={{
                    marginTop:
                      "calc(0.5rem * calc(1 - var(--tw-space-y-reverse)))",
                    marginBottom: "calc(0.5rem * var(--tw-space-y-reverse))",
                  }}
                >
                  <ErrorMessage errors={errors} name="categories" />
                </div>

                <div className="flex gap-8 mt-10">
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Price</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            fullWidth
                            {...field}
                            className="rounded-none border-[#CACACA] w-full"
                            onChange={(e) => setValue("price", +e.target.value)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="rating"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Rating</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            fullWidth
                            {...field}
                            className="rounded-none border-[#CACACA] w-full"
                            onChange={(e) =>
                              setValue("rating", +e.target.value)
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="cover_img"
                  render={({ field }) => (
                    <FormItem className="w-full mt-10">
                      <FormLabel>Cover Image</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter a valid url to an image"
                          fullWidth
                          {...field}
                          className="rounded-none border-[#CACACA] w-full"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="rounded-full px-10 bg-[#704FE6] flex m-auto mt-10 text-lg"
                >
                  Create
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
