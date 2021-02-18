import { Switch, Route, Link } from 'react-router-dom';
import { Box, Text, HStack, Container, Flex } from '@chakra-ui/react';

const NavLinkStyle = {
	px: '0.5rem',
	py: '0.30rem',
	color: 'gray.500',
	borderBottomWidth: '0.25rem',
	borderBottomColor: 'transparent',
	_hover: {
		color: 'gray.700',
	},
};

const NavLinkStyleActive = {
	px: '0.5rem',
	py: '0.30rem',
	color: 'gray.700',
	borderBottomWidth: '0.25rem',
	borderBottomColor: 'gray.700',
};

const Nav = () => {
	return (
		<Flex pt={4} justifyContent='center' w='100vw' borderBottomWidth='0.1rem'>
			<HStack spacing='6rem'>
				<NavLink name='Home' path='/' exact />
				<NavLink name='Browse' path='/blogs' />
				<NavLink name='Create' path='/create' />
				<NavLink name='About' path='/about' />
			</HStack>
		</Flex>
	);
};

const NavLink = ({ name, path, exact }) => {
	if (exact) {
		return (
			<Switch>
				<Route path={path} exact>
					<Box
						as={Link}
						{...NavLinkStyleActive}
						to={path}
						fontSize='xl'
						pb='0.5rem'
					>
						{name}
					</Box>
				</Route>
				<Route>
					<Box as={Link} {...NavLinkStyle} to={path} fontSize='xl' pb='0.5rem'>
						{name}
					</Box>
				</Route>
			</Switch>
		);
	} else {
		return (
			<Switch>
				<Route path={path}>
					<Box
						as={Link}
						{...NavLinkStyleActive}
						to={path}
						fontSize='xl'
						pb='0.5rem'
					>
						{name}
					</Box>
				</Route>
				<Route>
					<Box as={Link} {...NavLinkStyle} to={path} fontSize='xl' pb='0.5rem'>
						{name}
					</Box>
				</Route>
			</Switch>
		);
	}
};

export default Nav;
