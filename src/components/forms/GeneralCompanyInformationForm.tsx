import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { generalCompanySchema } from "@/schemas/generalCompanySchema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import FileDropzone from "../FileDropZone";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

export function GeneralCompanyInformationForm({
  onNext,
}: {
  onNext: () => void;
}) {
  const [showDropzone, setShowDropzone] = useState({
    whitepaper: false,
    pitchDeck: false,
  });
  const [uploadedFiles, setUploadedFiles] = useState<{
    whitepaper?: File[];
    pitchDeck?: File[];
  }>({});

  // Set up the form using useForm hook
  const form = useForm<z.infer<typeof generalCompanySchema>>({
    resolver: zodResolver(generalCompanySchema),
    defaultValues: {
      companyName: "",
      projectDescription: "",
      websiteLink: "",
      chain: "",
      category: "",
      developmentStage: "",
      teamSize: "",
      usefulLinks: "",
      calendlyLink: "",
      timezone: "",
    },
  });

  // Define the submit handler
  function onSubmit(values: z.infer<typeof generalCompanySchema>) {
    // Handle form submission
    console.log(values);
    onNext(); // Call onNext to move to the next step
  }

  // Handle file drop
  const handleDrop =
    (fileType: "whitepaper" | "pitchDeck") => (acceptedFiles: File[]) => {
      setUploadedFiles((prev) => ({
        ...prev,
        [fileType]: acceptedFiles,
      }));
    };
  return (
    <div>
      <div className="main-div flex flex-col px-20 flex-wrap w-full items-center ">
        <div className="flex flex-row py-10 px-5 flex-grow">
          <div className="w-260 h-168 font-normal text-justify text-base text-black/50   py-16">
            Tell us the general information about
            <br />
            your startup, this will help us to learn <br />
            more about what you are doing, so you <br /> can easily find
            investors, advisors or <br />
            great talent for your company.
          </div>{" "}
          <div className="px-[80px] ">
            <div className="justify-center  w-[560px] py-[40px]">
              <Form {...form}>
                <form
                  id="signupForm"
                  onSubmit={form.handleSubmit((values) => {
                    onSubmit(values); // Validate and submit the form
                  })}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-md">
                          Company Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your company name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="projectDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-md">
                          Describe Your Project
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Describe your project"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="websiteLink"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-md">
                          Provide a Link to Your Website
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Enter website URL" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="chain"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-md">
                          On What Chain Are You Building On?
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Enter blockchain" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-md">
                          What is the category of your Web3 Startup?{" "}
                        </FormLabel>
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={(value) => field.onChange(value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="De-Fi" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="light">De-Fi</SelectItem>
                              <SelectItem value="dark">Banking</SelectItem>
                              <SelectItem value="system">Finance</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="developmentStage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-md">
                          How far did you move in the development of your
                          project?{" "}
                        </FormLabel>
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={(value) => field.onChange(value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="MVP" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="light">MVP</SelectItem>
                              <SelectItem value="dark">Development</SelectItem>
                              <SelectItem value="system">Staging</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="teamSize"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-md">
                          What is the size of your team?
                        </FormLabel>
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={(value) => field.onChange(value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="0-5" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="light">0-5</SelectItem>
                              <SelectItem value="dark">5-10</SelectItem>
                              <SelectItem value="system">10-20</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex flex-col justify-start gap-4">
                    <p className="font-medium">Connect your social media</p>
                    <div className="flex flex-row gap-4">
                      <Button type="button" className="space-x-5 h-45 w-88">
                        LinkedIn
                      </Button>
                      <Button type="button" className="space-x-5 h-45 w-88">
                        Twitter
                      </Button>
                      <Button type="button" className="space-x-5 h-45 w-88">
                        GitHub
                      </Button>

                      <Dialog
                        onOpenChange={(isOpen) => {
                          if (!isOpen)
                            setShowDropzone((prev) => ({
                              ...prev,
                              whitepaper: false,
                            }));
                        }}
                      >
                        <DialogTrigger asChild>
                          <Button
                            type="button"
                            className="h-45 w-fit text-sm px-4"
                            onClick={() =>
                              setShowDropzone((prev) => ({
                                ...prev,
                                whitepaper: true,
                              }))
                            }
                          >
                            White Paper
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          {showDropzone.whitepaper && (
                            <div>
                              <FileDropzone onDrop={handleDrop("whitepaper")} />
                              {uploadedFiles.whitepaper &&
                                uploadedFiles.whitepaper.map((file) => (
                                  <div
                                    key={file.name}
                                    className="flex items-center space-x-2 border "
                                  >
                                    <span>{file.name}</span>
                                  </div>
                                ))}
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>

                      <Dialog
                        onOpenChange={(isOpen) => {
                          if (!isOpen)
                            setShowDropzone((prev) => ({
                              ...prev,
                              whitepaper: false,
                            }));
                        }}
                      >
                        <DialogTrigger asChild>
                          <Button
                            type="button"
                            className="h-45 w-fit text-sm px-4"
                            onClick={() =>
                              setShowDropzone((prev) => ({
                                ...prev,
                                whitepaper: true,
                              }))
                            }
                          >
                            Pitch Deck{" "}
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          {showDropzone.whitepaper && (
                            <div>
                              <FileDropzone onDrop={handleDrop("whitepaper")} />
                              {uploadedFiles.whitepaper &&
                                uploadedFiles.whitepaper.map((file) => (
                                  <div
                                    key={file.name}
                                    className="flex items-center space-x-2"
                                  >
                                    <img
                                      src="/path/to/file-icon.png"
                                      alt="File icon"
                                      className="w-6 h-6"
                                    />
                                    <span>{file.name}</span>
                                  </div>
                                ))}
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="calendlyLink"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-md">
                          Add Your Calendly Link
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Enter Calendly link" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="timezone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-md">
                          Timezone
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your timezone" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
