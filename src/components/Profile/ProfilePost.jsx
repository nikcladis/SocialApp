import { Flex, GridItem, Image, Text } from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";

const ProfilePost = ({ img }) => {
  return (
    <GridItem
      cursor={"pointer"}
      borderRadius={4}
      overflow={"hidden"}
      border={"1px solid"}
      borderColor={"whiteAlpha.300"}
      position={"relative"}
      aspectRatio={1}
    >
      <Flex
        opacity={0}
        _hover={{ opacity: 1 }}
        position={"absolute"}
        inset={0}
        bg={"blackAlpha.700"}
        transition={"opacity 300ms ease"}
        zIndex={1}
        justifyContent={"center"}
      >
        <Flex alignItems={"center"} justifyContent={"center"} gap={50}>
          <Flex alignItems={"center"}>
            <AiFillHeart size={20} />
            <Text fontWeight={"bold"} ml={1}>
              7
            </Text>
          </Flex>
          <Flex alignItems={"center"}>
            <FaComment size={20} />
            <Text fontWeight={"bold"} ml={1}>
              3
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Image
        src={img}
        alt="profile post"
        w={"100%"}
        h={"100%"}
        objectFit={"cover"}
      />
    </GridItem>
  );
};

export default ProfilePost;
