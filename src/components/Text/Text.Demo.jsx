import React from "react";
import { Text } from "./Text";
import { tokens } from '../../data/tokens'
import styled from "styled-components";

const DarkBg = styled.div`
    width: 100%;
    background: rgb(${tokens.colors.turquolise})
`

export const Demo = () => {
  return (
    <div>
      <Text size="s">This is a title</Text>
      <Text size="m">This is a title</Text>
      <Text size="l">This is a title</Text>
      <Text size="xl">This is a title</Text>

      <Text size="s">
        Love is the greatest of all human emotions. Indeed, he who has a
        girlfriend has one of life’s most precious possessions. However, keeping
        a girlfriend demands that you remain true and sensitive to her needs.
        Since you are the most cherished person in her life, your girl deserves
        your unrequited love and undivided attention.
      </Text>
      <Text size="m">
        A day that is void of your voice is to mean an incomplete one. For with
        your voice comes the soul melting laughter which is all I need to have a
        great and happy day. I hope mine makes you feel the same way. I love you
        my Cherie.
      </Text>
      <Text size="l">
        Love is not something that you can express in words. Love is something
        that is expressed by actions and felt with the heart. I don’t know how
        much loved I make you feel but trust me, dear, you are the most precious
        thing in my life. I love you!
      </Text>

      <DarkBg>
      <Text size="s" inverse>This is a title</Text>
      <Text size="m" inverse>This is a title</Text>
      <Text size="l" inverse>This is a title</Text>
      <Text size="xl"inverse>This is a title</Text>

      <Text size="s">
        Love is the greatest of all human emotions. Indeed, he who has a
        girlfriend has one of life’s most precious possessions. However, keeping
        a girlfriend demands that you remain true and sensitive to her needs.
        Since you are the most cherished person in her life, your girl deserves
        your unrequited love and undivided attention.
      </Text>
      <Text size="m">
        A day that is void of your voice is to mean an incomplete one. For with
        your voice comes the soul melting laughter which is all I need to have a
        great and happy day. I hope mine makes you feel the same way. I love you
        my Cherie.
      </Text>
      <Text size="l">
        Love is not something that you can express in words. Love is something
        that is expressed by actions and felt with the heart. I don’t know how
        much loved I make you feel but trust me, dear, you are the most precious
        thing in my life. I love you!
      </Text>
      </DarkBg>
    </div>
  );
};

export default Demo;
