import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"; // Assuming you're using a custom wrapper around Radix UI's Select
import { addSoftwareSchema } from "@/schemas/add-software-schema";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export function AddSoftwareForm() {
  // Set up the form using useForm hook
  const form = useForm<z.infer<typeof addSoftwareSchema>>({
    resolver: zodResolver(addSoftwareSchema),
    defaultValues: {
      softwareLink: "",
      category: "",
      months: "",
    },
  });

  // Define the submit handler
  function onSubmit(values: z.infer<typeof addSoftwareSchema>) {
    // Handle form submission
    console.log(values);
  }

  return (
    <div className="p-4 max-w-full sm:max-w-md mx-auto">
      <div className="text-sm text-black/50 mb-4">
        You can request to add software that you use to the platform. If your
        request gets approved, every time someone will download it or start
        using it, you’ll get points.
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="softwareLink"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-medium text-base">
                  Link to the software website
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Link"
                    {...field}
                    className="w-full h-11"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="category"
            control={form.control}
            render={({}) => (
              <FormItem>
                <FormLabel className="font-medium text-base">
                  Category
                </FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Design">Design</SelectItem>
                          <SelectItem value="engineer">Engineer</SelectItem>
                          <SelectItem value="developer">Developer</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="months"
            control={form.control}
            render={({}) => (
              <FormItem>
                <FormLabel className="font-medium text-base">
                  For how long are you using it?
                </FormLabel>
                <FormControl>
                  <Controller
                    control={form.control}
                    name="months"
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Month</SelectItem>
                          <SelectItem value="3">3 Months</SelectItem>
                          <SelectItem value="6">6 Months</SelectItem>
                          <SelectItem value="12">12 Months</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between mt-4">
            <Button type="button" className="text-base bg-white text-black">
              Cancel
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button type="submit" className="h-11 w-full sm:w-40 text-sm">
                  Request to add software
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-sm p-6 mx-auto">
                <DialogHeader>
                  <DialogTitle className="text-xl font-semibold">
                    Request to add software
                  </DialogTitle>
                </DialogHeader>
                <p className="text-center text-md font-medium text-black/50">
                  You suggested to add this software to the tool stash. You’ll
                  get an email notification if your request gets approved. Every
                  time someone uses or downloads the software you proposed,
                  you’ll get points.
                </p>
                <p className="text-center text-md font-medium mt-4">
                  <u>Close</u>
                </p>
              </DialogContent>
            </Dialog>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default AddSoftwareForm;
