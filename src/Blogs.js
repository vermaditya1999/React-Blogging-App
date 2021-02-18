import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
	Box,
	Flex,
	Heading,
	Text,
	Stack,
	Button,
	IconButton,
	Spacer,
	AlertDialog,
	AlertDialogOverlay,
	AlertDialogContent,
	AlertDialogHeader,
	AlertDialogBody,
	AlertDialogFooter,
	useToast,
	Link as ChakraLink,
} from '@chakra-ui/react';
import { MdDelete, MdEdit } from 'react-icons/md';

const Blogs = ({ blogsList, deleteBlog }) => {
	const toast = useToast();

	const handleDeleteBlog = (blogID) => {
		deleteBlog(blogID);
		toast({
			title: 'Blog deleted successfuly!',
			status: 'success',
			isClosable: true,
			duration: 3000,
		});
	};

	if (blogsList.length === 0) {
		return (
			<Box>
				<Text fontSize='xl' textAlign='center'>
					Such empty, much wow.{' '}
					<ChakraLink as={Link} to='/create' fontSize='xl' textAlign='center'>
						Start blogging now!
					</ChakraLink>
				</Text>
			</Box>
		);
	}
	return (
		<Stack spacing='2rem'>
			{blogsList.map((blog) => (
				<Blog blog={blog} key={blog.id} handleDeleteBlog={handleDeleteBlog} />
			))}
		</Stack>
	);
};

const Blog = ({ blog, handleDeleteBlog }) => {
	const [isOpen, setIsOpen] = useState(false);
	const onClose = () => setIsOpen(false);
	const cancelRef = useRef();

	return (
		<Stack p='1rem' borderLeftWidth='0.1rem'>
			<Flex flexDirection='row' justifyContent='stretch'>
				<Heading size='lg'>{blog.title}</Heading>
				<Spacer />
				<IconButton icon={<MdEdit />} fontSize='lg' mr='1rem' />
				<IconButton
					icon={<MdDelete />}
					onClick={() => setIsOpen(true)}
					fontSize='lg'
				/>
			</Flex>
			<Text as='em'>{blog.author}</Text>
			<Text>{blog.content}</Text>

			{/* Alert Dialog Modal for deleting the Blog, copied from Chakra docs*/}
			<AlertDialog
				isOpen={isOpen}
				leastDestructiveRef={cancelRef}
				onClose={onClose}
			>
				<AlertDialogOverlay>
					<AlertDialogContent>
						<AlertDialogHeader fontSize='lg' fontWeight='bold'>
							Delete Blog
						</AlertDialogHeader>

						<AlertDialogBody>
							Are you sure you want to delete the blog titled{' '}
							<strong>{blog.title}</strong>?
						</AlertDialogBody>

						<AlertDialogFooter>
							<Button ref={cancelRef} onClick={onClose}>
								Cancel
							</Button>
							<Button
								colorScheme='red'
								onClick={() => handleDeleteBlog(blog.id)}
								ml={3}
							>
								Delete
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
		</Stack>
	);
};

export default Blogs;
