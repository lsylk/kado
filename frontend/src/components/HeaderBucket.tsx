import React from "react";
import { Card } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

export type HeaderBucketProps = { header: string; meta: string; description: string };
const HeaderBucket = (props: HeaderBucketProps) => (
  <Card.Group>
    <Card>
      <Button circular icon="add" size="mini" floated="right"/>
      <Card.Content>
        <Card.Header>{props.header}</Card.Header>
        <Card.Meta>{props.meta}</Card.Meta>
        <Card.Description>{props.description}</Card.Description>
      </Card.Content>
    </Card>
  </Card.Group>
);

export default HeaderBucket;
