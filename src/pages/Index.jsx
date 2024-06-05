import { Box, Container, Flex, VStack, HStack, Text, Input, Select, Button, Table, Thead, Tbody, Tr, Th, Td, IconButton, Avatar, Spacer } from "@chakra-ui/react";
import { FaBell, FaQuestionCircle, FaPlus, FaFilter, FaSort, FaFileImport, FaFileExport, FaPen, FaTrash } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh">
        {/* Sidebar */}
        <Box w="20%" bg="gray.100" p={4}>
          <VStack align="start" spacing={4}>
            <Box>
              <Avatar size="xl" name="Project Name" />
              <Text fontSize="xl" fontWeight="bold">Project Name</Text>
              <Text>Category</Text>
            </Box>
            <VStack align="start" spacing={2}>
              <Text>Call Tool</Text>
              <Text>Invoice Tool</Text>
            </VStack>
          </VStack>
        </Box>

        {/* Main Content */}
        <Box w="80%" p={4}>
          {/* Top Navigation */}
          <Flex mb={4} align="center">
            <Input placeholder="Search" maxW="200px" mr={4} />
            <Select placeholder="Category" maxW="150px" mr={4}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </Select>
            <Button leftIcon={<FaFilter />} mr={4}>Filter</Button>
            <Button leftIcon={<FaSort />} mr={4}>Sort</Button>
            <Spacer />
            <Button leftIcon={<FaFileImport />} mr={4}>Import</Button>
            <Button leftIcon={<FaFileExport />} mr={4}>Export</Button>
            <Button leftIcon={<FaPlus />} colorScheme="blue">Add report</Button>
            <IconButton aria-label="Help" icon={<FaQuestionCircle />} ml={4} />
            <IconButton aria-label="Notifications" icon={<FaBell />} ml={4} />
            <Avatar ml={4} />
          </Flex>

          {/* Data Table */}
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th><Input type="checkbox" /></Th>
                <Th>ITEM</Th>
                <Th>VALUE ($)</Th>
                <Th>DATA</Th>
                <Th>DATA</Th>
                <Th>STATUS</Th>
                <Th>ACTION</Th>
              </Tr>
            </Thead>
            <Tbody>
              {Array(10).fill("").map((_, index) => (
                <Tr key={index}>
                  <Td><Input type="checkbox" /></Td>
                  <Td>Lorem dolore</Td>
                  <Td>9,000</Td>
                  <Td>Data series</Td>
                  <Td>DD/MM/YY</Td>
                  <Td><Button size="sm">Status</Button></Td>
                  <Td>
                    <HStack spacing={2}>
                      <IconButton aria-label="Edit" icon={<FaPen />} size="sm" />
                      <IconButton aria-label="Delete" icon={<FaTrash />} size="sm" />
                    </HStack>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>

          {/* Pagination */}
          <Flex justify="space-between" align="center" mt={4}>
            <Text>106 results</Text>
            <HStack spacing={2}>
              <Button size="sm">1</Button>
              <Button size="sm">2</Button>
              <Button size="sm">3</Button>
              <Button size="sm">...</Button>
              <Button size="sm">10</Button>
              <Button size="sm">11</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;