import React from "react";
import { Box, Button, Group, Text, useMantineTheme } from "@mantine/core";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import ml5 from "ml5";

const Upload = (props) => {
  const theme = useMantineTheme();
  const [image, setImage] = React.useState();

  const handleDrop = (files) => {
    const reader = new FileReader();
    const file = files[0];

    reader.readAsDataURL(file);

    reader.onload = (event) => {
      setImage(event.target.result);
    };

    reader.onerror = () => {
      console.log("error");
    };
  };

  const handleReject = (files) => {};

  const modelLoaded = () => {
    console.log("model-loaded");
  };
  const objDetector = ml5.objectDetector("cocossd", {}, modelLoaded);

  const handleDetect = () => {
    const image = document.getElementById("uploaded-image");
    if (!image) return;
    objDetector.detect(image, (err, results) => {
      console.log({ err, results });
    });
  };

  return (
    <React.Fragment>
      <Box
        sx={(theme) => ({
          width: 20,
          height: 20,
          background: theme.colors.pink[0],
        })}
      />
      <Box
        sx={(theme) => ({
          width: 20,
          height: 20,
          background: theme.colors.pink[1],
        })}
      />
      <Box
        sx={(theme) => ({
          width: 20,
          height: 20,
          background: theme.colors.pink[2],
        })}
      />
      <Box
        sx={(theme) => ({
          width: 20,
          height: 20,
          background: theme.colors.pink[3],
        })}
      />
      <Box
        sx={(theme) => ({
          width: 20,
          height: 20,
          background: theme.colors.pink[4],
        })}
      />
      <Box
        sx={(theme) => ({
          width: 20,
          height: 20,
          background: theme.colors.pink[5],
        })}
      />
      <Box
        sx={(theme) => ({
          width: 20,
          height: 20,
          background: theme.colors.pink[6],
        })}
      />
      <Box
        sx={(theme) => ({
          width: 20,
          height: 20,
          background: theme.colors.pink[7],
        })}
      />
      <Box
        sx={(theme) => ({
          width: 20,
          height: 20,
          background: theme.colors.pink[8],
        })}
      />
      <Box
        sx={(theme) => ({
          width: 20,
          height: 20,
          background: theme.colors.pink[9],
        })}
      />
      <Box
        sx={(theme) => ({
          width: 20,
          height: 20,
          background: theme.colors.blue[0],
        })}
      />
      <Box
        sx={(theme) => ({
          width: 20,
          height: 20,
          background: theme.colors.blue[1],
        })}
      />
      <Box
        sx={(theme) => ({
          width: 20,
          height: 20,
          background: theme.colors.blue[2],
        })}
      />
      <Box
        sx={(theme) => ({
          width: 20,
          height: 20,
          background: theme.colors.blue[3],
        })}
      />
      <Box
        sx={(theme) => ({
          width: 20,
          height: 20,
          background: theme.colors.blue[4],
        })}
      />
      <Box
        sx={(theme) => ({
          width: 20,
          height: 20,
          background: theme.colors.blue[5],
        })}
      />
      <Box
        sx={(theme) => ({
          width: 20,
          height: 20,
          background: theme.colors.blue[6],
        })}
      />
      <Box
        sx={(theme) => ({
          width: 20,
          height: 20,
          background: theme.colors.blue[7],
        })}
      />
      <Box
        sx={(theme) => ({
          width: 20,
          height: 20,
          background: theme.colors.blue[8],
        })}
      />
      <Box
        sx={(theme) => ({
          width: 20,
          height: 20,
          background: theme.colors.blue[9],
        })}
      />
      <Dropzone
        onDrop={handleDrop}
        onReject={handleReject}
        maxSize={3 * 1024 ** 2}
        accept={IMAGE_MIME_TYPE}
        {...props}
      >
        <Group
          position="center"
          spacing="xl"
          style={{ minHeight: 220, pointerEvents: "none" }}
        >
          <Dropzone.Accept>
            <IconUpload
              size={50}
              stroke={1.5}
              color={
                theme.colors[theme.primaryColor][
                  theme.colorScheme === "dark" ? 4 : 6
                ]
              }
            />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX
              size={50}
              stroke={1.5}
              color={theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]}
            />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <IconPhoto size={50} stroke={1.5} />
          </Dropzone.Idle>

          <div>
            <Text size="xl" inline>
              Drag images here or click to select files
            </Text>
            <Text size="sm" color="dimmed" inline mt={7}>
              Attach as many files as you like, each file should not exceed 5mb
            </Text>
          </div>
        </Group>
      </Dropzone>
      {image && <img id="uploaded-image" src={image} />}
      <Button onClick={handleDetect}>Detect</Button>
    </React.Fragment>
  );
};

export default Upload;
