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
import { Input } from "@/components/ui/input";
import { MarketInformationFormSchema } from "@/schemas/MarketInformation";

export function TeamsForm() {
  // Define the submit handler
  function onSubmit(values: z.infer<typeof MarketInformationFormSchema>) {
    // Handle form submission
    console.log(values);
  }

  return (
    <div>
      <div className="main-div flex flex-col min-h-screen px-20">
        <div className="flex flex-row py-10 px-5 flex-grow">
          <div className="w-260 h-168 font-normal text-justify">
            this is temas
          </div>
          <div className="px-20 justify-center">Hello world how are you</div>
        </div>
      </div>
    </div>
  );
}
