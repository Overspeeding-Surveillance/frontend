import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import FileInput from "../components/FileInput";
import { uploadVideo } from "../api-services";
import { BASE_URL } from "../api-services";

const UploadVideo = () => {
  const methods = useForm();
  const [video, setVideo] = React.useState("");

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("video", data.video);
    uploadVideo(formData)
      .then((res) => res.json())
      .then((data) => setVideo(data.filename));
  };

  return (
    <React.Fragment>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <FileInput name="video" />
          <input type="submit" />
        </form>
      </FormProvider>
      {video && <img src={`${BASE_URL}/video_feed?filename=${video}`} />}
    </React.Fragment>
  );
};

export default UploadVideo;
