import { Route, Link, Switch } from 'react-router-dom';
import { useState } from 'react';
import { ChakraProvider, Box, Flex, extendTheme } from '@chakra-ui/react';
import Nav from './Nav';
import Home from './Home';
import Blogs from './Blogs';
import Create from './Create';
import About from './About';
import Fonts from './Fonts';

const theme = extendTheme({
	fonts: {
		body: 'Inter',
		heading: 'Inter',
	},
});

function App() {
	let numBlogs = 0;
	const [blogsList, setBlogsList] = useState([]);
	const deleteBlog = (id) =>
		setBlogsList(blogsList.filter((blog) => blog.id != id));

	const addBlog = (blog) => {
		blog['id'] = numBlogs;
		blogsList.unshift(blog);
		setBlogsList(blogsList);
		++numBlogs;
	};

	return (
		<ChakraProvider theme={theme}>
			<Fonts />
			{/* This w='100vw' is extremely important as without it, sometimes there
			appears a horizontal scrollbar when changing the nav tabs */}
			<Flex flexDirection='column' alignItems='center' w='100vw'>
				<Nav />
				<Box w='50rem' my='8rem' className='SUP'>
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route path='/blogs'>
							<Blogs blogsList={blogsList} deleteBlog={deleteBlog} />
						</Route>
						<Route path='/create'>
							<Create addBlog={addBlog} />
						</Route>
						<Route path='/about'>
							<About />
						</Route>
					</Switch>
				</Box>
			</Flex>
		</ChakraProvider>
	);
}

export default App;
