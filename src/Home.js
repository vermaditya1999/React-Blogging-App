import { BiTask, BiTaskX } from 'react-icons/bi';
import { Box, Heading, List, ListItem, ListIcon } from '@chakra-ui/react';

const Home = () => {
	return (
		<Box>
			<Heading size='lg' textAlign='justify'>
				Features
			</Heading>
			<List mt='1rem' fontSize='xl'>
				<ListItem>
					<ListIcon as={BiTask} color='teal.600' />
					Add blogs. (Title, Content, Author name)
				</ListItem>
				<ListItem>
					<ListIcon as={BiTask} color='teal.600' />
					View all blogs.
				</ListItem>
				<ListItem>
					<ListIcon as={BiTask} color='teal.600' />
					Delete any blog.
				</ListItem>
				<ListItem>
					<ListIcon as={BiTaskX} color='red.500' />
					Local Storage.
				</ListItem>
				<ListItem>
					<ListIcon as={BiTaskX} color='red.500' />
					Search Blogs.
				</ListItem>
				<ListItem>
					<ListIcon as={BiTaskX} color='red.500' />
					Filter search.
				</ListItem>
				<ListItem>
					<ListIcon as={BiTaskX} color='red.500' />
					Pagination in browsing.
				</ListItem>
			</List>
		</Box>
	);
};

export default Home;
