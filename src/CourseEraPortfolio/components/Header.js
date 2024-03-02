import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {

  const boxRef = useRef(null);
  const [yState, setYState] = useState(0);
  let prevScrollPosistin = window.scrollY;

  function handleScroll()
  {
    if( prevScrollPosistin < window.scrollY)
    {
      setYState("-200");
    }
    else
    {
      setYState("0");
    }
      prevScrollPosistin = window.scrollY;
  }

  useEffect( () =>
  {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  });

  const handleClick = (anchor, e) => {
    e.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
    zIndex={100}
      ref={boxRef}  
      position="fixed"
      transform={"auto"}
      top={0}
      left={0}
      right={0}
      translateY={yState}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={1}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {
              <HStack px={16} py={1} justifyContent="space-between" alignItems="center">
                { 
                  socials.map( (social,index) =>
                  {
                    return <a key={index} rel="noreferrer" href={social.url} target="_blank" > <FontAwesomeIcon icon={social.icon} size="2x" /> </a>
                  })
                }
              </HStack>
            }
          </nav>
          <nav>
            <HStack spacing={8}>
              {
                <>
                  <a href="/#projects" onClick={(e) => handleClick('projects', e)}>Projects</a>
                  <a href="/#contact-me" onClick={(e) => handleClick('contactme', e)}>Contact Me</a>
                </>
              }
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
