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
					<ListIcon as={BiTask} color='green.500' />
					Add blogs.
				</ListItem>
				<ListItem>
					<ListIcon as={BiTask} color='green.500' />
					View all blogs.
				</ListItem>
				<ListItem>
					<ListIcon as={BiTask} color='green.500' />
					Delete any blog.
				</ListItem>
				<ListItem>
					<ListIcon as={BiTask} color='green.500' />
					Local Storage.
				</ListItem>
				<ListItem>
					<ListIcon as={BiTaskX} color='red.500' />
					Edit Blog.
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
				<ListItem>
					<ListIcon as={BiTaskX} color='red.500' />
					Responsive Design.
				</ListItem>
				<ListItem>
					<ListIcon as={BiTaskX} color='red.500' />
					Google Sign In.
				</ListItem>
			</List>
		</Box>
	);
};

export default Home;
