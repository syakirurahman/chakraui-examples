import { useState } from "react";
import {
  Alert,
  Select,
  Button,
  Checkbox,
  Modal,
  Input,
  Radio,
  Switch,
  Tooltip,
  Textarea,
  Flex,
  RadioGroup,
  Stack,
  ModalFooter,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";

const ComponentExamples = () => {
  const initOccupationList = [
    {
      value: "Frontend Engineer",
      label: "Frontend Engineer",
    },
    {
      value: "Backend Engineer",
      label: "Backend Engineer",
    },
    {
      value: "Fullstack Engineer",
      label: "Fullstack Engineer",
    },
    {
      value: "Technical Writer",
      label: "Technical Writer",
    },
    {
      value: "Developer Advocate",
      label: "Developer Advocate",
    },
    {
      value: "UI/UX Designer",
      label: "UI/UX Designer",
    },
    {
      value: "QA Engineer",
      label: "QA Engineer",
    },
  ];
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div style={{ maxWidth: "640px", padding: "0 1rem", margin: "1rem auto" }}>
      <h1>Chakra UI component examples</h1>
      <form>
        <Alert style={{ marginBottom: "1rem" }}>
          This is a Chakra UI info Alert
        </Alert>
        <div style={{ marginBottom: "1rem" }}>
          <label>Full name</label>
          <Input placeholder="Insert your full name" />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Email</label>
          <Input placeholder="Insert your email" type="email" />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Gender</label>
          <RadioGroup defaultValue="female">
            <Stack direction="row">
              <Radio value="female">Female</Radio>
              <Radio value="male">Male</Radio>
              <Radio value="other">Other</Radio>
            </Stack>
          </RadioGroup>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Occupation</label>
          <Select placeholder="Occupation">
            {initOccupationList.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </Select>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Bio</label>
          <Textarea placeholder="Describe yourself" rows={2} />
        </div>
        <Flex align="center" gap="1rem">
          <Flex align="center" gap="0.5rem">
            <Switch defaultChecked id="switch-1" />
            <label htmlFor="switch-1">This is switch component</label>
          </Flex>
          <Flex align="center" gap="0.5rem">
            <Checkbox defaultChecked id="check-1" />
            <label htmlFor="check-1">This is checkbox component</label>
          </Flex>
        </Flex>
        <br />
        <Tooltip label="This is a Chakra UI tooltip">
          <span>Hover me to show tooltip</span>
        </Tooltip>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "flex-end",
            marginTop: "1rem",
          }}
        >
          <Button variant="outline" type="reset">
            Reset
          </Button>
          <Button onClick={() => setIsDialogOpen(true)}>
            Save (Open Modal)
          </Button>
        </div>
      </form>

      <Modal isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <ModalContent>
          <ModalHeader>Lorem ipsum dolor sit amet</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque et massa at orci ultrices facilisis. Donec id viverra
              ante, a mollis odio. Morbi nec vulputate urna, sit amet pulvinar
              tortor.
            </p>
          </ModalBody>
          <ModalFooter flex="true" gap="1rem">
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsDialogOpen(false)}>Continue</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ComponentExamples;
