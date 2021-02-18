import { Box, Link, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const About = () => {
	return (
		<Box>
			<Text fontSize='xl' textAlign='justify'>
				A simple blogging application with minimum features to learn React.js
				basics. Check the code repositoy at{' '}
				<Link
					href='https://github.com/vermaditya1999/React-Blogging-App'
					isExternal
				>
					Github <ExternalLinkIcon />
				</Link>
				.
			</Text>
		</Box>
	);
};

export default About;
