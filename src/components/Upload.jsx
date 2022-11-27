import React from "react";
import { Button, Group, Text, useMantineTheme } from "@mantine/core";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons";
import { Dropzone } from "@mantine/dropzone";
import ml5 from "ml5";
import Canvas from "./Canvas";

const Upload = ({ accept, ...rest }) => {
  const theme = useMantineTheme();
  const [isModelLoaded, setModelLoaded] = React.useState(false);
  const [objectDetector, setObjectDetector] = React.useState();
  const [image, setImage] = React.useState();
  const [detections, setDetections] = React.useState([]);

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

  React.useEffect(() => {
    setObjectDetector(ml5.objectDetector("cocossd", {}, modelLoaded));
  }, []);

  const modelLoaded = () => {
    setModelLoaded(true);
    console.log("model-loaded");
  };

  const handleDetect = () => {
    const image = document.getElementById("uploaded-image");
    if (!image) return;
    objectDetector.detect(image, (err, results) => {
      // console.log({ err, results });
      if (err) {
        console.log(err);
        return;
      }
      setDetections(results);
    });
  };

  if (!isModelLoaded) return "loading...";

  return (
    <React.Fragment>
      <Dropzone
        onDrop={handleDrop}
        onReject={handleReject}
        maxSize={3 * 1024 ** 2}
        accept={accept}
        {...rest}
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
      {image && (
        <img style={{ display: "none" }} id="uploaded-image" src={image} />
      )}
      <Canvas src={image} detections={detections} />
      <Button onClick={handleDetect}>Detect</Button>
    </React.Fragment>
  );
};

export default Upload;
