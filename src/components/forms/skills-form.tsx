import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import { skillsSchema } from "@/schemas/skills-schema";

export function SkillsForm() {
  // Set up the form using useForm hook
  const form = useForm<z.infer<typeof skillsSchema>>({
    resolver: zodResolver(skillsSchema),
    defaultValues: {
      previousClients: "",
      skills: "",
      languages: "",
    },
  });

  // Define the submit handler
  function onSubmit(values: z.infer<typeof skillsSchema>) {
    // Handle form submission
    console.log(values);
  }

  return (
    <div>
      <div className="main-div">
        <div className="justify-center py-[32px] space-y-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="previousClients"
                render={() => (
                  <FormItem>
                    <FormLabel className="font-medium text-base">
                      Previous Clients
                    </FormLabel>
                    <FormControl>
                      <div className="mt-2">
                        <Button type="button">Add work experience</Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="skills"
                render={() => (
                  <FormItem>
                    <FormLabel className="font-medium text-base">
                      Skills
                    </FormLabel>
                    <FormControl>
                      <div className="mt-2">
                        <Button type="button">Add Skills</Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="languages"
                render={() => (
                  <FormItem>
                    <FormLabel className="font-medium text-base">
                      Languages
                    </FormLabel>
                    <FormControl>
                      <div className="mt-2">
                        <Button type="button">Add Languages</Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="portfolioLinks"
                render={() => (
                  <FormItem>
                    <FormLabel className="font-medium text-base">
                      Links to portfolio/Github/LinkedIn
                    </FormLabel>
                    <FormControl>
                      <div className="mt-2">
                        <Button type="button">Add Links</Button>
                      </div>
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

export default SkillsForm;
