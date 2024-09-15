"use client";
import React from "react";
import {useModal} from "@/hooks/store/use-modal-store";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form";
import {z} from "zod";
import axios from "axios";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle,} from "@/components/ui/dialog";
import qs from "query-string";

const formSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required",
    }).max(28, {
        message: "Title is too long",
    }),
});
const EditTitleModal = () => {
    const {type,isOpen,onClose,data}=useModal();
    const isModalOpen=isOpen&&type==='editTitle';
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
        },
    });
    const loading = form.formState.isSubmitting;
    const handleClose=()=>{
        form.reset();
        onClose()
    }
    const onSubmit = async (value: z.infer<typeof formSchema>) => {
        const url=qs.stringifyUrl({
            url:`/api/profiles/1`,
        })
        await axios.put(url, value).then(()=>{
            form.reset();
            window.location.reload();
            handleClose();
        });
    };
    React.useEffect(()=>{
        if(data.profile?.title){
            form.setValue('title',data.profile.title)
        }

    },[data,form])

    return (
        <Dialog open={isModalOpen} onOpenChange={handleClose}>
            <DialogContent className={"bg-white text-black p-0 overflow-hidden"}>
                <DialogHeader className={"py-8 px-6"}>
                    <DialogTitle className={"text-2xl text-center font-bold"}>
                        Customize your Title
                    </DialogTitle>

                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className={"space-y-8 px-6"}>
                            <FormField
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel
                                            className={
                                                "uppercase text-xs font-bold text-zinc-500 dark:text-secondary/700"
                                            }
                                        >
                                            Title
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={loading}
                                                className={
                                                    "bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                                                }
                                                placeholder={"Enter your title"}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                name={"title"}
                            />
                        </div>
                        <DialogFooter className={"bg-gray-100 px-6 py-4"}>
                            <Button disabled={loading} variant={"default"} type={"submit"}>
                                {
                                    loading?"loading ...":"  Update Title"
                                }
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default EditTitleModal;

