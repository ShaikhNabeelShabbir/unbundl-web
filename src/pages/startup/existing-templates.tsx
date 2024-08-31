import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ExistingTemplates = () => {
  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-col space-y-5 mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[...Array(6)].map((_, index) => (
            <Card key={index} className="flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="text-base sm:text-lg">
                  SAFT Contract Template
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm sm:text-base">
                  A simple agreement for future equity (SAFT) is a financing
                  contract that may be used by a startup company to raise
                  capital in its seed financing rounds.
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Download</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExistingTemplates;
