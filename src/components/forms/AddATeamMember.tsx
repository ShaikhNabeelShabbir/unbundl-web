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
import { addTeamMemberSchema } from "@/schemas/addTeamMemberSchema";

// Define the schema using Zod

export function AddATeamMember() {
  // Set up the form using useForm hook
  const form = useForm<z.infer<typeof addTeamMemberSchema>>({
    resolver: zodResolver(addTeamMemberSchema),
    defaultValues: {
      name: "",
      position: "",
      type: "",
      right: "",
    },
  });

  // Define the submit handler
  function onSubmit(values: z.infer<typeof addTeamMemberSchema>) {
    // Handle form submission
    console.log(values);
  }

  return (
    <div>
      <div className="main-div">
        <div className="justify-center py-[32px]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-base">
                      Enter the team member name{" "}
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-base">
                      What is the position of this team member in the company?{" "}
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Position" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="type"
                control={form.control}
                render={({}) => (
                  <FormItem>
                    <FormLabel className="font-medium text-base">
                      What is the type of the team member{" "}
                    </FormLabel>
                    <FormControl>
                      <Controller
                        control={form.control}
                        name="type"
                        render={({ field }) => (
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select Category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="founder">Founder</SelectItem>
                              <SelectItem value="engineer">Engineer</SelectItem>
                              <SelectItem value="developer">
                                Developer
                              </SelectItem>
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
                name="right"
                control={form.control}
                render={({}) => (
                  <FormItem>
                    <FormLabel className="font-medium text-base">
                      What rights do you want to give to this team member?{" "}
                    </FormLabel>
                    <FormControl>
                      <Controller
                        control={form.control}
                        name="right"
                        render={({ field }) => (
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select Category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Admin">Admin</SelectItem>
                              <SelectItem value="Management">
                                Management
                              </SelectItem>
                              <SelectItem value="developer">
                                Developer
                              </SelectItem>
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
      </div>
    </div>
  );
}

export default AddATeamMember;
