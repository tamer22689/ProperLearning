import { Button, Flex, FormControl, FormLabel, Input, Select } from "@chakra-ui/react";

const ContactUs = () => {
  return (
    <>
      <Flex>
        <FormControl isRequired>
          <FormLabel>User Name</FormLabel>
          <Input placeholder='username' />
          <FormLabel>Email</FormLabel>
          <Input placeholder='email' />
          <Select placeholder='Whats Wrong?'>
            <option>other</option>
          </Select>
          <FormLabel>Discraption</FormLabel>
          <Input placeholder='discraption' />
          <Button placeholder="submit">Submit</Button>
        </FormControl>
      </Flex>
    </>
  );
};

export default ContactUs;
