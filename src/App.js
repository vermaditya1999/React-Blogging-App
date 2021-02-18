import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
	const [blogsList, setBlogsList] = useState([]);

	// Retrieve blog array from local storage at the start of the application
	useEffect(() => {
		const data = localStorage.getItem('BLOGS_LIST');

		if (!data) {
			localStorage.setItem('BLOGS_LIST', blogsList);
		} else {
			setBlogsList(JSON.parse(data));
		}
	}, []);

	// When blogsList array changes, reflect the changes in local storage
	useEffect(() => {
		localStorage.setItem('BLOGS_LIST', JSON.stringify(blogsList));
	}, [blogsList]);

	const addBlog = (blog) => {
		setBlogsList([{ id: blogsList.length, ...blog }, ...blogsList]);
	};

	const deleteBlog = (id) => {
		setBlogsList(blogsList.filter((blog) => blog.id != id));
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
