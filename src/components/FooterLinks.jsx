import {
  ButtonGroup,
  IconButton,
  Stack,
  Text,
  useMediaQuery,
  Box,
  Avatar,
} from '@chakra-ui/react';
import * as React from 'react';
import { SiGmail, SiGithub, SiLinkedin } from 'react-icons/si';

const FooterLinks = () => {
  const [isLessThan820] = useMediaQuery('(max-width: 820px)');

  return (
    <Box
      as="footer"
      role="contentinfo"
      pt="1"
      pb={{ base: '2', md: '4', lg: '1' }}
      bg="linear-gradient(to right, rgb(8, 8, 8), rgb(10, 34, 44))"
      color="white"
    >
      <Stack spacing={{ base: '1', md: '2' }}>
        <ButtonGroup alignSelf="center" variant="ghost" spacing="1">
          <IconButton
            _hover={{ opacity: 0.4 }}
            as="a"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:ajgonzales43@gmail.com"
            aria-label="Gmail"
            icon={
              <SiGmail fontSize={isLessThan820 ? 25 : 25} color="#de5246" />
            }
          />
          <IconButton
            _hover={{ opacity: 0.4 }}
            as="a"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/geloski43"
            aria-label="GitHub"
            icon={<SiGithub fontSize={isLessThan820 ? 25 : 25} />}
          />
          <IconButton
            rel="noopener noreferrer"
            target="_blank"
            _hover={{ opacity: 0.4 }}
            as="a"
            href="https://www.linkedin.com/in/angelo-gonzales-6b58a0212"
            aria-label="LinkedIn"
            icon={
              <SiLinkedin fontSize={isLessThan820 ? 25 : 25} color="#0077b5" />
            }
          />
        </ButtonGroup>
        <Text
          fontSize={{ base: '12px', sm: '16px', md: '16px', lg: '16px' }}
          as="kbd"
          align={'center'}
          fontWeight="extrabold"
        >
          &copy; {new Date().getFullYear()}
          <Avatar
            ml="2"
            size="2xs"
            name="geloski"
            src="/images/kapitanSmiley.png"
          />
          geloski43™. All rights reserved.
        </Text>
      </Stack>
    </Box>
  );
};

export default FooterLinks;
