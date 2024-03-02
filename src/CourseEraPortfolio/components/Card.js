import {  CardBody, Heading, Image,  Stack, Text, } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Card as CCard}  from "@chakra-ui/react";

const Card = ({ title, description, imageSrc }) => 
{
  
  return (
    <CCard>
      <CardBody>
        <Image borderRadius="lg" src={imageSrc} alt={title}/>
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{title}</Heading>
          <Text color='blue.600'>{description}</Text>
          <a href="">See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></a>
        </Stack>
      </CardBody>
    </CCard>
    
)};

export default Card;
