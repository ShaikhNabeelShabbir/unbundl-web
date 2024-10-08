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
} from "@/components/ui/select";
import { Button } from "../ui/button";
import { addTeamMemberSchema } from "@/schemas/add-team-member-schema";

export function AddATeamMember() {
  // Set up the form using useForm hook
  const form = useForm<z.infer<typeof addTeamMemberSchema>>({
    resolver: zodResolver(addTeamMemberSchema),
    defaultValues: {
      name: "",
      position: "",
      type: "",
      rights: "",
    },
  });

  // Define the submit handler
  function onSubmit(values: z.infer<typeof addTeamMemberSchema>) {
    // Call the onAddMember function passed from the parent
    console.log(values);
  }

  return (
    <div className="px-4 py-8 md:px-8 md:py-12">
      <div className="max-w-lg mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium text-base">
                    Enter the team member name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Name"
                      {...field}
                      className="w-full"
                    />
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
                    What is the position of this team member in the company?
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Position"
                      {...field}
                      className="w-full"
                    />
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
                    What is the type of the team member
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
                            <SelectValue placeholder="Select Type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Founder">Founder</SelectItem>
                            <SelectItem value="Engineer">Engineer</SelectItem>
                            <SelectItem value="Developer">Developer</SelectItem>
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
              name="rights"
              control={form.control}
              render={({}) => (
                <FormItem>
                  <FormLabel className="font-medium text-base">
                    What rights do you want to give to this team member?
                  </FormLabel>
                  <FormControl>
                    <Controller
                      control={form.control}
                      name="rights"
                      render={({ field }) => (
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select Rights" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Admin">Admin</SelectItem>
                            <SelectItem value="Management">
                              Management
                            </SelectItem>
                            <SelectItem value="Developer">Developer</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col-reverse sm:flex-row sm:justify-between gap-4">
              <Button className="w-full sm:w-auto" variant="link" type="button">
                Cancel
              </Button>
              <Button className="w-full sm:w-auto" type="submit">
                Next Step
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default AddATeamMember;
