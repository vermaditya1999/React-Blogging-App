import { useState } from 'react';
import {
	Input,
	Textarea,
	Button,
	FormControl,
	FormLabel,
	Flex,
	useToast,
} from '@chakra-ui/react';

const Create = ({ addBlog }) => {
	const [blogTitle, setBlogTitle] = useState('');
	const [blogContent, setBlogContent] = useState('');
	const [blogAuthor, setBlogAuthor] = useState('Anonymous');

	const toast = useToast();

	const handleCreateBlog = (event) => {
		addBlog({
			title: blogTitle,
			content: blogContent,
			author: blogAuthor,
		});

		toast({
			title: 'Blog pubilished successfuly!',
			status: 'success',
			isClosable: true,
			duration: 3000,
		});
		event.preventDefault();
	};

	return (
		<Flex flexDirection='column' alignItems='center' justifyContent='center'>
			<form onSubmit={handleCreateBlog}>
				<Flex
					w='25rem'
					flexDirection='column'
					justifyContent='space-between'
					h='35rem'
				>
					<FormControl isRequired>
						<FormLabel fontSize='lg'>Title</FormLabel>
						<Input
							id='blogTitle'
							value={blogTitle}
							onChange={(e) => setBlogTitle(e.target.value)}
						/>
					</FormControl>
					<FormControl isRequired>
						<FormLabel fontSize='lg'>Content</FormLabel>
						<Textarea
							id='blogContent'
							value={blogContent}
							onChange={(e) => setBlogContent(e.target.value)}
							h='15rem'
						/>
					</FormControl>
					<FormControl isRequired>
						<FormLabel fontSize='lg'>Author</FormLabel>
						<Input
							placeholder='Author'
							id='blogAuthor'
							value={blogAuthor}
							onChange={(e) => setBlogAuthor(e.target.value)}
						/>
					</FormControl>
					<Button
						type='submit'
						mt='1rem'
						colorScheme='teal'
						py='1.5rem'
						fontSize='lg'
					>
						Publish
					</Button>
				</Flex>
			</form>
		</Flex>
	);
};

export default Create;
