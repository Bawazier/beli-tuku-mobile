import React from 'react';
import {StyledViewCard} from './styled';
import {Content, Form, Item, Input, Label, Button, Text} from 'native-base';

const ChangeAddress = () => {
  return (
    <Content>
      <Form>
        <StyledViewCard>
          <Item stackedLabel last>
            <Label>Save address as (ex : home address, office address)</Label>
            <Input />
          </Item>
          <Item stackedLabel last>
            <Label>Recipient’s name</Label>
            <Input />
          </Item>
        </StyledViewCard>
        <StyledViewCard>
          <Item stackedLabel last>
            <Label>Address</Label>
            <Input />
          </Item>
          <Item stackedLabel last>
            <Label>City or Subdistrict</Label>
            <Input />
          </Item>
          <Item stackedLabel last>
            <Label>Postal code</Label>
            <Input />
          </Item>
        </StyledViewCard>
        <StyledViewCard>
          <Item stackedLabel last>
            <Label>recipient's telephone number</Label>
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

export default ChangeAddress;
