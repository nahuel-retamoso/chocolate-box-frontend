import { Flex } from "@chakra-ui/react";
import { useDrop } from "react-dnd";

const TrashBin = () => {
  const [, drop] = useDrop(() => ({
    accept: "letterTrash",
    drop: () => {},
  }));

  return (
    <Flex h='70px' w='120px' align='center' justify='center' bg='blackAlpha.300' borderRadius='lg' ref={drop}>
      Trash Bin
    </Flex>
  );
};

export default TrashBin;
