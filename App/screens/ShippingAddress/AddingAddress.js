import React from 'react';
import {StyledViewCard} from './styled';
import {Content, Form, Item, Input, Label, Button, Text} from 'native-base';

const AddingAddress = () => {
  return (
    <Content>
      <Form>
        <StyledViewCard>
          <Item floatingLabel last>
            <Label>Full Name</Label>
            <Input />
          </Item>
        </StyledViewCard>
        <StyledViewCard>
          <Item floatingLabel last>
            <Label>Address</Label>
            <Input />
          </Item>
        </StyledViewCard>
        <StyledViewCard>
          <Item floatingLabel last>
            <Label>City</Label>
            <Input />
          </Item>
        </StyledViewCard>
        <StyledViewCard>
          <Item floatingLabel last>
            <Label>State/Province/Region</Label>
            <Input />
          </Item>
        </StyledViewCard>
        <StyledViewCard>
          <Item floatingLabel last>
            <Label>Zip Code (Postal Code)</Label>
            <Input />
          </Item>
        </StyledViewCard>
        <StyledViewCard>
          <Item floatingLabel last>
            <Label>Country</Label>
            <Input />
          </Item>
        </StyledViewCard>
      </Form>
      <Button block rounded success>
        <Text>SAVE ADDRESS</Text>
      </Button>
    </Content>
  );
};

export default AddingAddress;
