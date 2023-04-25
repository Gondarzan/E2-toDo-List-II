import React from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import { motion } from 'framer-motion';

import {
    LinkContainerStyled,
    LinksContainerStyled,
    NavbarContainerStyled,
    UserNavStyled,
    UserContainerStyled,
    SpanStyled,
    MenuContainerStyled,
    HomeContainerStyled
} from './NavbarStyles';

const Navbar = () => {
    return (
        <NavbarContainerStyled>
            <div>
                <a href="#" className='title-react'>
                    REACT - E2
                </a>
            </div>
            <LinksContainerStyled>

                <HomeContainerStyled>
                    <motion.div whileTap={{ scale: 0.9 }} >
                        <a href="#">
                            <LinkContainerStyled>
                               Home
                            </LinkContainerStyled>
                        </a>
                    </motion.div>
                </HomeContainerStyled>

                <HomeContainerStyled>
                    <motion.div whileTap={{ scale: 0.9 }} >
                        <a href="#">
                            <LinkContainerStyled>
                               To Do List
                            </LinkContainerStyled>
                        </a>
                    </motion.div>
                </HomeContainerStyled>



                <UserNavStyled>
                    <UserContainerStyled>
                        <SpanStyled>
                        <motion.div whileTap={{ scale: 0.9 }} >
                        <a href="#">

                            <LinkContainerStyled>
                               Poke Api
                            </LinkContainerStyled>


                        </a>
                    </motion.div>
                        </SpanStyled>
                    </UserContainerStyled>
                </UserNavStyled>
            </LinksContainerStyled>
        </NavbarContainerStyled>
    )
}

export default Navbar


