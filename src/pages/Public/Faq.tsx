import { Link } from "react-router";
import { HelpCircle, } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { useState } from "react";
import { faqCategories } from "@/Conastance";



const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = faqCategories.map((category) => ({
    ...category,
    questions: category.questions.filter(
      (q) =>
        q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.a.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.questions.length > 0);

  return (
    
     <div>
         {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-8">
              <HelpCircle className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10">
              Find answers to common questions about PayFlow. Can't find what you're looking for? Contact our support team.
            </p>  
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category, catIndex) => (
                <div key={catIndex} className="mb-12 last:mb-0">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center text-primary-foreground text-sm">
                      {catIndex + 1}
                    </span>
                    {category.title}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-3">
                    {category.questions.map((item, qIndex) => (
                      <AccordionItem
                        key={qIndex}
                        value={`${catIndex}-${qIndex}`}
                        className="border rounded-xl px-6 bg-card"
                      >
                        <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-5">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg mb-4">
                  No questions found matching "{searchQuery}"
                </p>
                <Button variant="outline" onClick={() => setSearchQuery("")}>
                  Clear Search
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-8">
              Our support team is here to help you 24/7. Don't hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="gradient-primary text-primary-foreground">
                  Contact Support
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Live Chat
              </Button>
            </div>
          </div>
        </div>
      </section>
     </div>
  );
};

export default FAQ;