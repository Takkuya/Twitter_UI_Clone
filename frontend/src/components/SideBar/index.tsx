import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchInput,
  SearchIcon,
  SearchWrapper,
  Body,
} from './styles';

export default function SideBar() {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion name="Gabriel Jesus" nickname="@Jesus_10" />,
              <FollowSuggestion name="Paulo Souza" nickname="@Batima" />,
              <FollowSuggestion name="Gabriel Kato" nickname="@Rico3000" />,
            ]}
          />
          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />

          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />

          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
}
