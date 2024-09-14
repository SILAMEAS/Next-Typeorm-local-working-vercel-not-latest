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
import {useRouter} from "next/navigation";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

const formSchema = z.object({
    name: z.string().min(1, {
        message: "Server is required",
    }),
    imageUrl: z.string().min(1, {
        message: "image is required",
    }),
});
const EditTitleModal = () => {
    const {type,isOpen,onClose}=useModal();
    const isModalOpen=isOpen&&type==='editTitle';
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            imageUrl: "",
        },
    });
    const router = useRouter();
    const loading = form.formState.isSubmitting;
    const handleClose=()=>{
        form.reset();
        onClose()
    }
    const onSubmit = async (value: z.infer<typeof formSchema>) => {
        await axios.patch("/api/users", value);
        form.reset();
        router.refresh();
        handleClose();
    };

    return (
        <Dialog open={isModalOpen} onOpenChange={handleClose}>
            <DialogContent className={"bg-white text-black p-0 overflow-hidden"}>
                <DialogHeader className={"py-8 px-6"}>
                    <DialogTitle className={"text-2xl text-center font-bold"}>
                        Customize your server
                    </DialogTitle>
                    <DialogDescription className={"text-center text-zinc-500"}>
                        Give your server a personality with a name and an image. You can
                        always change it later.
                    </DialogDescription>
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
                                            Server Name
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={loading}
                                                className={
                                                    "bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                                                }
                                                placeholder={"Enter your server name"}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                name={"name"}
                            />
                        </div>
                        <DialogFooter className={"bg-gray-100 px-6 py-4"}>
                            <Button disabled={loading} variant={"default"} type={"submit"}>
                                Create
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default EditTitleModal;

