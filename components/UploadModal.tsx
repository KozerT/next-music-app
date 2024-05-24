"use client";

import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";
import {
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import toast from "react-hot-toast";
import { useUser } from "@/hooks/useUser";
import uniqid from "uniqid";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

const UploadModal = () => {
  const uploadModal = useUploadModal();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { user } = useUser();
  const supabaseClient = useSupabaseClient();

  const { reset, register, handleSubmit } =
    useForm<FieldValues>({
      defaultValues: {
        author: "",
        title: "",
        song: null,
        image: null,
      },
    });

  const onChange = (open: boolean) => {
    if (!open) {
      reset();
      uploadModal.onClose();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (
    values
  ) => {
    try {
      setIsLoading(true);

      const imageFile = values.image?.[0];
      const songFile = values.song?.[0];

      if (!imageFile || !songFile || !user) {
        toast.error("Missing fields");
        return;
      }
      const uniqueID = uniqid();

      //Upload songs
      const {
        data: songData,
        error: songError
      } = await supabaseClient.storage.from('songs').upload(`song-${values.title}-${uniqueID}`, songFile,{
       cacheControl: '3600',
       upsert: false
      })

      if(songError){
        setIsLoading(false);
        return toast.error('Failed to upload song.');
      }

      //Upload image
      const {
        data: imageData,
        error: imageError
      } = await supabaseClient.storage.from('images').upload(`image-${values.title}-${uniqueID}`, imageFile,{
        cacheControl: '3600',
        upsert: false 
      })
      if(imageError){
        setIsLoading(false);
        return toast.error('Failed to upload image.');
      }

      //song record
      const { error: supabaseError } = await supabaseClient
        .from("songs")
        .insert({
          user_id: user.id,
          title: values.title,
          author: values.author,
          image_path: imageData.path,
          song_path: songData.path,
        });

      if (supabaseError) {
        setIsLoading(false);
        return toast.error(supabaseError.message);
      }
      router.refresh();
      setIsLoading(false);
      toast.success("Song created!");
      reset();
      uploadModal.onClose();

    } catch (error) {
      toast.error("Something went wrong...");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      title="Add a sog"
      description="Upload an mp3 file"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-3"
      >
        <Input
          id="title"   
          type="text"
          disabled={isLoading}
          placeholder="Song Title"
        {...register('title', {required: true})}
        />
        <Input
          id="author"
          disabled={isLoading}
          placeholder="Song Author"
          {...register("author", { required: true })}
        />
        <div>
          <div className="pb-1">Select a song file</div>
          <Input
            id="song"
            disabled={isLoading}
            type="file"
            accept=".mp3"
            {...register("song", { required: true })}
          />
        </div>
        <div>
          <div className="pb-1">Select an Image</div>
          <Input
            id="image"
            disabled={isLoading}
            type="file"
            accept="image/*"
            {...register("image", { required: true })}
          />
        </div>
        <Button
          disabled={isLoading}
          type="submit"
          className="text-white saturate-[.75] rounded-md"
        >
          Create
        </Button>
      </form>
    </Modal>
  );
};

export default UploadModal;
