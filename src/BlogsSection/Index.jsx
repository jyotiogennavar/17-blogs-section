import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const Index = () => {
  return (
    <Wrapper>
      <TittleWrapper>
        <Tittle>Tales of the Solo Travelers</Tittle>
        <Text>
          Stepping off the beaten path, hearts open to adventure - Read the experiences of those who explore the world
          on their own terms.
        </Text>
      </TittleWrapper>
      <BlogsSection />
    </Wrapper>
  );
};

const Wrapper = styled(motion.section)`
  font-family: "Poppins", sans-serif;
  padding: 4rem 1rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 4rem 0;
    max-width: 80%;
  }
`;

const TittleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Tittle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 0;
    max-width: 40%;
  }
`;

const Text = styled.p`
  font-size: 1rem;
  font-weight: 400;
  font-family: "Poppins", sans-serif;

  @media (min-width: 768px) {
    font-size: 1.2rem;
    max-width: 35%;
  }
`;

const BlogsSection = () => {
  return (
    <BlogsWrapper>
      <BlogCardOne>
        <CardContent>
          <p>Traveling the Greek Islands</p>
          <span>“I had the time of my live exploring the city alone...”</span>
          <CardFooter>
            <p>Sarah Johns</p>
            <FiArrowUpRight />
          </CardFooter>
        </CardContent>
      </BlogCardOne>

      <BlogCardTwo>
        <CardContent>
          <p>Adventures of Bali</p>

          <CardFooter>
            <p>Theo James</p>
            <FiArrowUpRight />
          </CardFooter>
        </CardContent>
      </BlogCardTwo>

      <BlogCardThree>
        <CardContent>
          <p>Seeing the Old Beauty</p>

          <CardFooter>
            <p>Riya Patel</p>
            <FiArrowUpRight />
          </CardFooter>
        </CardContent>
      </BlogCardThree>
    </BlogsWrapper>
  );
};

const BlogsWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 60% 40%;
  }
`;

const CardContent = styled.div`
  background-color: #eef0f6;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;

  p {
    font-size: 1rem;
    font-weight: 400;
  }

  span {
    display: none;
  }

  @media (min-width: 768px) {
    border-top: 0.8rem solid #fff;
    border-left: 0.8rem solid #fff;
    border-radius: 1rem 0 1rem 0;
    width: fit-content;

    p {
      font-size: 1.3rem;
    }

    span {
      font-size: 1rem;
      max-width: 80%;
    }
  }
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 0.8rem;
    font-weight: 600;
    font-style: italic;
  }

  svg {
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    svg {
      font-size: 1.2rem;
    }
  }
`;

const BlogCard = styled(motion.article)`
  background-size: cover;
  background-position: center;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  height: 15rem;

  @media (min-width: 768px) {
  }
`;

const BlogCardOne = styled(BlogCard)`
  grid-row: span 2;
  background-image: url("https://images.pexels.com/photos/10230644/pexels-photo-10230644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");

  @media (min-width: 768px) {
    height: 32rem;
  }
`;

const BlogCardTwo = styled(BlogCard)`
  background-image: url("https://images.pexels.com/photos/2474689/pexels-photo-2474689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
`;

const BlogCardThree = styled(BlogCard)`
  background-image: url("https://images.pexels.com/photos/15406805/pexels-photo-15406805/free-photo-of-a-view-of-the-city-of-istanbul-with-the-blue-mosque-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
`;

export default Index;
