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
import { addSoftwareSchema } from "@/schemas/addSoftwareSchema";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

// Define the schema using Zod

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
    <div className="w-[600px] h-[582px]">
      <div className="font-normal text-[12px] text-black/50 w-[560px]">
        You can request to add software, that you use to the platform. If your
        request gets approved, every time someone will download it, or start
        using it, you’ll get points
      </div>
      <div className="main-div justify-center py-[32px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="softwareLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-base">
                    Link to the software website{" "}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Name"
                      {...field}
                      className="w-[560px] h-[45px]"
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
                    Category{" "}
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
                          <SelectTrigger className="w-[560px] h-[45px]">
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
                    For how long are you using it?{" "}
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
                          <SelectTrigger className="w-[560px] h-[45px]">
                            <SelectValue placeholder="Select Category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Admin">Admin</SelectItem>
                            <SelectItem value="Management">
                              Management
                            </SelectItem>
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
          </form>
        </Form>
      </div>

      <br />
      <div className="fixed bottom-0 left-0 right-0 z-50 py-5 flex justify-center gap-[233px]">
        <Button className="flex text-base bg-white text-black">Cancel</Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              type="button"
              className="h-[42px] w-[178px] text-sm mr-[30px]"
            >
              Request to add software{" "}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="font-semibold text-xl">
                Request to add software{" "}
              </DialogTitle>
            </DialogHeader>
            <p className="font-bold text-[24px] text-center">Request Sent</p>
            <p className="text-center text-md font-medium text-black/50">
              You suggested to add figma.com to the tool stash, you’ll get an
              email notification if your request gets approved.Every time
              someone will use or download the software you proposed, you’ll get
              points.
            </p>
            <p className="text-center text-md font-medium">
              <u>Close </u>
            </p>
          </DialogContent>
        </Dialog>{" "}
      </div>
    </div>
  );
}

export default AddSoftwareForm;
