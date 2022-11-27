import { Box, Button, Title } from "@mantine/core";
import React from "react";
import TextInput from "../components/TextInput";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  url: z.string().url(),
});

const Livestream = () => {
  const [video, setVideo] = React.useState();
  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: { url: "" },
  });

  const onSubmit = (data) => {
    setVideo(data.url);
  };

  return (
    <Box>
      {video && <iframe src={video}></iframe>}
      <Title>Enter url of Livestream</Title>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <TextInput name="url" />
          <Button type="submit">Track</Button>
        </form>
      </FormProvider>
    </Box>
  );
};

export default Livestream;
