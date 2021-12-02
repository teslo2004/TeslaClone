import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        backgroundImg="model-s.png"
        description="Order Online for Touchless Delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
      <Section
        title="Model Y"
        backgroundImg="model-y.jpg"
        description="Order Online for Touchless Delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
      <Section
        title="Model X"
        backgroundImg="model-x.jpg"
        description="Order Online for Touchless Delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
      <Section
        title="Model 3"
        backgroundImg="model-3.jpg"
        description="Order Online for Touchless Delivery"
        leftBtn="Custom Order"
        rightBtn="Existing Inventory"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
