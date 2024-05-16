import { Flex, Stack, Text, Select, Button, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { COHORT } from "../data/cohort";
import axios from "axios";

export default function ExtractYouth() {
  const toast = useToast();
  const [selectedCohort, setSelectedCohort] = useState("");
  const [exportType, setExportType] = useState("1"); // Default to Export 1

  const handleExtract = async () => {
    try {
      const response = await axios.post("https://backendv2-6iuv.onrender.com/", {  // Ensure this URL matches your backend
        cohort: selectedCohort,
        exportType,
      });
  
      // Handle response (e.g., download file or display success message)
      if (response.status === 200) {
        toast({
          description: response.data.message || "Data extraction successful!",
          status: "success",
          isClosable: true,
        });
  
        // If your backend returns a file download link, trigger the download here:
        // const downloadUrl = response.data.downloadUrl;
        // window.location.href = downloadUrl; 
      } else {
        toast({
          description: response.data.error || "Failed to extract youth data.",
          status: "error",
          isClosable: true,
        });
      }
  
    } catch (error) {
      toast({
        description: "An error occurred during extraction.",
        status: "error",
        isClosable: true,
      });
      console.error(error);
    }
  };

  return (
    <Stack gap={6}>
      <Text fontSize="xl" fontWeight="semibold">
        Extract Youth Data
      </Text>

      <Select
        placeholder="Select Cohort"
        value={selectedCohort}
        onChange={(e) => setSelectedCohort(e.target.value)}
      >
        {COHORT.map((cohort) => (
          <option key={cohort} value={cohort}>
            {cohort}
          </option>
        ))}
      </Select>

      <Select
        placeholder="Select Export Type"
        value={exportType}
        onChange={(e) => setExportType(e.target.value)}
      >
        <option value="1">Export 1</option>
        <option value="2">Export 2</option>
      </Select>

      <Button onClick={handleExtract} isDisabled={!selectedCohort}>
        Extract Data
      </Button>
    </Stack>
  );
}
