"use client";

import * as z from "zod";
import {formSchema} from "./constant";
import {Heading} from "@/components/heading";
import {Form, FormField, FormItem} from "@/components/ui/form";


import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

const ConversationPage = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt:""
        }
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) =>{
        console.log(values);
    };

    return ( 
        <div>
         <Heading 
            title="Conversation"
            description="Our most advanced
            conversation model."
            icon = {MessageSquare}
            iconColor = "text-violet-500"
            bgColor = "bg-violet-500/10"
            
         />  
         <div className="px-4 lg:px-8">
            <div>
            <Form {...form}>
            <form
            onSumbit = {form.handleSubmit(onSubmit)}
            className= "rounded-lg border w-full p-4 px-3 md:px-6 focus-whitin:shadow-sm grid grid-cols-12 gap-2"
            >
                <FormField 
                name="prompt"
                render={({field}) => (
                    <FormItem className="cols-span-12 lg:col-span-10">

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

export default ConversationPage;