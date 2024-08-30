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
                      Enter the team member name
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
                      What is the position of this team member in the company?
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
                              <SelectItem value="Developer">
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
              <br />
              <div className="fixed bottom-0 z-50 py-5 flex justify-center gap-[374px]">
                <Button
                  className="flex text-base bg-white text-black "
                  variant="link"
                  type="button"
                >
                  Cancel
                </Button>
                <Button className="flex text-base" type="submit">
                  Next Step
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default AddATeamMember;
